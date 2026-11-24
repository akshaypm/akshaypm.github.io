/**
 * Slot for a future public repository.
 * Stays off until a repo is cleared to publish. Renders nothing while off.
 */
export const SHOW_PUBLIC_BUILD = false;

type PublicBuildProps = {
  repoUrl?: string;
  name?: string;
  summary?: string;
};

export function PublicBuild({ repoUrl, name, summary }: PublicBuildProps) {
  if (!SHOW_PUBLIC_BUILD || !repoUrl || !name || !summary) {
    return null;
  }

  return (
    <section id="public-build" className="section" aria-labelledby="public-build-title">
      <div className="frame">
        <h2 id="public-build-title">{name}</h2>
        <p className="measure">{summary}</p>
        <p>
          <a className="prose-link" href={repoUrl}>
            {repoUrl}
          </a>
        </p>
      </div>
    </section>
  );
}
