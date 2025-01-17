---
id: how-to-send-logs-from-activities-in-typescript
title: How to send logs from Activities in TypeScript
sidebar_label: Send logs from Activities
description: Send logs from Activities
tags:
  - developer-guide
  - sdk
  - typescript
---

Activities run in the standard Node.js environment and can use any Node.js logger.

<details>
<summary>
Inject Activity context via interceptor and log all Activity Executions
</summary>

<!--SNIPSTART typescript-activity-logging-interceptor-->

[instrumentation/src/activities/interceptors.ts](https://github.com/temporalio/samples-typescript/blob/master/instrumentation/src/activities/interceptors.ts)

```ts
import { Context } from '@temporalio/activity';
import {
  ActivityExecuteInput,
  ActivityInboundCallsInterceptor,
  Next,
} from '@temporalio/worker';
import { Logger } from 'winston';

/** An Activity Context with an attached logger */
export interface ContextWithLogger extends Context {
  logger: Logger;
}

/** Get the current Activity context with an attached logger */
export function getContext(): ContextWithLogger {
  return Context.current() as ContextWithLogger;
}

/** Logs Activity executions and their duration */
export class ActivityInboundLogInterceptor
  implements ActivityInboundCallsInterceptor
{
  public readonly logger: Logger;

  constructor(ctx: Context, logger: Logger) {
    this.logger = logger.child({
      activity: ctx.info,
    });

    // Set a logger instance on the current Activity Context to provide
    // contextual logging information to each log entry generated by the Activity.
    (ctx as ContextWithLogger).logger = this.logger;
  }

  async execute(
    input: ActivityExecuteInput,
    next: Next<ActivityInboundCallsInterceptor, 'execute'>,
  ): Promise<unknown> {
    let error: any = undefined;
    const startTime = process.hrtime.bigint();
    try {
      return await next(input);
    } catch (err: any) {
      error = err;
      throw err;
    } finally {
      const durationNanos = process.hrtime.bigint() - startTime;
      const durationMs = Number(durationNanos / 1_000_000n);
      if (error) {
        this.logger.error('activity failed', { error, durationMs });
      } else {
        this.logger.debug('activity completed', { durationMs });
      }
    }
  }
}
```

<!--SNIPEND-->

</details>

<details>
<summary>
Use the injected logger from an Activity
</summary>

<!--SNIPSTART typescript-activity-use-injected-logger -->

[instrumentation/src/activities/index.ts](https://github.com/temporalio/samples-typescript/blob/master/instrumentation/src/activities/index.ts)

```ts
import { getContext } from './interceptors';

export async function greet(name: string): Promise<string> {
  const { logger } = getContext();
  logger.info('Log from activity', { name });
  return `Hello, ${name}!`;
}
```

<!--SNIPEND-->

</details>
