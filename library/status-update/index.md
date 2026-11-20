---
layout: item
title: "Weekly status update"
subtitle: "Turn raw task logs and bullet points into a concise progress, blockers, and next-steps update."
category: Operations
tag: Prompt
level: Beginner
time: 5 min
related:
  - label: Email rewrite prompt
    tag: Writing
    url: /library/email-rewrite/
  - label: Meeting minutes template
    tag: Meetings
    url: /library/meeting-minutes/
  - label: Decision record template
    tag: Analysis
    url: /library/decision-record/
---

## When to use
Use this at the end of the week or sprint when you have a messy list of completed tasks, in-progress items, and pending approvals that need to become a clean update for a manager or team channel.

## Prompt
Paste your sanitized activity notes below.

```text
Turn my sanitized weekly notes into a clear, scannable status update.

Rules:
- Keep it concise—busy leads should be able to read it in 45 seconds.
- Separate completed outcomes from work still in progress.
- Do NOT invent percentages, metrics, or completion dates.
- Highlight blockers clearly with what decision or input is needed.

Output format:
- Overall Status: [On Track / At Risk / Blocked — based only on notes]
- Completed This Week (2–4 outcome-focused bullets)
- In Progress & Next Week (2–4 bullets with target milestones)
- Blockers / Decisions Needed (bullet + owner, or "None")

SANITIZED WEEKLY NOTES:
[PASTE HERE]
```

## Quality checks
- Focus bullets on **outcomes** (*"Completed draft policy review"*) rather than busywork (*"Attended 4 calls"*).
- Confirm that any flagged blocker accurately states who needs to unblock it.
