"use client";

import { motion, useReducedMotion } from "framer-motion";

const diagramTitle =
  "Sherpa-v2: a workload is deployed on Cloud Run, profiled, and matched to evaluation datasets. The Executor replays those datasets against the deployment. G-Eval scores the run. Langfuse traces every step.";

const ink = "#141414";
const stone = "#5B5750";
const accent = "#1B3A6B";
const paper = "#F6F3EC";

function head(x: number, y: number, deg: number, len = 6) {
  const rad = (deg * Math.PI) / 180;
  const spread = 0.5;
  const x1 = x - Math.cos(rad - spread) * len;
  const y1 = y - Math.sin(rad - spread) * len;
  const x2 = x - Math.cos(rad + spread) * len;
  const y2 = y - Math.sin(rad + spread) * len;
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x} ${y} L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
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

function Segment({
  x,
  y,
  width,
  color,
}: {
  x: number;
  y: number;
  width: number;
  color: string;
}) {
  return (
    <line
      x1={x}
      y1={y}
      x2={x + width}
      y2={y}
      stroke={color}
      strokeWidth={1}
      vectorEffect="non-scaling-stroke"
    />
  );
}

function Wide({ animate }: { animate: boolean }) {
  const seg = 200;
  const gap = 24;
  const x0 = 24;
  const y1 = 72;
  const y2 = y1 + 120;
  const yLang = y2 + 40;
  const deploy = x0;
  const profile = deploy + seg + gap;
  const discover = profile + seg + gap;
  const executor = discover;
  const geval = executor + seg + gap;

  return (
    <svg className="diagram-wide" viewBox="0 0 960 280" role="img" aria-labelledby="sherpa-wide-title">
      <title id="sherpa-wide-title">{diagramTitle}</title>

      <text x={deploy} y={y1 - 34} fill={ink} fontSize="22" style={{ fontFamily: "var(--serif)" }}>
        Deploy
      </text>
      <text x={deploy} y={y1 - 8} fill={stone} fontSize="12">
        Cloud Run workload
      </text>
      <Segment x={deploy} y={y1} width={seg} color={ink} />

      <text x={profile} y={y1 - 28} fill={ink} fontSize="15">
        Profile
      </text>
      <text x={profile} y={y1 - 8} fill={stone} fontSize="12">
        Framework and entry point
      </text>
      <Segment x={profile} y={y1} width={seg} color={ink} />

      <text x={discover} y={y1 - 28} fill={ink} fontSize="15">
        Discover
      </text>
      <text x={discover} y={y1 - 8} fill={stone} fontSize="12">
        Eval datasets
      </text>
      <Segment x={discover} y={y1} width={seg} color={ink} />

      <text x={executor} y={y2 - 28} fill={accent} fontSize="15">
        Executor
      </text>
      <text x={executor} y={y2 - 8} fill={accent} fontSize="12">
        MCP agent replays
      </text>
      <Segment x={executor} y={y2} width={seg} color={accent} />

      <text x={geval} y={y2 - 28} fill={accent} fontSize="15">
        G-Eval
      </text>
      <text x={geval} y={y2 - 8} fill={accent} fontSize="12">
        scores the run
      </text>
      <Segment x={geval} y={y2} width={seg} color={accent} />

      <Stroke
        animate={animate}
        color={ink}
        d={`M ${deploy + seg} ${y1} H ${profile - 6} ${head(profile, y1, 0)}`}
      />
      <Stroke
        animate={animate}
        color={ink}
        d={`M ${profile + seg} ${y1} H ${discover - 6} ${head(discover, y1, 0)}`}
      />
      <Stroke
        animate={animate}
        color={ink}
        d={`M ${discover} ${y1} V ${y2 - 6} ${head(discover, y2, 90)}`}
      />
      <Stroke
        animate={animate}
        color={accent}
        d={`M ${executor + seg} ${y2} H ${geval - 6} ${head(geval, y2, 0)}`}
      />
      <Stroke
        animate={animate}
        color={accent}
        d={`M ${executor} ${y2} H ${deploy + 8} A 8 8 0 0 1 ${deploy} ${y2 - 8} V ${y1 + 6} ${head(deploy, y1, -90)}`}
      />
      <text x={(executor + deploy) / 2} y={y2 - 8} fill={accent} fontSize="12" textAnchor="middle">
        replays against the deployment
      </text>

      <rect x="20" y={yLang - 9} width="196" height="16" fill={paper} />
      <text x="24" y={yLang + 4} fill={stone} fontSize="12">
        Langfuse traces every step
      </text>
      <Stroke
        animate={false}
        dashed
        color={stone}
        d={`M 224 ${yLang} H ${geval + seg}`}
      />
    </svg>
  );
}

