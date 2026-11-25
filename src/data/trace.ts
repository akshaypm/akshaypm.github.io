export const AXIS_START = Date.UTC(2015, 0, 1);

const builtAt = new Date();
/** UTC day of the static build. The playhead and the open span both end here. */
export const AXIS_END = Date.UTC(builtAt.getUTCFullYear(), builtAt.getUTCMonth(), builtAt.getUTCDate());

export type DetailRow = {
  key: string;
  value: string;
  href?: string;
};

export type ChildSpan = {
  label: string;
  threshold?: boolean;
};

export type TraceSpan = {
  id: string;
  org: string;
  title: string;
  start: string;
  end: string | "now";
  running?: boolean;
  children: ChildSpan[];
  detail: DetailRow[];
};

export const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

export const spans: TraceSpan[] = [
  {
    id: "norwin",
    org: "Norwin Technologies",
    title: "Senior AI Engineer",
    start: "2026-06-01",
    end: "now",
    running: true,
    children: [
      { label: "agent deploy + profile" },
      { label: "eval discovery + replay" },
      { label: "G-Eval scoring + Langfuse tracing", threshold: true },
      { label: "guardrails" },
    ],
    detail: [
      {
        key: "stack",
        value: "Python, LangGraph, MCP (client), Langfuse, Ollama, GCP Cloud Run, Kubernetes, Azure",
      },
      {
        key: "agents",
        value: "LangGraph ReAct agents with tool calling on self-hosted open-weight LLMs served via Ollama",
      },
      { key: "executor", value: "The Executor agent as an MCP client" },
      { key: "evaluation", value: "G-Eval LLM-as-judge plus Langfuse on every run" },
      { key: "guardrails", value: "Started an in-house guardrails layer" },
    ],
  },
  {
    id: "ge",
    org: "GE HealthCare",
    title: "Staff Software Engineer (IoT Platform)",
    start: "2025-09-01",
    end: "2026-05-31",
    children: [
      { label: "provisioning" },
      { label: "supply chain" },
      { label: "edge migration" },
      { label: "team direction" },
    ],
    detail: [
      { key: "provisioning", value: "API 22–30 s → <5 s" },
      { key: "inputs", value: "Manual inputs 10–12 → 1" },
      {
        key: "supply chain",
        value: "Trivy gate at Critical=0, distroless, Kyverno + cosign",
      },
      { key: "migration", value: "Zero-downtime MinIO migration on edge gateways" },
      { key: "team", value: "Technical direction for a 10-engineer team" },
    ],
  },
  {
    id: "jll",
    org: "JLL Technologies",
    title: "Senior Software Engineer",
    start: "2023-07-01",
    end: "2025-09-30",
    children: [
      { label: "gateways" },
      { label: "detection" },
      { label: "deploys" },
      { label: "telemetry" },
    ],
    detail: [
      { key: "fleet", value: "Observability for 500+ edge gateways across 60 facilities on AWS IoT Core" },
      { key: "ingest", value: "200+ msg/s MQTT" },
      { key: "detection", value: "Problem detection +30%" },
      { key: "deploys", value: "Deploy time −40% with Terraform and SaltStack" },
      { key: "telemetry", value: "Telemetry processing +15%" },
    ],
  },
  {
    id: "samsung",
    org: "Samsung R&D Institute India",
    title: "Chief Engineer",
    start: "2023-01-01",
    end: "2023-07-31",
    children: [{ label: "kinesis" }],
    detail: [{ key: "platform", value: "SmartThings Kinesis event-processing redesign, scalability +40%" }],
  },
  {
    id: "deloitte",
    org: "Deloitte USI",
    title: "Senior Consultant / Consultant (IoT)",
    start: "2019-04-01",
    end: "2022-12-31",
    children: [
      { label: "drive-thru" },
      { label: "leadership" },
      { label: "industry 4.0" },
      { label: "awards" },
    ],
    detail: [
      {
        key: "drive-thru",
        value: "IoT backend (AWS IoT, Greengrass) at 1,000+ US locations, edge latency −25%",
      },
      { key: "leadership", value: "Led 10 developers" },
      { key: "assessment", value: "Industry 4.0 assessment platform, report time −35%" },
      { key: "awards", value: "Outstanding Award 2022 and Applause Award 2021" },
    ],
  },
  {
    id: "smartenspaces",
    org: "Smartenspaces",
    title: "IoT Developer",
    start: "2017-12-01",
    end: "2019-04-30",
    children: [{ label: "navigation" }],
    detail: [{ key: "navigation", value: "BLE indoor navigation, 90% location accuracy" }],
  },
  {
    id: "incedo",
    org: "Incedo",
    title: "Software Engineer",
    start: "2017-03-01",
    end: "2017-11-30",
    children: [{ label: "iot" }],
    detail: [{ key: "platform", value: "IoT on Cisco EFF Cloud" }],
  },
  {
    id: "iisc",
    org: "Networks Lab, IISc",
    title: "Project Assistant",
    start: "2015-06-01",
    end: "2016-12-31",
    children: [{ label: "6lowpan" }, { label: "ietf" }],
    detail: [
      { key: "research", value: "6LoWPAN/RPL on Contiki" },
      {
        key: "standards",
        value: "Co-authored the IETF Internet-Draft later published as RFC 9034",
        href: "https://datatracker.ietf.org/doc/draft-lijo-6lo-expiration-time/",
      },
    ],
  },
];

