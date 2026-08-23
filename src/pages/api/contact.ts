import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '../../lib/site';

// When building for GitHub Pages (static backup), we must prerender this route to avoid build errors,
// even though the contact form submission won't work on the static host.
export const prerender = process.env.GITHUB_PAGES === 'true';

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

    // 3. Send email via Resend
    // Use RESEND_API_KEY from environment variables (Vercel sets this).
    const apiKey = process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not defined.');
      return new Response(
        JSON.stringify({ error: 'Mail service configuration error.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: site.email,
      subject: `New Contact Form Message from ${name.trim()}`,
      replyTo: email.trim(),
      html: `
        <h2>New Message from portfolio contact form</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; font-family: sans-serif; background-color: #f7f7f7; padding: 15px; border-radius: 4px; border: 1px solid #ddd;">${message.trim()}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send message.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
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
