"use client";

import { motion, useReducedMotion } from "framer-motion";

const diagramTitle =
  "An AI-agent platform: a workload is deployed on Cloud Run, profiled, and matched to evaluation datasets. The Executor replays those datasets against the deployment. G-Eval scores the run. Langfuse traces every step.";

const ink = "#141414";
const stone = "#5B5750";
const accent = "#1B3A6B";
const paper = "#F6F3EC";

function chevron(x: number, y: number, dir: "right" | "down" | "up", len: number) {
  const half = Math.round(len / 2);
  if (dir === "right") return `M ${x - len} ${y - half} L ${x} ${y} L ${x - len} ${y + half}`;
  if (dir === "down") return `M ${x - half} ${y - len} L ${x} ${y} L ${x + half} ${y - len}`;
  return `M ${x - half} ${y + len} L ${x} ${y} L ${x + half} ${y + len}`;
}

function Stroke({
  d,
  color,
  width = 1,
  animate,
  dashed = false,
}: {
  d: string;
  color: string;
  width?: number;
  animate: boolean;
  dashed?: boolean;
}) {
  const props = {
    d,
    fill: "none" as const,
    stroke: color,
    strokeWidth: width,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    vectorEffect: "non-scaling-stroke" as const,
    strokeDasharray: dashed ? "2 4" : undefined,
  };

  if (!animate || dashed) {
    return <path {...props} />;
  }

  return (
    <motion.path
      {...props}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function Bar({
  x,
  y,
  w,
  h,
  color,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
}) {
  return <rect x={x} y={y} width={w} height={h} fill={color} shapeRendering="crispEdges" />;
}

function Wide({ animate }: { animate: boolean }) {
  const seg = 200;
  const gap = 24;
  const deploy = 24;
  const profile = deploy + seg + gap;
  const discover = profile + seg + gap;
  const executor = discover;
  const geval = executor + seg + gap;
  const y1 = 72;
  const y2 = 192;
  const yLane = y2 + 28;
  const yLang = y2 + 56;
  const discoverMid = discover + seg / 2;
  const deployMid = deploy + seg / 2;
  const returnStart = executor - 12;
  const labelX = Math.round((returnStart + deployMid) / 2);

  return (
    <svg className="diagram-wide" viewBox="0 0 960 300" role="img" aria-labelledby="platform-wide-title">
      <title id="platform-wide-title">{diagramTitle}</title>

      <text x={deploy} y={y1 - 34} fill={ink} fontSize="22" style={{ fontFamily: "var(--serif)" }}>
        Deploy
      </text>
      <text x={deploy} y={y1 - 8} fill={stone} fontSize="12">
        Cloud Run workload
      </text>
      <Bar x={deploy} y={y1} w={seg} h={1} color={ink} />

      <text x={profile} y={y1 - 28} fill={ink} fontSize="15">
        Profile
      </text>
      <text x={profile} y={y1 - 8} fill={stone} fontSize="12">
        Framework and entry point
      </text>
      <Bar x={profile} y={y1} w={seg} h={1} color={ink} />

      <text x={discover} y={y1 - 28} fill={ink} fontSize="15">
        Discover
      </text>
      <text x={discover} y={y1 - 8} fill={stone} fontSize="12">
        Eval datasets
      </text>
      <Bar x={discover} y={y1} w={seg} h={1} color={ink} />

      <text x={executor} y={y2 - 48} fill={accent} fontSize="15">
        Executor
      </text>
      <text x={executor} y={y2 - 30} fill={accent} fontSize="12">
        MCP agent
      </text>
      <text x={executor} y={y2 - 16} fill={accent} fontSize="12">
        replays
      </text>
      <Bar x={executor} y={y2} w={seg} h={1} color={accent} />

      <text x={geval} y={y2 - 36} fill={accent} fontSize="15">
        G-Eval
      </text>
      <text x={geval} y={y2 - 16} fill={accent} fontSize="12">
        scores the run
      </text>
      <Bar x={geval} y={y2} w={seg} h={1} color={accent} />

      <Bar x={deploy + seg} y={y1} w={gap - 6} h={1} color={ink} />
      <Stroke animate={animate} color={ink} d={chevron(profile, y1, "right", 6)} />
      <Bar x={profile + seg} y={y1} w={gap - 6} h={1} color={ink} />
      <Stroke animate={animate} color={ink} d={chevron(discover, y1, "right", 6)} />

      <Bar x={discoverMid} y={y1 + 1} w={1} h={y2 - y1 - 7} color={ink} />
      <Stroke animate={animate} color={ink} d={chevron(discoverMid, y2, "down", 6)} />

      <Bar x={executor + seg} y={y2} w={gap - 8 - 6} h={1} color={accent} />
      <Stroke animate={animate} color={accent} d={chevron(geval - 8, y2, "right", 6)} />

      <Bar x={deployMid} y={yLane} w={returnStart - deployMid} h={1} color={accent} />
      <Bar x={deployMid} y={y1 + 11} w={1} h={yLane - (y1 + 11)} color={accent} />
      <Stroke animate={animate} color={accent} d={chevron(deployMid, y1 + 1, "up", 10)} />
      <text x={labelX} y={yLane - 8} fill={accent} fontSize="12" textAnchor="middle">
        replays against the deployment
      </text>

      <rect x="20" y={yLang - 8} width="198" height="14" fill={paper} />
      <text x="24" y={yLang + 4} fill={stone} fontSize="12">
        Langfuse traces every step
      </text>
      <Stroke animate={false} dashed color={stone} d={`M 226 ${yLang} H ${geval + seg}`} />
    </svg>
  );
}

const steps = [
  { n: "01", name: "Deploy", sub: "Cloud Run workload", accent: false, replay: false },
  { n: "02", name: "Profile", sub: "Framework and entry point", accent: false, replay: false },
  { n: "03", name: "Discover", sub: "Eval datasets", accent: false, replay: false },
  { n: "04", name: "Executor", sub: "MCP agent replays", accent: true, replay: true },
  { n: "05", name: "G-Eval", sub: "scores the run", accent: true, replay: false },
] as const;

function Steps() {
  return (
    <div className="diagram-steps">
      <ol>
        {steps.map((step) => (
          <li key={step.n} className={step.accent ? "is-accent" : undefined}>
            <span className="step-num" aria-hidden="true">
              {step.n}
            </span>
            <span className="step-copy">
              <span className="step-name">{step.name}</span>
              <span className="step-sub">{step.sub}</span>
              {step.replay ? (
                <span className="step-replay">
                  <span className="step-replay-rule" aria-hidden="true" />
                  Replays against Deploy
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
      <p className="step-trace">Langfuse traces every step</p>
    </div>
  );
}

export function PlatformDiagram() {
  const reduce = useReducedMotion();
  const animate = reduce !== true;

  return (
    <figure className="diagram">
      <Wide animate={animate} />
      <Steps />
      <figcaption className="caption">
        The Executor replays datasets against the deployment. G-Eval scores the run.
        <span className="caption-more"> Langfuse traces every step.</span>
      </figcaption>
    </figure>
  );
}
