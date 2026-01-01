---
id: 001
title: Create Project Constitution
stage: constitution
date: 2025-12-26
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: sp.constitution
labels: [constitution, spec-driven, ai-book, rag-chatbot]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```
/sp.constitution

Project: AI/Spec-Driven Technical Book with Embedded RAG Chatbot

Core principles:
- Spec-first, AI-native development (Spec-Kit Plus as the source of truth)
- Technical accuracy and implementation realism
- Clarity for developers and system architects
- End-to-end reproducibility (code, content, deployment)
- Tight coupling between book content and chatbot knowledge

Key standards:
- Book content must be generated from structured specs using Claude Code
- All technical claims must be verifiable via code, configs, or official docs
- Book framework: Docusaurus, deployable to GitHub Pages
- RAG chatbot must answer global book questions and questions constrained to user-selected text
- Stack requirements: OpenAI Agents/ChatKit SDKs, FastAPI, Neon Serverless Postgres, Qdrant Cloud Free Tier

Constraints:
- Book format: Markdown (Docusaurus-compatible)
- Code examples must be runnable
```

## Response snapshot

Constitution created with the following principles:
- Spec-First, AI-Native Development
- Technical Accuracy and Implementation Realism
- Clarity for Developers and System Architects
- End-to-End Reproducibility
- Tight Coupling Between Book Content and Chatbot Knowledge
- Open Standards and Modern Architecture

Technology stack requirements and development workflow standards were also defined.

## Outcome

- ✅ Impact: Project constitution established with clear principles and technology requirements
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md updated
- 🔁 Next prompts: Plan and implement core features based on constitution
- 🧠 Reflection: Constitution provides clear governance framework for the AI/Spec-Driven Technical Book project

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature specification based on constitution