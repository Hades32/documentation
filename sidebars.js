module.exports = {
  monoSidebar: [
    "index",
    {
      type: "category",
      label: "Concepts",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "concepts",
      },
      items: [
        "temporal",
        "workflows",
        "activities",
        "retry-policies",
        "workers",
        "tasks",
        "visibility",
        "clusters",
        "namespaces",
      ],
    },
    {
      type: "category",
      label: "Dev guide",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "application-development/index",
      },
      items: [
        "application-development/foundations",
        "application-development/features",
        "application-development/observability",
        "application-development/testing",
        "application-development/worker-performance",
      ],
    },
    {
      type: "category",
      label: "Temporal Cloud",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "cloud/index",
      },
      items: [
        "cloud/how-to-get-started-with-temporal-cloud",
        "cloud/how-to-manage-certificates-in-temporal-cloud",
        "cloud/how-to-manage-namespaces-in-temporal-cloud",
        "cloud/how-to-monitor-temporal-cloud-metrics",
        {
          type: "category",
          label: "CLI - tcld",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "cloud/tcld/index",
          },
          items: [
            "cloud/tcld/login",
            "cloud/tcld/account",
            "cloud/tcld/namespace",
            "cloud/tcld/request",
            "cloud/tcld/version",
          ],
        },
        {
          type: "link",
          label: "Release notes",
          href: "https://docs.temporal.io/cloud/release-notes",
        },
      ],
    },
    "cluster-deployment-guide",
    "security",
    {
      type: "category",
      label: "CLI - tctl v1.17",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "tctl-v1/index",
      },
      items: [
        "tctl-v1/activity",
        "tctl-v1/admin",
        "tctl-v1/batch",
        "tctl-v1/cluster",
        "tctl-v1/dataconverter",
        "tctl-v1/namespace",
        "tctl-v1/schedule",
        "tctl-v1/taskqueue",
        "tctl-v1/workflow",
      ],
    },
    {
      type: "category",
      label: "CLI - tctl next",
      collapsible: true,
      collapsed: true,
      link: {
        type: "doc",
        id: "tctl-next/index",
      },
      items: [
        "tctl-next/activity",
        "tctl-next/batch",
        "tctl-next/cluster",
        "tctl-next/config",
        "tctl-next/data-converter",
        "tctl-next/namespace",
        "tctl-next/schedule",
        "tctl-next/search-attribute",
        "tctl-next/task-queue",
        "tctl-next/workflow",
        "tctl-next/modifiers",
      ],
    },
    "web-ui",
    {
      type: "category",
      label: "References",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "references/index",
      },
      items: [
        "references/sdk-metrics",
        "references/cluster-metrics",
        "references/commands",
        "references/errors",
        "references/events",
        "references/configuration",
        "references/web-ui-configuration",
        "references/web-ui-environment-variables",
        "references/server-options",
        {
          type: "link",
          label: "Go SDK API",
          href: "https://pkg.go.dev/go.temporal.io/sdk",
        },
        {
          type: "link",
          label: "Java SDK API",
          href: "https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html",
        },
        {
          type: "link",
          label: "Python SDK API",
          href: "https://python.temporal.io/",
        },
        {
          type: "link",
          label: "TypeScript SDK API",
          href: "https://typescript.temporal.io",
        },
      ],
    },
    "glossary",
    {
      type: "link",
      label: "Docs changelog",
      href: "/changelog",
    },
    {
      type: "link",
      label: "Feedback",
      href: "https://github.com/temporalio/documentation/issues",
    },
    //    {
    //      type: "link",
    //      label: "Docs survey",
    //      href: "https://docs.google.com/forms/d/16iIw8p8LSMJDA2a8_3y1pdnFDP5fVg2FLAc6jm__PVc/viewform?edit_requested=true",
    //    },
  ],
  sidebarConcepts: [
    {
      type: "category",
      label: "Concepts",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "concepts/landing",
      },
      items: [
        "concepts/what-is-an-activity",
        "concepts/what-is-an-activity-definition",
        "concepts/what-is-an-activity-execution",
        "concepts/what-is-an-activity-heartbeat",
        "concepts/what-is-an-activity-id",
        "concepts/what-is-an-activity-task",
        "concepts/what-is-an-activity-task-execution",
        "concepts/what-is-an-activity-type",
        "concepts/what-is-advanced-visibility",
        "concepts/what-is-archival",
        "concepts/what-is-a-child-workflow-execution",
        "concepts/what-is-a-command",
        "concepts/what-is-continue-as-new",
        "concepts/what-is-a-data-converter",
        "concepts/what-is-an-event",
        "concepts/what-is-an-event-history",
        "concepts/what-is-a-failure",
        "concepts/what-is-a-heartbeat-timeout",
        "concepts/what-is-a-list-filter",
        "concepts/what-is-a-local-activity",
        "concepts/what-is-a-memo",
        "concepts/what-is-a-namespace",
        "concepts/what-is-a-parent-close-policy",
        "concepts/what-is-a-query",
        "concepts/what-is-a-retry-policy",
        "concepts/what-is-a-run-id",
        "concepts/what-is-a-schedule-to-close-timeout",
        "concepts/what-is-a-schedule-to-start-timeout",
        "concepts/what-is-a-search-attribute",
        "concepts/what-is-a-side-effect",
        "concepts/what-is-a-signal",
        "concepts/what-is-standard-visibility",
        "concepts/what-is-a-start-to-close-timeout",
        "concepts/what-is-a-sticky-execution",
        "concepts/what-is-a-task-queue",
        "concepts/what-is-task-routing",
        "concepts/what-is-a-task-token",
        "concepts/what-is-a-task",
        "concepts/what-is-temporal",
        "concepts/what-is-a-temporal-application",
        "concepts/what-is-a-temporal-cluster",
        "concepts/what-is-a-temporal-cron-job",
        "concepts/what-is-the-temporal-platform",
        "concepts/what-is-a-temporal-sdk",
        "concepts/what-is-a-worker",
        "concepts/what-is-a-worker-entity",
        "concepts/what-is-a-worker-process",
        "concepts/what-is-a-worker-program",
        "concepts/what-is-a-workflow",
        "concepts/what-is-a-workflow-definition",
        "concepts/what-is-a-workflow-execution-timeout",
        "concepts/what-is-a-workflow-execution",
        "concepts/what-is-a-workflow-id-reuse-policy",
        "concepts/what-is-a-workflow-id",
        "concepts/what-is-a-workflow-run-timeout",
        "concepts/what-is-a-workflow-task",
        "concepts/what-is-a-workflow-task-execution",
        "concepts/what-is-a-workflow-task-timeout",
        "concepts/what-is-a-workflow-type",
      ],
    },
  ],
  sidebarCluster: [
    {
      type: "category",
      label: "Cluster how-tos",
      collapsible: false,
      collapsed: false,
      items: [
        "clusters/quick-install",
        "server/production-deployment",
        "clusters/how-to-integrate-elasticsearch-into-a-temporal-cluster",
        "clusters/how-to-set-up-archival",
        "clusters/how-to-create-a-custom-archiver",
        "clusters/how-to-set-up-multi-cluster-replication",
      ],
    },
  ],
  sidebarGo: [
    {
      type: "category",
      label: "Go how-tos",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "go/index",
      },
      items: [
        {
          type: "link",
          label: "Reference",
          href: "https://pkg.go.dev/go.temporal.io/sdk",
        },
        "go/develop-workflows",
        "go/develop-activities",
        "go/spawn-an-activity-execution",
        "go/activityoptions-reference",
        "go/get-the-result-of-an-activity-execution",
        "go/spawn-a-workflow-execution",
        "go/startworkflowoptions-reference",
        "go/get-the-result-of-a-workflow-execution",
        "go/develop-a-worker",
        "go/how-to-set-workeroptions-in-go",
        "go/how-to-set-registerworkflowoptions-in-go",
        "go/how-to-set-registeractivityoptions-in-go",
        "go/spawn-a-child-workflow-execution",
        "go/how-to-set-childworkflowoptions-in-go",
        "go/how-to-set-clientoptions-in-go",
        "go/how-to-set-connectionoptions-in-go",
        "go/how-to-set-executelocalactivityoptions-in-go",
        "go/heartbeat-an-activity",
        "go/use-signals",
        "go/how-to-send-a-query-to-a-workflow-execution-in-go",
        "go/how-to-handle-a-query-in-a-workflow-in-go",
        "go/error-handling",
        "go/selectors",
        "go/how-to-continue-as-new-in-go",
        "go/how-to-execute-a-side-effect-in-go",
        "go/how-to-test-workflow-definitions-in-go",
        "go/how-to-create-a-custom-data-converter-in-go",
        "go/versioning",
        "go/how-to-create-a-worker-session-in-go",
        "go/tracing",
        "go/search-apis",
      ],
    },
  ],
  sidebarJava: [
    {
      type: "category",
      label: "Java how-tos",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "java/index",
      },
      items: [
        {
          type: "link",
          label: "Reference",
          href: "https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html",
        },
        "java/workflows",
        "java/activities",
        "java/workers",
        "java/task-queues",
        "java/versioning",
        "java/side-effect",
        "java/distributed-cron",
        "java/testing-and-debugging",
        "java/how-to-develop-a-workflow-in-java",
        "java/how-to-develop-an-activity-in-java",
        "java/how-to-set-activityoptions-in-java",
        "java/how-to-spawn-an-activity-execution-in-java",
        "java/reference-activityoptions",
        "java/how-to-heartbeat-an-activity-in-java",
        "java/how-to-get-the-result-of-an-activity-execution-in-java",
        "java/how-to-create-a-temporal-client-in-java",
        "java/how-to-set-workflowclientoptions-in-java",
        "java/how-to-set-workflowservicestuboptions-in-java",
        "java/how-to-spawn-a-workflow-execution-in-java",
        "java/reference-workflowoptions",
        "java/how-to-get-the-result-of-a-workflow-execution-in-java",
        "java/how-to-use-signals-in-java",
        "java/how-to-use-queries-in-java",
        "java/how-to-continue-as-new-in-java",
        "java/how-to-spawn-a-child-workflow-execution-in-java",
        "java/how-to-set-child-workflow-options-in-java",
        "java/how-to-develop-a-worker-program-in-java",
        "java/how-to-provide-an-authorization-token-in-java",
      ],
    },
  ],
};