function Stack({ animate }: { animate: boolean }) {
  const seg = 168;
  const x = 28;
  const ys = [78, 166, 254, 342];
  const gW = 120;
  const gY = 430;
  const gRight = x + seg;
  const gX = gRight - gW;
  const loopX = 14;
  const labelY = (ys[1] + ys[3]) / 2;

  return (
    <svg className="diagram-stack" viewBox="0 0 360 500" role="img" aria-labelledby="sherpa-stack-title">
      <title id="sherpa-stack-title">{diagramTitle}</title>

      <text x={x} y="20" fill={stone} fontSize="13">
        Langfuse traces every step
      </text>
      <Stroke animate={false} dashed color={stone} d={`M ${x + seg + 18} 32 V ${gY}`} />

      <text x={x} y={ys[0] - 30} fill={ink} fontSize="18" fontFamily="var(--serif)">
        Deploy
      </text>
      <text x={x} y={ys[0] - 8} fill={stone} fontSize="13">
        Cloud Run workload
      </text>
      <Segment x={x} y={ys[0]} width={seg} color={ink} />

      <text x={x} y={ys[1] - 28} fill={ink} fontSize="15">
        Profile
      </text>
      <text x={x} y={ys[1] - 8} fill={stone} fontSize="13">
        Framework and entry
      </text>
      <Segment x={x} y={ys[1]} width={seg} color={ink} />

      <text x={x} y={ys[2] - 28} fill={ink} fontSize="15">
        Discover
      </text>
      <text x={x} y={ys[2] - 8} fill={stone} fontSize="13">
        Eval datasets
      </text>
      <Segment x={x} y={ys[2]} width={seg} color={ink} />

      <text x={x} y={ys[3] - 28} fill={accent} fontSize="15">
        Executor
      </text>
      <text x={x} y={ys[3] - 8} fill={accent} fontSize="13">
        MCP agent replays
      </text>
      <Segment x={x} y={ys[3]} width={seg} color={accent} />

      <text x={gX} y={gY - 28} fill={accent} fontSize="15">
        G-Eval
      </text>
      <text x={gX} y={gY - 8} fill={accent} fontSize="13">
        scores the run
      </text>
      <Segment x={gX} y={gY} width={gW} color={accent} />

      <Stroke animate={animate} color={ink} d={`M ${x} ${ys[0]} V ${ys[1] - 6} ${head(x, ys[1], 90)}`} />
      <Stroke animate={animate} color={ink} d={`M ${x} ${ys[1]} V ${ys[2] - 6} ${head(x, ys[2], 90)}`} />
      <Stroke animate={animate} color={ink} d={`M ${x} ${ys[2]} V ${ys[3] - 6} ${head(x, ys[3], 90)}`} />
      <Stroke
        animate={animate}
        color={accent}
        d={`M ${gRight} ${ys[3]} V ${gY - 6} ${head(gRight, gY, 90)}`}
      />
      <Stroke
        animate={animate}
        color={accent}
        d={`M ${x} ${ys[3]} H ${loopX + 8} A 8 8 0 0 1 ${loopX} ${ys[3] - 8} V ${ys[0] + 8} A 8 8 0 0 1 ${loopX + 8} ${ys[0]} H ${x - 6} ${head(x, ys[0], 0)}`}
      />
      <text
        x={loopX - 8}
        y={labelY}
        fill={accent}
        fontSize="13"
        textAnchor="middle"
        transform={`rotate(-90 ${loopX - 8} ${labelY})`}
      >
        replays against the deployment
      </text>
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
