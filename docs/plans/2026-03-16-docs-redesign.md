# Documentation Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the repository documentation so junior developers can get started quickly, while moving reference details into focused docs and adding a sample PRD for AI-assisted implementation.

**Architecture:** Keep `README.md` short and onboarding-focused. Move setup, structure, and customization details into `docs/`, and add a reusable PRD template under `docs/prd/`.

**Tech Stack:** Markdown, repository docs structure

---

### Task 1: Rewrite the main README

**Files:**
- Modify: `README.md`

**Step 1: Replace the current README structure**

Write a short Japanese README that covers:
- what this template is
- who it is for
- first-run commands
- common commands table
- where to find deeper docs

**Step 2: Keep the language junior-friendly**

Use short sentences, concrete labels, and avoid framework-heavy explanations unless needed for first-run success.

**Step 3: Verify the README still points to valid files**

Confirm all links reference real files in `docs/`.

### Task 2: Add focused docs pages

**Files:**
- Create: `docs/getting-started.md`
- Create: `docs/project-structure.md`
- Create: `docs/customizing.md`

**Step 1: Add setup guidance**

Create `docs/getting-started.md` with environment prerequisites, install steps, local development steps, and a short troubleshooting section.

**Step 2: Add structure guidance**

Create `docs/project-structure.md` with a simple explanation of the main directories and where junior developers should edit common concerns.

**Step 3: Add customization guidance**

Create `docs/customizing.md` with concise instructions for copy updates, locale setup, SEO base URL changes, and mock API replacement.

### Task 3: Add PRD example and remove redundant docs

**Files:**
- Create: `docs/prd/sample-prd-ai-coding.md`
- Delete: `README-EN.md`

**Step 1: Add sample PRD**

Create a PRD example aimed at PRD-based AI coding. Include problem, goal, scope, user stories, requirements, acceptance criteria, edge cases, and implementation notes for AI agents.

**Step 2: Remove the redundant English README**

Delete `README-EN.md` now that the main README is Japanese-first and details live under `docs/`.

### Task 4: Verify the documentation set

**Files:**
- Review: `README.md`
- Review: `docs/getting-started.md`
- Review: `docs/project-structure.md`
- Review: `docs/customizing.md`
- Review: `docs/prd/sample-prd-ai-coding.md`

**Step 1: Check file presence**

Run `rg --files README.md docs`

Expected: the rewritten README and all new docs files are listed.

**Step 2: Review key content**

Run `sed -n '1,220p'` against each file to confirm headings, links, and sections are present.
