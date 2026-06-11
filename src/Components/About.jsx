import React from "react";

const About = () => {
  return (
    <>
      <style>{`
        .about { min-height: 100vh; background: #091818; display: flex; align-items: center; justify-content: center; padding: 80px 2rem; }
        .about-container { max-width: 1100px; width: 100%; display: flex; align-items: center; gap: 4rem; }
        .about-image { flex: 1; display: flex; justify-content: center; }

        .about-img-wrapper {
          width: 380px;
          height: 480px;
          border-radius: 20px;
          overflow: hidden;
          background: #0d2b2b;
        }
        .about-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .about-info { flex: 1; display: flex; flex-direction: column; gap: 18px; }
        .about-tag { font-family: 'Caveat', cursive; font-size: 22px; color: #1D9E75; }
        .about-title { font-family: 'Poppins', sans-serif; font-size: 36px; font-weight: 700; color: #ffffff; line-height: 1.2; }
        .about-title span { color: #5DCAA5; }
        .about-desc { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 300; color: #a0b8b4; line-height: 1.9; }
        .about-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .about-card { background: #0d2b2b; border: 1px solid #1D9E75; border-radius: 10px; padding: 14px 16px; }
        .about-card-label { font-family: 'Poppins', sans-serif; font-size: 11px; color: #5DCAA5; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .about-card-value { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; color: #ffffff; }
        .about-edu-title { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; color: #5DCAA5; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
        .edu-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 10px; }
        .edu-dot { width: 10px; height: 10px; border-radius: 50%; background: #1D9E75; margin-top: 5px; flex-shrink: 0; }
        .edu-text { font-family: 'Poppins', sans-serif; font-size: 14px; color: #a0b8b4; line-height: 1.6; }
        .edu-text strong { color: #ffffff; font-weight: 600; }

        @media (max-width: 768px) {
          .about-container { flex-direction: column; text-align: center; gap: 2rem; }
          .about-title { font-size: 28px; }
          .about-img-wrapper { width: 260px; height: 320px; }
          .edu-item { text-align: left; }
        }
        @media (max-width: 480px) {
          .about-cards { grid-template-columns: 1fr; }
          .about-title { font-size: 24px; }
          .about-img-wrapper { width: 220px; height: 280px; }
        }
      `}</style>

      <section className="about" id="about">
        <div className="about-container">

          {/* ── Image ── */}
          <div className="about-image">
            <div className="about-img-wrapper">
              <img src="/about.jpg" alt="Muhammad Waqas" />
            </div>
          </div>

          {/* ── Info ── */}
          <div className="about-info">
            <p className="about-tag">— Who am I?</p>
            <h2 className="about-title">Passionate <span>Developer</span> &<br /> Aspiring CS Student</h2>
            <p className="about-desc">
              Hi! I'm Muhammad Waqas, a Full Stack Web Developer from Karachi, Pakistan.
              I'm currently studying ICS with Physics & Computer Science, and I'm planning
              to pursue a BS in Computer Science — InshAllah. I love building clean, modern,
              and responsive web applications. My goal is to grow as a developer and keep
              learning every day.
            </p>
            <div className="about-cards">
              <div className="about-card"><p className="about-card-label">Name</p><p className="about-card-value">Muhammad Waqas</p></div>
              <div className="about-card"><p className="about-card-label">Location</p><p className="about-card-value">Karachi, Pakistan</p></div>
              <div className="about-card"><p className="about-card-label">Email</p><p className="about-card-value">m07911795@gmail.com</p></div>
              <div className="about-card"><p className="about-card-label">Status</p><p className="about-card-value">Open to Internships</p></div>
            </div>
            <div>
              <p className="about-edu-title">Education</p>
              <div className="edu-item">
                <div className="edu-dot"></div>
                <p className="edu-text"><strong>ICS — Physics & Computer Science</strong><br />Currently Enrolled | Karachi, Pakistan</p>
              </div>
              <div className="edu-item">
                <div className="edu-dot"></div>
                <p className="edu-text"><strong>BS Computer Science — Upcoming (InshAllah)</strong><br />University admission planned in coming months</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;