import React from "react";

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <>
      <style>{`
        .footer {
          background: #060f0f;
          border-top: 1px solid #1D9E75;
          padding: 50px 2rem 24px;
        }
        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 24px;
        }
        .footer-brand {}
        .footer-logo {
          font-family: 'Caveat', cursive;
          font-size: 28px;
          font-weight: 700;
          color: #5DCAA5;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          margin-bottom: 8px;
          display: block;
        }
        .footer-tagline {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #a0b8b4;
          max-width: 220px;
          line-height: 1.7;
        }
        .footer-links-title {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #5DCAA5;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 14px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-link {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: #a0b8b4;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-align: left;
          transition: color 0.3s;
          text-transform: capitalize;
        }
        .footer-link:hover { color: #5DCAA5; }
        .footer-socials-title {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #5DCAA5;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 14px;
        }
        .footer-socials {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a0b8b4;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          transition: color 0.3s;
        }
        .footer-social-link:hover { color: #5DCAA5; }
        .footer-social-link svg { width: 15px; height: 15px; fill: currentColor; flex-shrink: 0; }
        .footer-divider {
          height: 1px;
          background: #0d2b2b;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: #5a7a72;
        }
        .footer-copy span { color: #5DCAA5; }
        .footer-back-top {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: #5DCAA5;
          background: none;
          border: 1px solid #1D9E75;
          padding: 5px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .footer-back-top:hover { background: #1D9E75; color: #0a1f1f; }
        .footer-back-top svg { width: 13px; height: 13px; fill: currentColor; }

        @media (max-width: 768px) {
          .footer-top { flex-direction: column; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">

            {/* Brand */}
            <div className="footer-brand">
              <button className="footer-logo" onClick={() => scrollTo("home")}>
                Muhammad Waqas
              </button>
              <p className="footer-tagline">
                Full Stack Web Developer from Karachi, Pakistan. Open to internships & collaborations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="footer-links-title">Quick Links</p>
              <div className="footer-links">
                {links.map((link) => (
                  <button key={link} className="footer-link" onClick={() => scrollTo(link)}>
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="footer-socials-title">Connect</p>
              <div className="footer-socials">
                <a href="https://github.com/waqasarshd" target="_blank" rel="noreferrer" className="footer-social-link">
                  <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/waqas-arshad-286501348" target="_blank" rel="noreferrer" className="footer-social-link">
                  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578653574553" target="_blank" rel="noreferrer" className="footer-social-link">
                  <svg viewBox="0 0 24 24"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                  Facebook
                </a>
              </div>
            </div>

          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © 2025 <span>Muhammad Waqas</span>. All rights reserved.
            </p>
            <button className="footer-back-top" onClick={() => scrollTo("home")}>
              <svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
              Back to Top
            </button>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;