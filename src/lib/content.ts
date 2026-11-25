export const resumeHref = "/Akshay_PM_Resume.pdf";

export const email = "akshaypm90@gmail.com";

export const linkedIn = "https://www.linkedin.com/in/akshaypm90";

export const ietfDraft = "https://datatracker.ietf.org/doc/draft-lijo-6lo-expiration-time/";

export const nowStack = [
  "LangGraph",
  "MCP client",
  "G-Eval",
  "Langfuse",
  "GCP Cloud Run",
] as const;

export const sherpa = {
  problem:
    "Deployed agent workloads still have to be identified, evaluated, and traced. Sherpa-v2 is the GCP Cloud Run platform I build at Norwin for that work. It deploys and profiles an agent workload, classifies its framework and entry point, discovers evaluation datasets, and replays them against the deployment.",
  architecture:
    "Deploy on Cloud Run, profile the framework and entry point, and discover evaluation datasets. A client-side Executor MCP agent replays them against the deployment. G-Eval scores the run. Langfuse traces the whole run.",
  role: "I wrote LangGraph ReAct agents with tool calling and MCP client integration, including the client-side Executor that replays profiling datasets against live deployments. I implemented G-Eval as the LLM-as-judge and Langfuse tracing on those runs. For distributed runs I added run-scoped trace identity, separated infrastructure artifacts from application errors, and realigned timeout envelopes that were causing lease-expiry failures.",
  outcome:
    "A workload can be deployed, classified, and replayed against the datasets Sherpa discovers. When a run fails, the trace stays with that run, an infrastructure fault is not treated as an application error, and a lease is not dropped by a timeout envelope that was too short.",
};

export type WorkRow = {
  company: string;
  years: string;
  title: string;
  story: string;
  tech: string;
  figure?: "provisioning";
};

export const selectedWork: WorkRow[] = [
  {
    company: "GE Healthcare",
    years: "Sep 2025 – May 2026",
    title: "Staff Software Engineer, IoT Platform",
    story:
      "I owned backend and edge integration for ReadyFix, a regulated medical IoT platform, and built Edge Gateway Provisioning on Spectro Cloud and K3s. The provisioning API fell from 22–30 seconds to under 5, and manual inputs fell from 10–12 to 1. The image pipeline gates on Trivy with Critical at zero, distroless builds, and Kyverno cosign admission, and I set technical direction for 10 engineers.",
    tech: "Spectro Cloud · K3s · Java · S3 · Trivy · Kyverno · cosign",
    figure: "provisioning",
  },
  {
    company: "JLL Technologies",
    years: "Jul 2023 – Sep 2025",
    title: "Senior Software Engineer",
    story:
      "I designed the observability platform for 500+ edge gateways across 60 facilities, on multi-region AWS IoT Core at more than 200 MQTT messages a second. Real-time dashboards and proactive monitoring improved problem detection by 30%. Terraform and SaltStack cut infrastructure deployment time by 40%, with the team fully remote across the US, EU, and India.",
    tech: "Python · Django · AWS IoT Core · DynamoDB · Terraform · SaltStack · Grafana",
  },
  {
    company: "Deloitte USI",
    years: "Apr 2019 – Dec 2022",
    title: "Consultant → Senior Consultant",
    story:
      "I owned the backend for McDonald’s BRE, an AWS IoT and Greengrass platform for drive-thru systems at 1,000+ US locations, and reduced edge-processing latency by 25%. I led 10 developers across two Spirit AeroSystems workstreams, including a data simulator that let the backend ship when client data was not available.",
    tech: "AWS IoT · Greengrass · Lambda · Node.js · PostgreSQL · Terraform",
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Agentic AI & LLM",
    items: [
      "LangGraph ReAct agents",
      "Tool calling",
      "MCP client integration",
      "G-Eval LLM-as-judge",
      "Langfuse tracing",
      "Agent profiling",
      "Evaluation-dataset replay",
      "AIOps",
    ],
  },
  {
    title: "Cloud & Infra",
    items: [
      "GCP Cloud Run",
      "AWS IoT Core, Greengrass, Lambda, Kinesis",
      "EKS, ECR, S3, SQS",
      "DynamoDB, KMS, IAM, CloudWatch",
      "Kubernetes, K3s, Helm, Docker",
      "Spectro Cloud",
      "Terraform, SaltStack, GitHub Actions",
      "Trivy, Twistlock, Kyverno, cosign",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Python, Django, Flask",
      "Java, Spring Boot",
      "Node.js, C#",
      "REST APIs",
      "PostgreSQL, DynamoDB, InfluxDB",
    ],
  },
  {
    title: "IoT, Edge & Observability",
    items: [
      "MQTT, CoAP, LoRaWAN",
      "BLE, 6LoWPAN",
      "Edge gateways and telemetry",
      "Zero-touch provisioning",
      "Secure onboarding, mTLS, X.509",
      "Grafana, OpenTelemetry",
      "InfluxDB, CloudWatch",
      "Datadog (basic)",
    ],
  },
];

export const experience: { when: string; where: string; what: string }[] = [
  {
    when: "Jun 2026 – Present",
    where: "Norwin (7SG AI)",
    what: "Senior AI Engineer. Sherpa-v2 on GCP Cloud Run.",
  },
  {
    when: "Sep 2025 – May 2026",
    where: "GE Healthcare",
    what: "Staff Software Engineer, IoT Platform. ReadyFix and edge gateway provisioning.",
  },
  {
    when: "Jul 2023 – Sep 2025",
    where: "JLL Technologies",
    what: "Senior Software Engineer. Observability for 500+ gateways. Remote, US, EU, and India.",
  },
  {
    when: "Jan 2023 – Jul 2023",
    where: "Samsung R&D Institute",
    what: "Chief Engineer. SmartThings Kinesis redesign, +40% scalability.",
  },
  {
    when: "Apr 2019 – Dec 2022",
    where: "Deloitte USI",
    what: "Consultant → Senior Consultant. McDonald’s IoT at 1,000+ US locations. Led 10 developers.",
  },
  {
    when: "Dec 2017 – Apr 2019",
    where: "Smartenspaces",
    what: "IoT Developer. BLE indoor navigation, 90% location accuracy.",
  },
  {
    when: "Mar 2017 – Nov 2017",
    where: "Incedo",
    what: "Software Engineer. Oil and gas IoT on Cisco EFF Cloud.",
  },
  {
    when: "Jun 2015 – Dec 2016",
    where: "IISc Network Labs",
    what: "Project Assistant. Wireless sensor networks, Contiki, 6LoWPAN, and RPL.",
  },
];
