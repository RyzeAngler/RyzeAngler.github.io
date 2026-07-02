---
title: Loom
description: Runtime file context service for conversational systems and agent workflows.
order: 1
status: In progress
tags:
  - Agent Runtime
  - File Context
  - RAG
  - Retrieval
---

Loom manages uploaded files, parsed artifacts, indexing, and retrieval so agents can access document context without loading entire files into model context.

The project sits in the runtime layer of agent systems. It is designed for conversational systems and agent workflows where files need to become queryable context over time.

Core concerns:

- Storing original files and parsed artifacts.
- Building indexes for retrieval.
- Keeping runtime file context separate from raw model context.
- Exposing context access patterns that agents can use reliably.
