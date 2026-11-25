"use client";

import { useEffect, useRef, useState } from "react";
import type { LaidSpan } from "@/data/trace";

type YearMark = { year: number; left: number; spanId: string };

function Detail({ span, id }: { span: LaidSpan; id: string }) {
  return (
    <div className="detail" id={id}>
      <dl>
        {span.detail.map((row) => (
          <div key={row.key}>
            <dt>{row.key}</dt>
            <dd>{row.href ? <a href={row.href}>{row.value}</a> : row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Grow({ left, width, delay, live }: { left: number; width: number; delay: number; live?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = ref.current;
    if (!el || media.matches) return;
    let frame = 0;
    const grow = () => {
      frame = requestAnimationFrame(() => {
        el.style.transition = `transform 420ms cubic-bezier(.2, .7, .1, 1) ${delay}s`;
        el.style.transform = "scaleX(1)";
      });
    };
    el.style.transition = "none";
    el.style.transform = "scaleX(0)";
    const rect = el.getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight;
    if (inView) {
      grow();
      return () => cancelAnimationFrame(frame);
    }
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
  }, [delay]);

  return (
    <div
      ref={ref}
      className={live ? "parent-bar is-live" : "parent-bar"}
      style={{ left: `${left}%`, width: `${width}%` }}
    />
  );
}

function Axis({ years }: { years: YearMark[] }) {
  return (
    <>
      {years.map((mark) => (
        <span key={mark.year} className="gridline" style={{ left: `${mark.left}%` }} />
      ))}
      <span className="playhead" />
    </>
  );
}

export function Timeline({
  spans,
  years,
  maxMonths,
}: {
  spans: LaidSpan[];
  years: YearMark[];
  maxMonths: number;
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({ norwin: true });

  function toggle(id: string) {
    setOpen((current) => ({ ...current, [id]: !current[id] }));
  }

  return (
    <section className="timeline" aria-labelledby="timeline-heading">
      <div className="frame">
        <p className="kicker">ROOT SPAN · 2015 → NOW · {spans.length} SPANS</p>
        <h2 id="timeline-heading">Ten years, one trace.</h2>
        <div className="desktop-trace">
          <div className="ruler-row">
            <span />
            <div className="ruler-track">
              {years.map((mark, index) => (
                <a
                  key={mark.year}
                  href={`#span-${mark.spanId}`}
                  className={index === 0 ? "year is-first" : "year"}
                  style={{ left: `${mark.left}%` }}
                >
                  <span className="tick" aria-hidden="true" />
                  {mark.year}
                </a>
              ))}
              <span className="playhead">
                <span className="now-tag">NOW</span>
              </span>
            </div>
            <span />
          </div>
          {spans.map((span, index) => {
            const expanded = Boolean(open[span.id]);
            const end = span.left + span.width;
            return (
              <article
                key={span.id}
                className={expanded ? "span-block is-open" : "span-block"}
                id={`span-${span.id}`}
              >
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
                    <Axis years={years} />
                    <Grow left={span.left} width={span.width} delay={index * 0.04} live={span.running} />
                    <span className="tip" style={{ left: `${end}%` }}>
                      {span.range}
                    </span>
                    {span.running ? (
                      <>
                        <span className="live-dot" style={{ left: `calc(${end}% - 4px)` }} aria-hidden="true" />
                        <span className="running-tag" style={{ left: `calc(${end}% + 10px)` }}>
                          RUNNING
                        </span>
                      </>
                    ) : null}
                  </span>
                  <span className="duration">{span.running ? "" : span.duration}</span>
                </button>
                {expanded ? <Detail span={span} id={`detail-${span.id}`} /> : null}
              </article>
            );
          })}
        </div>
        <div className="mobile-list">
          <span className="m-axis-line" aria-hidden="true" />
          {spans.map((span, index) => {
            const expanded = Boolean(open[span.id]);
            const height = Math.max(24, Math.round((span.months / maxMonths) * 96));
            const year = span.start.slice(0, 4);
            const showYear = index === 0 || spans[index - 1].start.slice(0, 4) !== year;
            return (
              <article key={span.id} className="m-span">
                <span className="m-axis">
                  <span className="m-tick" aria-hidden="true" />
                  <span className={span.running ? "m-bar is-live" : "m-bar"} style={{ height }} aria-hidden="true" />
                  {span.running ? <span className="live-dot m-dot" aria-hidden="true" /> : null}
                </span>
                <div className="m-body">
                  <button
                    type="button"
                    className="m-toggle"
                    aria-expanded={expanded}
                    aria-controls={`detail-m-${span.id}`}
                    onClick={() => toggle(span.id)}
                  >
                    {showYear ? <span className="m-year">{year}</span> : null}
                    <span className="org">{span.org}</span>
                    <span className="role">{span.title}</span>
                    <span className="m-meta">
                      <span>{span.range}</span>
                      <span className={span.running ? "m-now" : undefined}>{span.running ? "NOW" : span.duration}</span>
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
