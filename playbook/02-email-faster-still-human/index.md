---
layout: playbook
title: "Email Faster, Still Human"
subtitle: "A three-pass workflow for drafting clear replies, de-escalating tense threads, and keeping your own voice."
episode: 2
read_time: "6 min"
category: "Writing & comms"
tagline: "No robotic fluff"
supporting_library:
  - label: "Email rewrite prompt"
    url: "/library/email-rewrite/"
    tag: "Writing"
  - label: "Redaction checklist"
    url: "/library/redaction-checklist/"
    tag: "Policy"
  - label: "Weekly status update"
    url: "/library/status-update/"
    tag: "Operations"
---

AI-generated emails fail when people ask a model to *"write an email about X"* from a blank page. The result is bloated, overly formal, and full of filler phrases nobody uses at work.

The fix is simple: **supply the facts in rough bullet points first**, let AI organize the structure, and trim anything that doesn't sound like you.

> **Privacy boundary:** Strip recipient names, email addresses, invoice numbers, and proprietary figures before pasting thread context.

## The 3-Pass Email Workflow

### Pass 1: Bullet the raw facts (60 seconds)
Write 3 to 5 ugly bullets covering:
- Why you are writing
- The exact decision, answer, or update
- What you need from the recipient and by when

### Pass 2: Generate two calibrated drafts (60 seconds)
Ask AI for a **short default version** (3–5 sentences) and a **detailed version** when extra context is warranted. Require it to list any ambiguities as questions instead of guessing.

### Pass 3: Human voice & accuracy check (90 seconds)
Before sending:
1. Remove throat-clearing openers (*"I hope this email finds you well"*).
2. Verify every date, number, and deliverable against your notes.
3. Re-insert real names and links directly in your email client.

## Copy/Paste Prompt (Bullet-to-Email Drafter)

```text
Draft a workplace email from my rough bullets below.

Rules:
- Sound calm, direct, and human—avoid corporate buzzwords and filler openers.
- Preserve every fact, date, and constraint accurately.
- Do NOT invent commitments, timelines, or background details.
- If a detail is ambiguous or missing, list it under "Questions to confirm" rather than guessing.

Provide:
1) Subject line options (2 clear, specific choices)
2) Concise draft (3–5 sentences, default choice)
3) Slightly fuller draft (only if context needs explanation)
4) Questions to confirm before sending

Audience & tone: [e.g., internal peer / manager / external vendor — warm-professional]
Rough bullets:
[PASTE SANITIZED BULLETS HERE]
```

## When dealing with tense threads
If you receive a frustrated message, paste the sanitized summary and ask AI to *"extract only the factual requests and questions, ignoring emotional framing."* Reply to the facts, not the heat.

**Next episode:** [Episode 03 — Meeting Prep & Clean Summaries]({{ '/playbook/03-meeting-prep-and-summaries/' | relative_url }}).
