---
title: Pleiad
description: I am building an open-source agent runtime for capability discovery, task graphs, and reliable execution.
order: 1
status: Public
repoURL: https://github.com/RyzeAngler/Pleiad
tags:
  - Agent Runtime
  - Capability Discovery
  - Task Graphs
  - TUI
---

I am building Pleiad as an agent runtime that discovers capabilities from a user goal, generates task nodes, organizes dependencies into a graph, and executes the work.

I keep the model small: model, prompt, and tools. Tools and skills are selected from a capability catalog, while each task node keeps its execution boundary clear. The runtime exposes the same system through a terminal interface and an HTTP API.

I care about dynamic capability loading, structured results, observable execution, and a local-first runtime that can be inspected while it works.
