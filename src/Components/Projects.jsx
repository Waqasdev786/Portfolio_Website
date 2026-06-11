import React from "react";

const projects = [
  {
    name: "Bright World Website",
    desc: "A fully responsive multi-page website built for Bright World. Clean modern UI with smooth navigation.",
    tech: ["HTML", "CSS"],
    live: "https://weikas.netlify.app/",
  },
  {
    name: "Rock Paper Scissors",
    desc: "Interactive browser game with score tracking and animated results.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://waqas-rps-game.netlify.app/",
  },
  {
    name: "Law-Firm-website",
    desc: "A full-stack law firm website with user authentication, case management, and contact forms.",
    tech: ["PHP", "Laravel", "MySQL"],
    live: "https://github.com/Waqasdev786"
  },
];

const Projects = () => {
  return (
    <>
      <style>{`
        .projects {
          min-height: 100vh;
          background: #091818;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 2rem;
        }

        .projects-container {
          max-width: 1100px;
          width: 100%;
        }

        .projects-tag {
          font-family: 'Caveat', cursive;
          font-size: 22px;
          color: #1D9E75;
          margin-bottom: 6px;
        }

        .projects-title {
          font-family: 'Poppins', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 50px;
        }

        .projects-title span {
          color: #5DCAA5;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .project-card {
          background: #0a1f1f;
          border: 2px solid #1D9E75;
          border-radius: 16px;
          padding: 30px;
          transition: 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: #5DCAA5;
        }

        .project-name {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
        }

        .project-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #a0b8b4;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }

        .tech-tag {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          background: #0d2b2b;
          border: 1px solid #1D9E75;
          color: #9FE1CB;
        }

        .view-btn {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          background: #1D9E75;
          color: #0a1f1f;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
        }

        .view-btn:hover {
          background: #5DCAA5;
        }

        .view-btn svg {
          width: 14px;
          height: 14px;
          fill: currentColor;
        }

        .coming-soon {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: #5DCAA5;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .projects-title {
            font-size: 28px;
          }

          .project-name {
            font-size: 20px;
          }

          .projects {
            padding: 60px 1rem;
          }
        }
      `}</style>

      <section className="projects" id="projects">
        <div className="projects-container">

          <p className="projects-tag">— What I've built</p>

          <h2 className="projects-title">
            My <span>Projects</span>
          </h2>

          <div className="projects-grid">

            {projects.map((project) => (
              <div className="project-card" key={project.name}>

                <div>
                  <h3 className="project-name">
                    {project.name}
                  </h3>

                  <p className="project-desc">
                    {project.desc}
                  </p>

                  <div className="tech-tags">
                    {project.tech.map((tech) => (
                      <span className="tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

{
  project.live !== "#" ? (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="view-btn"
    >
      <svg viewBox="0 0 24 24">
        <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
      </svg>

      View Project
    </a>
  ) : (
    <a
      href="https://your-link.com"
      target="_blank"
      rel="noreferrer"
      className="view-btn"
    >
      <svg viewBox="0 0 24 24">
        <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
      </svg>

      View Project
    </a>
  )
}

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;