function utc(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
}

export function spanEnd(span: TraceSpan) {
  return span.end === "now" ? AXIS_END : utc(span.end);
}

export function spanStart(span: TraceSpan) {
  return utc(span.start);
}

export function fraction(ms: number) {
  return (ms - AXIS_START) / (AXIS_END - AXIS_START);
}

export function monthsBetween(start: number, end: number) {
  const s = new Date(start);
  const e = new Date(end);
  return (e.getUTCFullYear() - s.getUTCFullYear()) * 12 + (e.getUTCMonth() - s.getUTCMonth());
}

export function formatDuration(months: number) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y && m) return `${y}y ${m}m`;
  if (y) return `${y}y`;
  return `${m}m`;
}

export type LaidSpan = TraceSpan & {
  left: number;
  width: number;
  months: number;
  duration: string;
  range: string;
  laidChildren: { label: string; threshold?: boolean; left: number; width: number }[];
};

export function layoutSpan(span: TraceSpan): LaidSpan {
  const start = spanStart(span);
  const end = spanEnd(span);
  const left = fraction(start) * 100;
  const width = Math.max(0, (fraction(end) - fraction(start)) * 100);
  const months = Math.max(0, monthsBetween(start, end));
  const count = Math.max(1, span.children.length);
  const laidChildren = span.children.map((child, index) => ({
    ...child,
    left: left + (width * index) / count,
    width: width / count,
  }));
  const range = `${span.start.slice(0, 7)} → ${span.end === "now" ? "now" : span.end.slice(0, 7)}`;
  return { ...span, left, width, months, duration: formatDuration(months), range, laidChildren };
}

export const laidSpans = spans.map(layoutSpan);
export const maxMonths = Math.max(...laidSpans.map((span) => span.months));

export function spanIdForYear(year: number) {
  const mid = Date.UTC(year, 6, 1);
  const hit =
    spans.find((span) => spanStart(span) <= mid && spanEnd(span) >= mid) ??
    spans.find((span) => spanStart(span) <= Date.UTC(year, 11, 31) && spanEnd(span) >= Date.UTC(year, 0, 1));
  return hit?.id ?? spans[spans.length - 1].id;
}

export function yearLeft(year: number) {
  return fraction(Date.UTC(year, 0, 1)) * 100;
}

export const nowLeft = fraction(AXIS_END) * 100;

export const yearMarks = years.map((year) => ({
  year,
  left: yearLeft(year),
  spanId: spanIdForYear(year),
}));

export type DemoSpan = {
  id: string;
  name: string;
  start: number;
  end: number;
  status: string;
  thin?: boolean;
  dotted?: boolean;
  note?: string;
  parent?: string;
};

function demoAttrs(span: DemoSpan) {
  const duration = span.end - span.start;
  return [
    { key: "name", value: span.name },
    { key: "start", value: `${span.start.toFixed(1)}s` },
    { key: "duration", value: `${duration.toFixed(1)}s` },
    { key: "status", value: span.status },
  ];
}

