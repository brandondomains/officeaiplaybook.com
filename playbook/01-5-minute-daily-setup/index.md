---
layout: playbook
title: "The 5-Minute Daily Setup"
subtitle: "What to ask AI every morning so your day starts with clarity, priorities, and ready-to-use templates."
episode: 1
read_time: "5 min"
category: "Daily workflow"
tagline: "Repeatable habit"
supporting_library:
  - label: "Email rewrite prompt"
    url: "/library/email-rewrite/"
    tag: "Writing"
  - label: "Meeting minutes template"
    url: "/library/meeting-minutes/"
    tag: "Meetings"
  - label: "Redaction checklist"
    url: "/library/redaction-checklist/"
    tag: "Policy"
---

Most office workers don't need "prompt engineering." They need a calm, repeatable morning routine that lowers decision fatigue before the inbox takes over.

This 5-minute setup turns a scattered list of meetings, messages, and open tasks into a prioritized plan and ready-to-adapt message templates.

> **Privacy boundary:** Never paste confidential names, client records, or internal credentials into AI tools. Use role labels and placeholders (`[Client]`, `[Project]`, `[Deadline]`).

## The 5-Minute Daily AI Setup

### Step 1 (60 seconds): Dump your sanitized context
Gather three short inputs:
- Today's meetings (times and general topics)
- Sanitized urgent messages (high-level summaries without personal identifiers)
- Tasks already on your list

### Step 2 (60 seconds): Define what "done" looks like
State the single outcome that would make today a solid workday for your role.

### Step 3 (60 seconds): Separate urgency from impact
Have AI rank your top 3 priorities and explicitly list what can wait until tomorrow.

### Step 4 (60 seconds): Spot bottlenecks early
Ask where back-to-back meetings, missing approvals, or unclear dependencies could derail your afternoon.

### Step 5 (60 seconds): Generate starter drafts
Have AI prepare placeholder templates for your two highest-priority messages and a brief agenda for your first meeting.

## Copy/Paste Prompt (Reusable Daily Setup)

```text
You are my AI work assistant helping me plan my workday.

I am pasting my sanitized schedule, tasks, and key message summaries below.
NOTE: No confidential or identifying information is included.

Your job:
1) Identify my top 3 priorities for today (ranked by impact and urgency).
2) List what I should defer or decline today to protect focus time.
3) Flag potential scheduling bottlenecks, missing inputs, or risks.
4) Propose a realistic time-block outline around my existing meetings.
5) Draft 2 starter templates using placeholders ([Client], [Project], [Deadline], [Owner]):
   - One concise email reply template
   - One brief internal status update (Teams/Slack style)

Constraints:
- Keep recommendations practical and concise.
- Do not invent deadlines or commitments not stated below.

Here is my context for today:
[PASTE SANITIZED SCHEDULE & NOTES HERE]
```

## Review before acting
Check your generated schedule against real calendar constraints, fill in actual names locally inside your email client, and send only after verifying commitments.

**Next episode:** [Episode 02 — Email Faster, Still Human]({{ '/playbook/02-email-faster-still-human/' | relative_url }}).
