import React from "react";

const Hero = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <style>{`
        .hero {
          min-height: calc(100vh - 70px);
          background: #0a1f1f;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 2rem;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -100px; left: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(29,158,117,0.12), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: blobMove 8s ease-in-out infinite alternate;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -100px; right: -100px;
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(93,202,165,0.08), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: blobMove2 10s ease-in-out infinite alternate;
        }
        @keyframes blobMove  { to { transform: translate(40px, 40px); } }
        @keyframes blobMove2 { to { transform: translate(-40px,-40px); } }

        .hero-container {
          max-width: 1100px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          position: relative;
          z-index: 1;
        }

        .hero-info { flex: 1; display: flex; flex-direction: column; gap: 16px; }
        .hero-greeting { font-family: 'Caveat', cursive; font-size: 26px; color: #5DCAA5; animation: fadeUp 0.6s ease both; }
        .hero-name { font-family: 'Poppins', sans-serif; font-size: 48px; font-weight: 700; color: #ffffff; line-height: 1.1; animation: fadeUp 0.6s 0.1s ease both; }
        .hero-name span { color: #5DCAA5; }
        .hero-role { font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 400; color: #9FE1CB; animation: fadeUp 0.6s 0.2s ease both; }
        .hero-desc { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 300; color: #a0b8b4; line-height: 1.8; max-width: 480px; animation: fadeUp 0.6s 0.3s ease both; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 8px; animation: fadeUp 0.6s 0.4s ease both; }
        .btn-download { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500; background: #1D9E75; color: #0a1f1f; border: none; padding: 10px 22px; border-radius: 8px; cursor: pointer; transition: all 0.3s; display: inline-flex; align-items: center; gap: 6px; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 15px rgba(29,158,117,0.3); }
        .btn-download svg { width: 15px; height: 15px; fill: currentColor; }
        .btn-download:hover { background: #5DCAA5; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(29,158,117,0.4); }
        .btn-contact { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500; background: transparent; color: #5DCAA5; border: 1.5px solid #1D9E75; padding: 10px 22px; border-radius: 8px; cursor: pointer; transition: all 0.3s; text-decoration: none; }
        .btn-contact:hover { background: #1D9E75; color: #0a1f1f; transform: translateY(-2px); }

        .hero-socials { display: flex; gap: 0.8rem; margin-top: 8px; align-items: center; flex-wrap: wrap; animation: fadeUp 0.6s 0.5s ease both; }
        .social-link { display: flex; align-items: center; gap: 6px; color: #9FE1CB; text-decoration: none; font-family: 'Poppins', sans-serif; font-size: 13px; border: 1px solid #1D9E75; padding: 7px 14px; border-radius: 8px; transition: all 0.3s; }
        .social-link:hover { background: #1D9E75; color: #0a1f1f; transform: translateY(-2px); }
        .social-link svg { width: 16px; height: 16px; fill: currentColor; }

        /* ── IMAGE ── */
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeUp 0.8s 0.2s ease both;
        }

        /* Float animation wrapper */
        .image-float {
          animation: floatImg 4s ease-in-out infinite;
          position: relative;
          display: inline-flex;
        }

        @keyframes floatImg {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        /* Animated gradient border using padding trick */
        .image-border {
          padding: 3px;
          border-radius: 24px;
          background: linear-gradient(135deg, #1D9E75, #5DCAA5, #0a4a3a, #1D9E75);
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
          box-shadow:
            0 0 30px rgba(29,158,117,0.4),
            0 0 60px rgba(29,158,117,0.15),
            0 20px 60px rgba(0,0,0,0.5);
        }

        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Actual image box */
        .image-wrapper {
          width: 320px;
          height: 400px;
          border-radius: 22px;
          overflow: hidden;
          background: #0d2b2b;
          position: relative;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        /* Bottom fade to match bg */
        .image-wrapper::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 30%;
          background: linear-gradient(to top, rgba(10,31,31,0.5), transparent);
          pointer-events: none;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .hero-container { flex-direction: column-reverse; text-align: center; gap: 2rem; }
          .hero-name  { font-size: 36px; }
          .hero-desc  { margin: 0 auto; }
          .hero-btns  { justify-content: center; }
          .hero-socials { justify-content: center; }
          .image-wrapper { width: 240px; height: 300px; }
        }
        @media (max-width: 480px) {
          .hero-name { font-size: 30px; }
          .hero-role { font-size: 17px; }
          .hero-greeting { font-size: 22px; }
          .image-wrapper { width: 200px; height: 260px; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-container">

          {/* ── LEFT: Info ── */}
          <div className="hero-info">
            <p className="hero-greeting">Hi there, I'm</p>
            <h1 className="hero-name">Muhammad <span>Waqas</span></h1>
            <p className="hero-role">Full Stack Web Developer</p>
            <p className="hero-desc">
              I'm a passionate ICS (Physics &amp; Computer Science) student planning to pursue a CS degree at university soon — InshAllah. As a Full Stack Developer, I build modern, responsive web applications using HTML, CSS, JavaScript, Bootstrap, Laravel, MySQL, and PHP.
            </p>
            <div className="hero-btns">
<a href="/Resume_Waqas.pdf" target="_blank" rel="noreferrer" className="btn-download">
                <svg viewBox="0 0 24 24"><path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/></svg>
                Download CV
              </a>
              <a href="#contact" className="btn-contact">Contact Me</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/waqasarshd" target="_blank" rel="noreferrer" className="social-link">
                <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578653574553" target="_blank" rel="noreferrer" className="social-link">
                <svg viewBox="0 0 24 24"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                Facebook
              </a>
              <a href="https://www.linkedin.com/in/waqas-arshad-286501348" target="_blank" rel="noreferrer" className="social-link">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── RIGHT: Image ── */}
          <div className="hero-image">
            <div className="image-float">
              <div className="image-border">
                <div className="image-wrapper">
                  <img src="/profile.jpg" alt="Muhammad Waqas" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;