const demoSpans: DemoSpan[] = [
  { id: "deploy", name: "deploy", start: 0, end: 2.4, status: "ok" },
  { id: "profile", name: "profile", start: 2.4, end: 3.6, status: "ok", note: "framework · entry points" },
  { id: "discover_evals", name: "discover_evals", start: 3.6, end: 4.8, status: "ok" },
  { id: "replay", name: "replay", start: 4.8, end: 9.6, status: "ok" },
  { id: "case_1", name: "case_1", start: 4.8, end: 6.0, status: "ok", parent: "replay", thin: true },
  { id: "case_2", name: "case_2", start: 6.0, end: 7.2, status: "ok", parent: "replay", thin: true },
  { id: "case_3", name: "case_3", start: 7.2, end: 8.4, status: "ok", parent: "replay", thin: true },
  { id: "case_4", name: "case_4", start: 8.4, end: 9.6, status: "ok", parent: "replay", thin: true },
  { id: "g_eval", name: "g_eval.score", start: 9.6, end: 11.0, status: "ok" },
  { id: "langfuse", name: "langfuse.trace", start: 0, end: 11.2, status: "ok", dotted: true },
];

export const illustrativeRun = {
  runId: "demo-0001",
  disclaimer: "Illustrative run · not real data",
  axisSeconds: 12,
  traceEnd: 11.2,
  playMs: 4500,
  score: 0.86,
  threshold: 0.75,
  ticks: [0, 2, 4, 6, 8, 10, 12],
  spans: demoSpans.filter((span) => !span.parent).map((span) => ({ ...span, attrs: demoAttrs(span) })),
  children: demoSpans.filter((span) => span.parent).map((span) => ({ ...span, attrs: demoAttrs(span) })),
};

export const illustrativeFeed = [
  "gw-0412  facility-27  mqtt  telemetry  ok",
  "gw-0188  facility-03  mqtt  telemetry  ok",
  "gw-0771  facility-41  mqtt  telemetry  ok",
  "gw-0094  facility-12  mqtt  heartbeat  ok",
  "gw-0550  facility-27  mqtt  telemetry  ok",
  "gw-0233  facility-08  mqtt  telemetry  ok",
  "gw-0640  facility-55  mqtt  heartbeat  ok",
  "gw-0319  facility-19  mqtt  telemetry  ok",
  "gw-0821  facility-33  mqtt  telemetry  ok",
  "gw-0144  facility-60  mqtt  heartbeat  ok",
];

const rangeFor = (id: string) => laidSpans.find((span) => span.id === id)?.range ?? "";

export const caseFiles = [
  {
    id: "norwin",
    index: "01",
    org: "Norwin",
    range: rangeFor("norwin"),
    running: true,
    title: "Deploy an agent. Prove it works.",
    paragraphs: [
      "Teams deploy agent workloads but can't tell whether they actually work.",
      "A platform on GCP Cloud Run that deploys agent workloads to private Kubernetes, Azure and GCP, identifies each one's framework and entry points, discovers its evaluation datasets and replays them against the live deployment.",
    ],
    part: [
      "LangGraph ReAct agents with tool calling on self-hosted open-weight LLMs via Ollama",
      "The Executor agent as an MCP client",
      "G-Eval LLM-as-judge scoring and Langfuse tracing on every run",
      "Started an in-house guardrails layer",
      "Hardened distributed runs: run-scoped trace identity, realigned timeout envelopes, infra faults separated from app errors",
    ],
  },
  {
    id: "ge",
    index: "02",
    org: "GE HealthCare",
    range: rangeFor("ge"),
    running: false,
    title: "Provisioning in under 5 seconds",
    paragraphs: [
      "A regulated medical IoT platform for secure gateway onboarding and telemetry. Java CompletableFuture parallelism, tmpfs staging, and piped S3 multipart uploads. Edge Gateway Provisioning on Spectro Cloud and K3s. Technical direction for a 10-engineer team.",
    ],
    measure: {
      axis: 30,
      before: { label: "before 22-30 s", from: 22, to: 30 },
      after: { label: "after <5 s", to: 5 },
      ticks: [0, 5, 10, 15, 20, 25, 30],
      facts: [
        { key: "manual inputs", value: "10-12 → 1" },
        { key: "images hardened", value: "10-15 · Trivy Critical=0 · distroless · Kyverno + cosign" },
        { key: "MinIO migration", value: "zero downtime · TLS proxy · SigV4" },
      ],
    },
  },
  {
    id: "jll",
    index: "03",
    org: "JLL Technologies",
    range: rangeFor("jll"),
    running: false,
    title: "500+ gateways, one view",
    paragraphs: [
      "Observability for 500+ edge gateways across 60 facilities on multi-region AWS IoT Core, at 200+ msg/s MQTT. Problem detection +30%. Deploy time −40% with Terraform and SaltStack. Telemetry processing +15%.",
    ],
    stack: "Python, Django, DynamoDB, InfluxDB, Grafana, CloudWatch on EKS",
    feed: illustrativeFeed,
  },
];
