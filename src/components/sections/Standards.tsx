import { Reveal } from "@/components/Reveal";
import { ietfDraft } from "@/lib/content";

export function Standards() {
  return (
    <section className="section standards" aria-labelledby="standards-heading">
      <div className="frame">
        <Reveal>
          <p className="label">05 — Standards</p>
          <h2 id="standards-heading">IETF</h2>
          <p className="standards-place">Network Labs, IISc · Jun 2015 – Dec 2016</p>
          <p className="standards-copy">
            <a className="prose-link" href={ietfDraft}>
              Co-author of Internet-Draft draft-lijo-6lo-expiration-time, published as RFC 9034.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
