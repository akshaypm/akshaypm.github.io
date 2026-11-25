"use client";

import { useEffect, useRef, useState, type MutableRefObject } from "react";
import { illustrativeRun, type DemoSpan } from "@/data/trace";

type ShownSpan = DemoSpan & { attrs: { key: string; value: string }[] };

const parents = illustrativeRun.spans;
const children = illustrativeRun.children;
const allSpans: ShownSpan[] = [...parents, ...children];

function leftOf(start: number) {
  return (start / illustrativeRun.axisSeconds) * 100;
}

function widthOf(start: number, end: number) {
  return ((end - start) / illustrativeRun.axisSeconds) * 100;
}

export function TraceViewer() {
  const root = useRef<HTMLDivElement>(null);
  const fills = useRef<Record<string, HTMLSpanElement | null>>({});
  const clock = useRef<HTMLSpanElement>(null);
  const frame = useRef(0);
  const [phase, setPhase] = useState<"ready" | "running" | "done">("ready");
  const [selected, setSelected] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function select(id: string) {
    setSelected((current) => (current === id ? null : id));
  }

  function play() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cancelAnimationFrame(frame.current);
    for (const span of allSpans) {
      const node = fills.current[span.id];
      if (node) node.style.width = "0%";
    }
    setPhase("running");
    setAnnouncement("");
    const started = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / illustrativeRun.playMs);
      const elapsed = progress * illustrativeRun.traceEnd;
      for (const span of allSpans) {
        const node = fills.current[span.id];
        if (!node) continue;
        const local = (elapsed - span.start) / (span.end - span.start);
        node.style.width = `${Math.max(0, Math.min(1, local)) * 100}%`;
      }
      root.current?.querySelectorAll<HTMLElement>(".run-head").forEach((node) => {
        node.style.left = `${(elapsed / illustrativeRun.axisSeconds) * 100}%`;
      });
      if (clock.current) clock.current.textContent = `${elapsed.toFixed(2)}s`;
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
        return;
      }
      for (const span of allSpans) {
        const node = fills.current[span.id];
        if (node) node.style.width = "";
      }
      setPhase("done");
      setAnnouncement("Run complete, score 0.86, pass");
    };
    frame.current = requestAnimationFrame(tick);
  }

  const chosen = allSpans.find((span) => span.id === selected);

  return (
    <div
      ref={root}
      className="viewer"
      data-phase={phase}
      aria-label="Illustrative trace viewer"
    >
      <div className="viewer-head">
        <p className="viewer-id">
          <span>run_id</span> {illustrativeRun.runId}
        </p>
        <p className="viewer-note">{illustrativeRun.disclaimer}</p>
        <span className="elapsed elapsed-zero">0.00s</span>
        <span className="elapsed elapsed-final">{illustrativeRun.traceEnd.toFixed(2)}s</span>
        <span className="elapsed elapsed-live" ref={clock} />
        <button type="button" className="run-btn" onClick={play} disabled={phase === "running"}>
          <span className="when-ready">▶ RUN</span>
          <span className="when-done">↻ REPLAY</span>
        </button>
      </div>
      <div className="gantt" aria-hidden={false}>
        <div className="gantt-row gantt-axis">
          <span className="axis-spacer" />
          <div className="gantt-track axis-track">
            {illustrativeRun.ticks.map((tick, index) => (
              <span
                key={tick}
                className={[
                  "axis-tick",
                  index === 0 ? "is-first" : "",
                  index === illustrativeRun.ticks.length - 1 ? "is-last" : "",
                  tick % 4 === 0 ? "is-major" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ left: `${(tick / illustrativeRun.axisSeconds) * 100}%` }}
              >
                {tick}s
              </span>
            ))}
          </div>
        </div>
        {parents.map((span) => {
          const kids = children.filter((child) => child.parent === span.id);
          return (
            <div key={span.id} className={kids.length ? "gantt-row is-replay" : "gantt-row"}>
              <span className="gantt-name">{span.name}</span>
              <div className={kids.length ? "gantt-track is-replay" : "gantt-track"}>
                {illustrativeRun.ticks.slice(1, -1).map((tick) => (
                  <span
                    key={tick}
                    className={tick % 4 === 0 ? "gantt-line is-major" : "gantt-line"}
                    style={{ left: `${(tick / illustrativeRun.axisSeconds) * 100}%` }}
                  />
                ))}
                <SpanBar span={span} selected={selected === span.id} onSelect={select} fillRef={fills} />
                {kids.length ? (
                  <div className="replay-kids">
                    {kids.map((child) => (
                      <div className="replay-kid" key={child.id}>
                        <span className="kid-label">{child.name}</span>
                        <SpanBar span={child} selected={selected === child.id} onSelect={select} fillRef={fills} />
                      </div>
                    ))}
                  </div>
                ) : null}
                <span className="run-head" />
              </div>
            </div>
          );
        })}
      </div>
      {chosen ? (
        <dl className="attr-strip">
          {chosen.attrs.map((row) => (
            <div key={row.key}>
              <dt>{row.key}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <div className="score">
        <p className="score-line">
          g_eval: {illustrativeRun.score.toFixed(2)} ≥ threshold {illustrativeRun.threshold.toFixed(2)} ·{" "}
          <span className="pass">PASS</span>
        </p>
        <div className="scale" aria-hidden="true">
          <span className="scale-fill" style={{ width: `${illustrativeRun.score * 100}%` }} />
          <span
            className="threshold-tick"
            style={{ left: `${illustrativeRun.threshold * 100}%` }}
            title="G-Eval score threshold"
          />
        </div>
      </div>
      <p className="live-region" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}

function SpanBar({
  span,
  selected,
  onSelect,
  fillRef,
}: {
  span: ShownSpan;
  selected: boolean;
  onSelect: (id: string) => void;
  fillRef: MutableRefObject<Record<string, HTMLSpanElement | null>>;
}) {
  return (
    <button
      type="button"
      className={["span-ghost", span.thin ? "is-thin" : "", span.dotted ? "is-dotted" : "", selected ? "is-selected" : ""]
        .filter(Boolean)
        .join(" ")}
      style={{ left: `${leftOf(span.start)}%`, width: `${widthOf(span.start, span.end)}%` }}
      aria-pressed={selected}
      aria-label={`${span.name}, illustrative span`}
      onClick={() => onSelect(span.id)}
    >
      <span className="bar-outline" />
      <span
        className="bar-fill"
        ref={(node) => {
          fillRef.current[span.id] = node;
        }}
      />
    </button>
  );
}
