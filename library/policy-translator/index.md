---
layout: item
title: "Policy & jargon translator"
subtitle: "Convert dense internal guidelines, SOPs, or technical notes into plain-language guidance and FAQs."
category: Writing
tag: Prompt
level: Practical
time: 8 min
related:
  - label: Safe summary workflow
    tag: Policy
    url: /library/safe-summary/
  - label: Report outline generator
    tag: Writing
    url: /library/report-outline/
  - label: Redaction checklist
    tag: Policy
    url: /library/redaction-checklist/
---

## When to use
Use this when onboarding colleagues, writing internal wiki pages, or explaining a complex procedure to a non-specialist audience without watering down mandatory rules.

## Prompt
Paste the sanitized policy or procedure text below.

```text
Translate this sanitized policy or technical procedure into plain-language guidance for everyday office staff.

Rules:
- Preserve every mandatory rule, threshold, and exception accurately.
- Replace jargon with everyday language without losing precision.
- Do NOT invent exceptions or policy rules not present in the source.
- Flag any ambiguous edge cases for a policy owner to clarify.

Provide:
1) Plain-Language Overview (3 sentences)
2) What You Must Do (action checklist)
3) What to Avoid (common mistakes)
4) Top 4 Practical FAQs (Q&A format)
5) Edge Cases to Confirm with Policy Owner

SANITIZED SOURCE TEXT:
[PASTE HERE]
```

## Quality checks
- Have the subject-matter or policy owner review the plain-language checklist before publishing to an internal wiki.
- Link back to the authoritative policy document so readers can check exact wording when needed.
