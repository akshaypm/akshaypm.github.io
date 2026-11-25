import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section className="section skills" aria-labelledby="skills-heading">
      <div className="frame">
        <Reveal>
          <p className="label">04 — Skills</p>
          <h2 id="skills-heading">What I use on the job.</h2>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="skill-name">{group.title}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
