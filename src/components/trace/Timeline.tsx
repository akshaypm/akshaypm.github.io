"use client";

import { useEffect, useRef, useState } from "react";
import { laidSpans, maxMonths, type LaidSpan } from "@/data/trace";

function Detail({ span, id }: { span: LaidSpan; id: string }) {
  return (
    <div className="detail" id={id}>
      <dl>
        {span.detail.map((row) => (
          <div key={row.key}>
            <dt>{row.key}</dt>
            <dd>
              {row.href ? (
                <a href={row.href}>{row.value}</a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Grow({
  left,
  width,
  delay,
  live,
  thin,
  label,
}: {
  left: number;
  width: number;
  delay: number;
  live?: boolean;
  thin?: boolean;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [grown, setGrown] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const grow = () => {
      frame = requestAnimationFrame(() => setGrown(true));
    };
    const rect = el.getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight;
    if (inView) {
      setGrown(false);
      grow();
      return () => cancelAnimationFrame(frame);
    }
    setGrown(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        grow();
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={thin ? "child-bar" : "parent-bar"}
      title={label}
      style={{
        left: `${left}%`,
        width: live ? `calc(${width}% - 10px)` : `${width}%`,
        background: live ? "var(--green)" : "rgba(14, 14, 14, 0.88)",
        transformOrigin: "left center",
        transform: grown ? "scaleX(1)" : "scaleX(0)",
        transition: grown ? `transform 420ms cubic-bezier(.2, .7, .1, 1) ${delay}s` : "none",
      }}
    />
  );
}

export function Timeline() {
  const [open, setOpen] = useState<Record<string, boolean>>({ norwin: true });

  function toggle(id: string) {
    setOpen((current) => ({ ...current, [id]: !current[id] }));
  }

  return (
    <section className="timeline" aria-labelledby="timeline-heading">
      <div className="frame">
        <h2 id="timeline-heading">ROOT SPAN · 2015 → NOW</h2>
        <div className="desktop-trace">
          {laidSpans.map((span, index) => {
            const expanded = Boolean(open[span.id]);
            return (
              <article key={span.id} className="span-block" id={`span-${span.id}`}>
                <button
                  type="button"
                  className="span-row"
                  aria-expanded={expanded}
                  aria-controls={`detail-${span.id}`}
                  onClick={() => toggle(span.id)}
                >
                  <span className="span-label">
                    <span className="org">{span.org}</span>
                    <span className="role">{span.title}</span>
                  </span>
                  <span className="track">
                    <Grow left={span.left} width={span.width} delay={index * 0.04} live={span.running} />
                    {span.laidChildren.map((child, childIndex) => (
                      <Grow
                        key={child.label}
                        left={child.left}
                        width={child.width}
                        delay={index * 0.04 + (childIndex + 1) * 0.04}
                        thin
                        label={child.label}
                      />
                    ))}
                    {span.laidChildren
                      .filter((child) => child.threshold)
                      .map((child) => (
                        <span
                          key={`${child.label}-mark`}
                          className="threshold"
                          style={{ left: `calc(${child.left + child.width}% - 2px)` }}
                          title="G-Eval score threshold"
                        />
                      ))}
                    {span.running ? (
                      <span
                        className="live-dot"
                        style={{ left: `calc(${span.left + span.width}% - 7px)` }}
                        aria-hidden="true"
                      />
                    ) : null}
                  </span>
                  <span className="duration">{span.running ? "running" : span.duration}</span>
                </button>
                {expanded ? <Detail span={span} id={`detail-${span.id}`} /> : null}
              </article>
            );
          })}
        </div>
        <div className="mobile-list">
          {laidSpans.map((span) => {
            const expanded = Boolean(open[span.id]);
            const height = Math.max(24, Math.round((span.months / maxMonths) * 96));
            return (
              <article key={span.id} className="m-span">
                <span
                  className={span.running ? "m-bar is-live" : "m-bar"}
                  style={{ height }}
                  aria-hidden="true"
                />
                <div className="m-body">
                  <button
                    type="button"
                    className="m-toggle"
                    aria-expanded={expanded}
                    aria-controls={`detail-m-${span.id}`}
                    onClick={() => toggle(span.id)}
                  >
                    <span className="org">{span.org}</span>
                    <span className="role">{span.title}</span>
                    <span className="m-meta">
                      <span>
                        {span.start.slice(0, 7)} → {span.end === "now" ? "now" : span.end.slice(0, 7)}
                      </span>
                      <span>{span.running ? "running" : span.duration}</span>
                    </span>
                  </button>
                  {expanded ? <Detail span={span} id={`detail-m-${span.id}`} /> : null}
                </div>
              </article>
            );
          })}
        </div>
        <p className="footnote">bar length = time in role</p>
      </div>
    </section>
  );
}
