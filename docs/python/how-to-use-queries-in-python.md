---
id: how-to-use-queries-in-python
title: How to use Queries in Python
sidebar_label: Use Queries
description: Use Queries
tags:
  - developer-guide
  - sdk
  - python
---

Use the `@workflow.query` decorator to define a method as a Query. Queries are just like Signals, but they should return a value.
Queries should never mutate anything in the Workflow.

```python
@workflow.query
  async def current_greeting(self) -> str:
      return self._current_greeting
```