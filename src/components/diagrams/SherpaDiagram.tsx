"use client";

import { motion, useReducedMotion } from "framer-motion";

const diagramTitle =
  "Sherpa-v2: a workload is deployed on Cloud Run, profiled, and matched to evaluation datasets. The Executor MCP agent replays those datasets against the deployment. G-Eval scores the run. Langfuse traces the whole run.";

const ink = "#141414";
const stone = "#5B5750";
const accent = "#1B3A6B";

function head(x: number, y: number, deg: number, len = 9) {
  const rad = (deg * Math.PI) / 180;
  const spread = 0.42;
  const x1 = x - Math.cos(rad - spread) * len;
  const y1 = y - Math.sin(rad - spread) * len;
  const x2 = x - Math.cos(rad + spread) * len;
  const y2 = y - Math.sin(rad + spread) * len;
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x} ${y} L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

function Stroke({
  d,
  color,
  width = 1.25,
  animate,
}: {
  d: string;
  color: string;
  width?: number;
  animate: boolean;
}) {
  const props = {
    d,
    fill: "none" as const,
    stroke: color,
    strokeWidth: width,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
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
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function Wide({ animate }: { animate: boolean }) {
  return (
    <svg
      className="diagram-wide"
      viewBox="0 0 1040 430"
      role="img"
      aria-labelledby="sherpa-wide-title"
    >
      <title id="sherpa-wide-title">{diagramTitle}</title>

      <Stroke animate={animate} color={ink} d="M 140 28 H 760" />
      <Stroke animate={animate} color={ink} d="M 200 28 V 46 M 470 28 V 46 M 700 28 V 46" />
      <text x="32" y="32" fill={ink} fontSize="13">
        Langfuse
      </text>
      <text x="776" y="32" fill={stone} fontSize="12">
        observes the whole run
      </text>

      <text x="40" y="158" fill={ink} fontSize="28">
        Deploy
      </text>
      <text x="40" y="182" fill={stone} fontSize="13">
        Cloud Run workload
      </text>
      <Stroke animate={false} color={ink} width={2} d="M 40 196 H 250" />
      <Stroke animate={false} color={ink} d="M 40 203 H 168" />

      <text x="360" y="102" fill={ink} fontSize="15">
        Profile
      </text>
      <text x="360" y="122" fill={stone} fontSize="12">
        Framework
      </text>
      <text x="360" y="138" fill={stone} fontSize="12">
        and entry point
      </text>
      <Stroke animate={false} color={ink} d="M 360 148 H 520" />

      <text x="660" y="102" fill={ink} fontSize="15">
        Discover
      </text>
      <text x="660" y="122" fill={stone} fontSize="12">
        Eval datasets
      </text>
      <Stroke animate={false} color={ink} d="M 660 132 H 810" />

      <text x="520" y="286" fill={accent} fontSize="20">
        Executor
      </text>
      <text x="520" y="306" fill={accent} fontSize="12">
        MCP agent replays
      </text>
      <Stroke animate={false} color={accent} width={1.75} d="M 520 318 H 720" />

      <text x="820" y="286" fill={accent} fontSize="18">
        G-Eval
      </text>
      <text x="820" y="306" fill={accent} fontSize="12">
        scores the run
      </text>
      <Stroke animate={false} color={accent} width={1.75} d="M 820 318 H 990" />

      <text x="170" y="368" fill={stone} fontSize="12">
        against the deployment
      </text>

      <Stroke
        animate={animate}
        color={ink}
        d={`M 250 196 C 300 196 310 148 348 148 ${head(348, 148, 0)}`}
      />
      <Stroke
        animate={animate}
        color={ink}
        d={`M 520 148 C 560 148 600 132 648 132 ${head(648, 132, 0)}`}
      />
      <Stroke
        animate={animate}
        color={accent}
        width={1.5}
        d={`M 690 136 V 310 ${head(690, 318, 90)}`}
      />
      <Stroke
        animate={animate}
        color={accent}
        width={1.5}
        d={`M 736 318 H 808 ${head(808, 318, 0)}`}
      />
      <Stroke
        animate={animate}
        color={accent}
        width={1.5}
        d={`M 520 318 C 260 400 8 250 32 196 ${head(32, 196, 0)}`}
      />
    </svg>
  );
}

function Stack({ animate }: { animate: boolean }) {
  return (
    <svg
      className="diagram-stack"
      viewBox="0 0 360 620"
      role="img"
      aria-labelledby="sherpa-stack-title"
    >
      <title id="sherpa-stack-title">{diagramTitle}</title>

      <text x="28" y="22" fill={ink} fontSize="14">
        Langfuse
      </text>
      <text x="118" y="22" fill={stone} fontSize="13">
        observes the run
      </text>
      <Stroke animate={animate} color={ink} d="M 344 36 V 560" />
      <Stroke animate={animate} color={ink} d="M 328 90 H 344 M 328 250 H 344 M 328 470 H 344" />

      <text x="36" y="78" fill={ink} fontSize="22">
        Deploy
      </text>
      <text x="36" y="100" fill={stone} fontSize="14">
        Cloud Run workload
      </text>
      <Stroke animate={false} color={ink} width={2} d="M 36 114 H 210" />
      <Stroke animate={false} color={ink} d="M 36 121 H 150" />

      <text x="36" y="196" fill={ink} fontSize="15">
        Profile
      </text>
      <text x="36" y="216" fill={stone} fontSize="13">
        Framework and entry point
      </text>
      <Stroke animate={false} color={ink} d="M 36 226 H 168" />

      <text x="36" y="300" fill={ink} fontSize="15">
        Discover
      </text>
      <text x="36" y="320" fill={stone} fontSize="13">
        Eval datasets
      </text>
      <Stroke animate={false} color={ink} d="M 36 330 H 150" />

      <text x="36" y="430" fill={accent} fontSize="18">
        Executor
      </text>
      <text x="36" y="450" fill={accent} fontSize="13">
        MCP agent replays
      </text>
      <Stroke animate={false} color={accent} width={1.75} d="M 36 462 H 168" />

      <text x="196" y="430" fill={accent} fontSize="16">
        G-Eval
      </text>
      <text x="196" y="450" fill={accent} fontSize="13">
        scores the run
      </text>
      <Stroke animate={false} color={accent} width={1.75} d="M 196 462 H 320" />

      <text x="36" y="512" fill={stone} fontSize="13">
        against the deployment
      </text>

      <Stroke
        animate={animate}
        color={ink}
        d={`M 100 121 V 178 ${head(100, 178, 90)}`}
      />
      <Stroke
        animate={animate}
        color={ink}
        d={`M 90 226 V 282 ${head(90, 282, 90)}`}
      />
      <Stroke
        animate={animate}
        color={accent}
        width={1.5}
        d={`M 80 330 V 408 ${head(80, 408, 90)}`}
      />
      <Stroke
        animate={animate}
        color={accent}
        width={1.5}
        d={`M 168 446 H 188 ${head(188, 446, 0)}`}
      />
      <Stroke
        animate={animate}
        color={accent}
        width={1.5}
        d={`M 36 462 C 6 500 6 114 30 114 ${head(34, 114, 0)}`}
      />
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
        The Executor replays datasets against the deployment. G-Eval scores the run. Langfuse
        traces all of it.
      </figcaption>
    </figure>
  );
}
