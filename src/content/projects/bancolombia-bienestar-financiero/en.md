---
slug: bancolombia-bienestar-financiero
locale: en
title: "Financial wellbeing in Mi Bancolombia: clearer view of available money"
shortTitle: Financial Wellbeing
summary: Case study from a UI challenge on the Día a Día section of Mi Bancolombia, focused on balance transparency, transactions and automatic debits.
role: Product Designer (research, UX and UI)
duration: "3 days"
status: finalizado
featured: true
cover: images/bancolombia/cuenta.png
tags: [Fintech, UX/UI, Research, Banking]
tools: ["AI research, NotebookLM, Figma, Claude"]
previousSlug: kreditime
order: 4
---

## Context

This case came from a UI design challenge on the *Día a Día* section of the Mi Bancolombia app. The brief gave the research goal and a list of pain points and needs, but it lacked context I couldn't assume. So I ran additional research before designing.

It is a conceptual exercise: it has no official relationship with the bank and was not shipped.

## Role

I did the whole process on my own: research, synthesis, opportunity definition, flows, high-fidelity screens and a clickable prototype.

## Challenge

People need to trust what they see in their account. The pain points pointed to a loss of control over money rather than an isolated visual issue.

## Research

I used AI to collect and classify large volumes of comments from review platforms and social media. By traditional methods, that would have taken several days. I then recruited people with a Bancolombia account to dig into the reasons behind those findings and interviewed three of them. I built an empathy map from that input.

The sample is small. With more time and resources I would interview more profiles representing the bank's user personas, until reaching thematic saturation.

### Pain points found

- Balances that stay for hours with debits that never complete.
- Automatic debits with no alert or entry announcing the transaction.
- Silent tax charges that can't be traced to any transaction.
- Preventive blocks with no way out, or that force in-person manual flows, even when money is available.

### Empathy map

- **Thinks and feels:** anxiety and uncertainty when a transfer doesn't show up or the balance reads zero; loss of control when money is taken from their Pockets without a clear alert; confusion because the order of times doesn't match the order of operations.
- **Sees:** same-day transactions listed out of order, heavy use of red and green, technical labels that don't show the real merchant name, "system unavailable" messages and consolidated statements only every three months.
- **Says and does:** refreshes the history repeatedly, downloads receipts one by one, keeps parallel accounts in Excel or notes and manually checks the 4x1000 tax exemption.
- **Hears:** viral stories about money "in limbo" and advice from friends and advisors, such as not keeping important savings in Pockets or having a plan B at another bank.

From the interviews: "I don't like being controlled with my money" and "I don't want to spend much time in the app."

### User personas

The comments revealed two profiles:

- **Profile A (personal finance / salaried):** wants to understand where their salary goes, avoid surprise debits from their Pockets and control fixed expenses or limits.
- **Profile B (entrepreneur / small business):** uses the Día a Día history as an operational tool to check whether a customer has paid and in what order transfers arrived.

Because of time, I focused only on Profile A.

## Problem definition

> A Mi Bancolombia user managing daily money from *Día a Día* needs a single, automatic view showing how much money is actually available, discounting upcoming commitments and Pockets, and anticipating critical liquidity moments without manual tracking, because today fragmented information, technical labels and the fear of facing expenses cause stress, abandoned tracking and the risk of falling behind on obligations.

### How Might We questions

**Axis 1: clarity, unification and low cognitive friction**

1. Centralize transactions, cut-off dates and installments in one automatic view, translating technical codes into plain language and the usual chronological order.
2. Present the summary of expenses and income in an empathetic, progressive and actionable way to reduce financial anxiety.

**Axis 2: real liquidity versus committed money**

3. Distinguish at first glance the accounting balance from the money actually available today, discounting what is reserved in Pockets and upcoming obligations.
4. Help people with irregular income visualize inflows and fixed payments without keeping parallel accounts.

**Axis 3: anticipation, prioritization and proactive alerts**

5. Turn the history into a forward-looking timeline that warns about liquidity gaps and automatic debits before they happen.
6. Guide the user when projected liquidity falls short, to decide which obligation to prioritize and which expense to postpone without incurring interest or arrears.

### Prioritization

I prioritized by how each question affects a pain point and by technology effort versus trust gained:

- **P1:** questions 1, 3 (high impact) and 5 (medium). Lack of transparency leaves information open to interpretation and removes the sense of control.
- **P2:** question 2. With ordered, reliable data, the next step is for people to want to enter the section without anxiety.
- **P3:** questions 4 and 6. They depend on user configuration and on predicting financial behavior, so they have no immediately actionable impact.

## Process and solution

To address the feeling of duplicated information ("why are there so many sections with the same thing?"), the navigation starts from a single source of truth in **Savings Account**, which separates the truly available balance from held or committed money. From there, the flow splits into three views with distinct purposes:

- **My transactions:** chronological view with human language and the exact time in the detail.
- **History and reports:** categories in a neutral palette, without the overuse of red, and report downloads by date range.
- **My pockets:** traceability of effects and automatic debits under the principle of *recognition rather than recall*.

![Flow map of the pain points addressed in Mi Bancolombia](/images/bancolombia/flujos-pain-points.png)

### Account

Showing pending transactions clearly and ahead of time, reflected directly in balances, helps people understand their cash flow and the money they really have available. It reduces negative experiences tied to charges perceived as unexpected or hidden.

![Savings account screen with available balance separated from committed money](/images/bancolombia/cuenta.png)

### My transactions

Customers should find all their account information in one place, without moving through sections with duplicated data. Transactions are ordered by creation or request date, not by the moment the bank processes them, because the latter alters the chronological order and confuses how money was actually handled.

### History

Relying only on the bank for a consolidated statement creates uncertainty. So I proposed **custom reports** by period. Calling them "reports" instead of "statements" avoids confusion about their official status while giving timely access to information.

### My pockets

Pockets should show their full history: creation dates, transactions, debits and any effect on the saved money. The experience prioritizes *recognition rather than recall*: visible, contextual information explaining what happened to the money, when and why, without relying on remembering what was authorized.

<p class="flow-cta"><a href="https://prueba-ui-juanlozano-bc.netlify.app/" target="_blank" rel="noopener noreferrer">View prototype <span aria-hidden="true">→</span></a></p>

## Validation

No tests with real users have been run yet. I recommend moderated usability tests, since they assess whether goals are met in each flow and also reveal perceptions and difficulties. The objectives are:

1. **Understanding transactions:** with a hypothetical case, measure whether people identify what is happening with their transactions, including statuses, debits and effects on available balance.
2. **Report accessibility:** validate whether, in a given scenario, people can intuitively and independently find how to generate a transaction report for a period.
3. **Control over automatic debits:** assess whether people understand how debits happen, including from pockets, and can make an informed decision about authorizing them.

## AI in this process

AI sped up collecting and classifying pain points, both those in the brief and additional findings. During prototyping, it also sped up building proposals and enabled early conceptual validation with proxy users, which surfaced improvements mainly in interface copy. These validations do not replace tests with real users.

## Learnings

Banking apps often contain all the information people need, but can struggle to organize and present it effectively.

This exercise helped me shape a solution that makes extensive use of the information and capabilities the bank already has. One key finding is that people do not necessarily want specialized sections where they can explore every aspect of their finances. They want quick, concrete answers that help them make everyday decisions.

That information should be immediately available, easy to understand and leave no room for assumptions. When people have to interpret, infer or fill in the gaps themselves, uncertainty grows and can lead to a negative perception of the experience.

## Note

This is a design exercise. Brand and product ownership belong to their respective holders.
