---
layout: playbook
title: "Turning Scattered Notes into Reports"
subtitle: "Move from messy research, interview snippets, and bullet dumps to a structured briefing memo without hallucinated claims."
episode: 4
read_time: "8 min"
category: "Analysis & reports"
tagline: "Structure first"
supporting_library:
  - label: "Report outline generator"
    url: "/library/report-outline/"
    tag: "Writing"
  - label: "Safe summary workflow"
    url: "/library/safe-summary/"
    tag: "Policy"
  - label: "Decision record template"
    url: "/library/decision-record/"
    tag: "Analysis"
---

Asking AI to *"write a 3-page report from these notes"* is the fastest way to get plausible-sounding padding mixed with subtle factual errors.

Instead, split report drafting into three distinct passes: **cluster → outline → draft section by section**.

> **Privacy boundary:** Remove personally identifiable information, confidential financial figures, and proprietary client names before pasting source notes.

## The Cluster-Outline-Draft Method

### Step 1: Group themes and flag gaps
Feed AI your sanitized notes and ask it to cluster recurring themes, highlight contradictions, and list what evidence is missing.

### Step 2: Lock the outline first
Use the [Report outline generator]({{ '/library/report-outline/' | relative_url }}) to build a clear hierarchy (Executive Summary, Background, Findings, Options, Recommendation). Edit the headings yourself before generating prose.

### Step 3: Draft one section at a time
Provide only the notes relevant to a single heading and ask for crisp, factual paragraphs with inline `[VERIFY]` tags wherever a figure or claim needs source confirmation.

## Copy/Paste Prompt (Evidence-Bound Section Drafter)

```text
Draft ONLY the "[SECTION NAME]" section of an internal briefing report using ONLY the sanitized notes provided below.

Strict rules:
- Use only facts explicitly present in the notes.
- Do NOT extrapolate, invent statistics, or add outside examples.
- Mark any claim that requires source verification with [VERIFY].
- Keep paragraphs concise (3–4 sentences max) and use bullet points for comparisons.
- End with "Missing data for this section" if anything needed is absent.

Sanitized source notes for this section:
[PASTE RELEVANT NOTES HERE]
```

## Final editorial pass
Read the assembled document from top to bottom to ensure transitions feel natural, remove every `[VERIFY]` flag only after checking primary sources, and confirm recommendations match your organization's mandate.
