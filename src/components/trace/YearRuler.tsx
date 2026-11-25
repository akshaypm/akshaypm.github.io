import { spanIdForYear, yearLeft, years } from "@/data/trace";

export function YearRuler() {
  return (
    <nav className="ruler" aria-label="Years">
      <div className="frame ruler-grid">
        <span className="ruler-spacer" aria-hidden="true" />
        <div className="ruler-track">
        {years.map((year, index) => (
          <a
            key={year}
            href={`#span-${spanIdForYear(year)}`}
            className={index === 0 ? "year is-first" : index === years.length - 1 ? "year is-last" : "year"}
            style={{ left: `${yearLeft(year)}%` }}
          >
            <span className="tick" aria-hidden="true" />
            {year}
          </a>
        ))}
        </div>
        <span className="ruler-spacer" aria-hidden="true" />
      </div>
    </nav>
  );
}
