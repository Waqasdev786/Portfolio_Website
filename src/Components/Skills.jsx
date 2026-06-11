import React from "react";

const frontendSkills = [
  { name: "HTML5 & CSS3", pct: 90 },
  { name: "JavaScript", pct: 70 },
  { name: "Bootstrap", pct: 75 },
  { name: "React.js", pct: 60 },
];

const backendSkills = [
  { name: "PHP", pct: 50 },
  { name: "Laravel", pct: 60 },
  { name: "MySQL", pct: 60 },
  { name: "Git & GitHub", pct: 80 },
];

const Skills = () => {
  return (
    <>
      <style>{`
        .skills { min-height: 100vh; background: #0a1f1f; display: flex; align-items: center; justify-content: center; padding: 80px 2rem; }
        .skills-container { max-width: 1100px; width: 100%; }
        .skills-tag { font-family: 'Caveat', cursive; font-size: 22px; color: #1D9E75; margin-bottom: 6px; }
        .skills-title { font-family: 'Poppins', sans-serif; font-size: 36px; font-weight: 700; color: #ffffff; margin-bottom: 50px; }
        .skills-title span { color: #5DCAA5; }
        .skills-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .skills-col { background: #091818; border: 1px solid #1D9E75; border-radius: 12px; padding: 28px; }
        .skills-col-title { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; color: #5DCAA5; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 24px; display: flex; align-items: center; gap: 8px; }
        .skills-col-dot { width: 8px; height: 8px; border-radius: 50%; background: #1D9E75; display: inline-block; }
        .skill-item { margin-bottom: 18px; }
        .skill-item-top { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .skill-name { font-family: 'Poppins', sans-serif; font-size: 13px; color: #e0f0ec; }
        .skill-pct { font-family: 'Poppins', sans-serif; font-size: 12px; color: #5DCAA5; }
        .skill-bar { height: 6px; background: #0d2b2b; border-radius: 3px; overflow: hidden; }
        .skill-fill { height: 100%; background: #1D9E75; border-radius: 3px; transition: width 1s ease; }
        @media (max-width: 768px) {
          .skills-cols { grid-template-columns: 1fr; }
          .skills-title { font-size: 28px; }
        }
      `}</style>

      <section className="skills" id="skills">
        <div className="skills-container">
          <p className="skills-tag">— What I know</p>
          <h2 className="skills-title">My <span>Skills</span></h2>
          <div className="skills-cols">
            <div className="skills-col">
              <div className="skills-col-title"><span className="skills-col-dot"></span> Frontend</div>
              {frontendSkills.map((s) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-item-top">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${s.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-col">
              <div className="skills-col-title"><span className="skills-col-dot"></span> Backend & Tools</div>
              {backendSkills.map((s) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-item-top">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${s.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;