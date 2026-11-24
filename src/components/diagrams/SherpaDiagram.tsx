"use client";

import { motion, useReducedMotion } from "framer-motion";

const diagramTitle =
  "Sherpa-v2: a workload is deployed on Cloud Run, profiled, and matched to evaluation datasets. The Executor replays those datasets against the deployment. G-Eval scores the run. Langfuse traces every step.";

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
    <svg className="diagram-wide" viewBox="0 0 960 300" role="img" aria-labelledby="sherpa-wide-title">
      <title id="sherpa-wide-title">{diagramTitle}</title>

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

function Stack({ animate }: { animate: boolean }) {
  const x = 24;
  const seg = 188;
  const ys = [88, 204, 300, 396];
  const gX = 72;
  const gW = 140;
  const gY = 500;
  const ruleX = 276;

  return (
    <svg className="diagram-stack" viewBox="0 0 360 540" role="img" aria-labelledby="sherpa-stack-title">
      <title id="sherpa-stack-title">{diagramTitle}</title>

      <text x={x} y="22" fill={stone} fontSize="13">
        Langfuse traces every step
      </text>
      <Stroke animate={false} dashed color={stone} d={`M ${ruleX} 36 V ${gY}`} />

      <text x={x} y={ys[0] - 32} fill={ink} fontSize="18" style={{ fontFamily: "var(--serif)" }}>
        Deploy
      </text>
      <text x={x} y={ys[0] - 8} fill={stone} fontSize="13">
        Cloud Run workload
      </text>
      <Bar x={x} y={ys[0]} w={seg} h={1} color={ink} />

      <text x={x} y={ys[1] - 48} fill={ink} fontSize="15">
        Profile
      </text>
      <text x={x} y={ys[1] - 26} fill={stone} fontSize="13">
        Framework and
      </text>
      <text x={x} y={ys[1] - 8} fill={stone} fontSize="13">
        entry point
      </text>
      <Bar x={x} y={ys[1]} w={seg} h={1} color={ink} />

      <text x={x} y={ys[2] - 28} fill={ink} fontSize="15">
        Discover
      </text>
      <text x={x} y={ys[2] - 8} fill={stone} fontSize="13">
        Eval datasets
      </text>
      <Bar x={x} y={ys[2]} w={seg} h={1} color={ink} />

      <text x={x} y={ys[3] - 28} fill={accent} fontSize="15">
        Executor
      </text>
      <text x={x} y={ys[3] - 8} fill={accent} fontSize="13">
        MCP agent replays
      </text>
      <Bar x={x} y={ys[3]} w={seg} h={1} color={accent} />
      <text x={x} y={ys[3] + 20} fill={accent} fontSize="13">
        ↺ replays against Deploy
      </text>

      <text x={gX} y={gY - 36} fill={accent} fontSize="15">
        G-Eval
      </text>
      <text x={gX} y={gY - 16} fill={accent} fontSize="13">
        scores the run
      </text>
      <Bar x={gX} y={gY} w={gW} h={1} color={accent} />

      <Bar x={x} y={ys[0] + 1} w={1} h={ys[1] - ys[0] - 7} color={ink} />
      <Stroke animate={animate} color={ink} d={chevron(x, ys[1], "down", 6)} />
      <Bar x={x} y={ys[1] + 1} w={1} h={ys[2] - ys[1] - 7} color={ink} />
      <Stroke animate={animate} color={ink} d={chevron(x, ys[2], "down", 6)} />
      <Bar x={x} y={ys[2] + 1} w={1} h={ys[3] - ys[2] - 7} color={ink} />
      <Stroke animate={animate} color={ink} d={chevron(x, ys[3], "down", 6)} />

      <Bar x={gX} y={ys[3] + 32} w={1} h={gY - ys[3] - 38} color={accent} />
      <Stroke animate={animate} color={accent} d={chevron(gX, gY, "down", 6)} />
    </svg>
  );
}

export function SherpaDiagram() {
  const reduce = useReducedMotion();
  const animate = reduce !== true;

  return (
    <figure className="diagram">
      <Wide animate={animate} />
      <Stack animate={animate} />
      <figcaption className="caption">
        The Executor replays datasets against the deployment. G-Eval scores the run. Langfuse traces
        every step.
      </figcaption>
    </figure>
  );
}
