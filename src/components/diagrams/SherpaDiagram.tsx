"use client";

import { motion, useReducedMotion } from "framer-motion";

const stations = [
  { index: "01", title: "Deploy", lines: ["Cloud Run workload"] },
  { index: "02", title: "Profile", lines: ["Framework", "and entry point"] },
  { index: "03", title: "Discover", lines: ["Eval datasets"] },
  { index: "04", title: "Executor", lines: ["MCP agent replays"] },
  { index: "05", title: "G-Eval", lines: ["LLM-as-judge"] },
  { index: "06", title: "Langfuse", lines: ["Run traces"] },
] as const;

const diagramTitle =
  "Sherpa-v2 path: deploy a workload, profile its framework and entry point, discover evaluation datasets, replay them with the Executor MCP agent, score with G-Eval, and trace in Langfuse.";

function KeyPath({ d, animate }: { d: string; animate: boolean }) {
  const props = {
    d,
    fill: "none" as const,
    stroke: "#1B3A6B",
    strokeWidth: 1.5,
    vectorEffect: "non-scaling-stroke" as const,
  };

  if (!animate) {
    return <path {...props} />;
  }

  return (
    <motion.path
      {...props}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function Wide({ animate }: { animate: boolean }) {
  const boxW = 168;
  const gap = 16;
  const boxY = 48;
  const boxH = 118;
  const spineY = 18;
  const total = stations.length * boxW + (stations.length - 1) * gap;
  const originX = (1120 - total) / 2;
  const centers = stations.map((_, i) => originX + i * (boxW + gap) + boxW / 2);
  const spine = `M ${centers[0]} ${spineY} H ${centers[centers.length - 1]}`;
  const ticks = centers.map((cx) => `M ${cx} ${spineY} V ${boxY}`).join(" ");

  return (
    <svg
      className="diagram-wide"
      viewBox="0 0 1120 186"
      role="img"
      aria-labelledby="sherpa-wide-title"
    >
      <title id="sherpa-wide-title">{diagramTitle}</title>
      <KeyPath d={`${spine} ${ticks}`} animate={animate} />
      {stations.map((station, i) => {
        const x = originX + i * (boxW + gap);
        return (
          <g key={station.index}>
            <rect
              x={x}
              y={boxY}
              width={boxW}
              height={boxH}
              fill="#F6F3EC"
              stroke="#141414"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
            <text x={x + 14} y={boxY + 24} fill="#5B5750" fontSize={12} letterSpacing="1.1">
              {station.index}
            </text>
            <text x={x + 14} y={boxY + 50} fill="#141414" fontSize={16}>
              {station.title}
            </text>
            {station.lines.map((line, lineIndex) => (
              <text
                key={line}
                x={x + 14}
                y={boxY + 74 + lineIndex * 18}
                fill="#5B5750"
                fontSize={12}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function Stack({ animate }: { animate: boolean }) {
  const boxX = 46;
  const boxW = 278;
  const boxH = 96;
  const gap = 14;
  const originY = 8;
  const spineX = 18;
  const height = originY + stations.length * boxH + (stations.length - 1) * gap + 8;
  const mids = stations.map((_, i) => originY + i * (boxH + gap) + boxH / 2);
  const spine = `M ${spineX} ${mids[0]} V ${mids[mids.length - 1]}`;
  const ticks = mids.map((y) => `M ${spineX} ${y} H ${boxX}`).join(" ");

  return (
    <svg
      className="diagram-stack"
      viewBox={`0 0 340 ${height}`}
      role="img"
      aria-labelledby="sherpa-stack-title"
    >
      <title id="sherpa-stack-title">{diagramTitle}</title>
      <KeyPath d={`${spine} ${ticks}`} animate={animate} />
      {stations.map((station, i) => {
        const y = originY + i * (boxH + gap);
        return (
          <g key={station.index}>
            <rect
              x={boxX}
              y={y}
              width={boxW}
              height={boxH}
              fill="#F6F3EC"
              stroke="#141414"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
            <text x={boxX + 14} y={y + 24} fill="#5B5750" fontSize={12} letterSpacing="1.2">
              {station.index}
            </text>
            <text x={boxX + 52} y={y + 24} fill="#141414" fontSize={16}>
              {station.title}
            </text>
            {station.lines.map((line, lineIndex) => (
              <text
                key={line}
                x={boxX + 14}
                y={y + 50 + lineIndex * 16}
                fill="#5B5750"
                fontSize={13}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export function SherpaDiagram() {
  const reduce = useReducedMotion();
  const animate = !reduce;

  return (
    <figure className="diagram">
      <Wide animate={animate} />
      <Stack animate={animate} />
      <figcaption className="caption">
        The path of one workload, from deployment to trace.
      </figcaption>
    </figure>
  );
}
