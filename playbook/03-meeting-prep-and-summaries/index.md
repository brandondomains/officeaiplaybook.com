---
layout: playbook
title: "Meeting Prep & Clean Summaries"
subtitle: "How to prepare tight agendas before a call and turn rough notes into accountable minutes afterward."
episode: 3
read_time: "7 min"
category: "Meetings"
tagline: "Decisions & owners"
supporting_library:
  - label: "Meeting minutes template"
    url: "/library/meeting-minutes/"
    tag: "Meetings"
  - label: "Decision record template"
    url: "/library/decision-record/"
    tag: "Analysis"
  - label: "Safe summary workflow"
    url: "/library/safe-summary/"
    tag: "Policy"
---

Most meeting recaps fail because they read like a chronological transcript instead of a record of **decisions made** and **who owns what next**.

Using AI before and after a meeting keeps discussions focused and ensures follow-ups don't evaporate into chat history.

> **Privacy boundary:** Use role titles (`[Finance Lead]`, `[Ops Coordinator]`) instead of full names or sensitive HR/client details when processing notes in external AI tools.

## Part A: 3-Minute Meeting Prep
Before hosting or joining a working session, give AI your rough goal and open questions to generate a time-boxed agenda with clear decision prompts.

```text
Create a focused 30-minute meeting agenda from these rough notes.

Rules:
- Frame agenda items as questions to answer or decisions to make, not vague topics.
- Assign realistic minute allocations totaling 30 minutes.
- Include a 3-minute wrap-up to confirm owners and deadlines.

Meeting purpose & notes:
[PASTE SANITIZED CONTEXT HERE]
```

## Part B: Post-Meeting Synthesis (Within 10 Minutes)
Right after the call, paste your raw shorthand notes into the [Meeting minutes template]({{ '/library/meeting-minutes/' | relative_url }}) to separate:
1. **Context summary** (2–4 bullets)
2. **Decisions agreed** (what is now settled)
3. **Action items** (single owner + due date, or `TBD` if unstated)
4. **Open questions** (items deferred or blocked)

## Quality checks before sharing
- **One owner per action:** If two teams are listed, assign one primary lead.
- **Explicit TBDs:** Never let AI invent a Friday deadline when none was discussed.
- **Log major choices:** If the meeting settled a policy or architecture choice, copy the outcome into a [Decision record]({{ '/library/decision-record/' | relative_url }}).

**Next episode:** [Episode 04 — Turning Scattered Notes into Reports]({{ '/playbook/04-turning-notes-into-reports/' | relative_url }}).
