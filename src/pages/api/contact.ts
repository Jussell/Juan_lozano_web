import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '../../lib/site';

// Must be a literal `false`: Astro reads this value statically, and any expression
// (e.g. process.env.X) is ignored, which prerenders the route and creates no serverless function.
// The GitHub Pages workflow deletes src/pages/api before building because a static host cannot run it.
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message, website } = body;

    // 1. Honeypot check (anti-spam)
    // If the hidden 'website' field contains any value, we treat it as spam.
    // We return a 200 OK success response to trick the bot into thinking it succeeded,
    // but we silently discard the message.
    if (website) {
      console.warn('Spam detected via honeypot field.');
      return new Response(
        JSON.stringify({ success: true, message: 'Spam dropped' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Input validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(
        JSON.stringify({ error: 'Invalid name. Must be at least 2 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return new Response(
        JSON.stringify({ error: 'Invalid message. Must be at least 10 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Deliver the message. Two optional channels: Google Sheets and Resend email.
    // The request succeeds if at least one configured channel works.
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    let sheetOk = false;
    let emailOk = false;
    let configured = 0;

    // 3a. Google Sheets via Apps Script web app
    const sheetUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || import.meta.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const sheetSecret = process.env.GOOGLE_SHEETS_SECRET || import.meta.env.GOOGLE_SHEETS_SECRET;
    if (sheetUrl) {
      configured++;
      try {
        const res = await fetch(sheetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            secret: sheetSecret,
            name: cleanName,
            email: cleanEmail,
            message: cleanMessage,
            locale: typeof body.locale === 'string' ? body.locale : '',
          }),
          redirect: 'follow',
        });
        const result = await res.json();
        sheetOk = res.ok && result.success === true;
        if (!sheetOk) console.error('Google Sheets error:', result);
      } catch (err) {
        console.error('Google Sheets request failed:', err);
      }
    }

    // 3b. Email via Resend
    const apiKey = process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
    if (apiKey) {
      configured++;
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: site.email,
        subject: `New Contact Form Message from ${cleanName}`,
        replyTo: cleanEmail,
        html: `
          <h2>New Message from portfolio contact form</h2>
          <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; font-family: sans-serif; background-color: #f7f7f7; padding: 15px; border-radius: 4px; border: 1px solid #ddd;">${escapeHtml(cleanMessage)}</p>
        `,
      });
      emailOk = !error;
      if (error) console.error('Resend error:', error);
    }

    if (configured === 0) {
      console.error('No delivery channel configured (GOOGLE_SHEETS_WEBHOOK_URL / RESEND_API_KEY).');
      return new Response(
        JSON.stringify({ error: 'Mail service configuration error.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!sheetOk && !emailOk) {
      return new Response(
        JSON.stringify({ error: 'Failed to send message.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Request processing error:', err);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
