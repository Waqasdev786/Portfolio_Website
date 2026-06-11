import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .navbar {
          background: #0a1f1f;
          border-bottom: 2px solid #1D9E75;
          padding: 0 2rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 999;
          width: 100%;
        }

        .navbar-logo {
          font-family: 'Caveat', cursive;
          font-weight: 700;
          font-size: 30px;
          color: #5DCAA5;
          letter-spacing: 1px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          align-items: center;
          flex: 1;
          justify-content: center;
        }

        .nav-links li {
          display: flex;
          align-items: center;
          height: 70px;
        }

        .nav-links li button {
          font-family: 'Caveat', cursive;
          font-size: 22px;
          color: #9FE1CB;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          padding-bottom: 4px;
        }

        .nav-links li button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #1D9E75;
          transition: width 0.3s ease;
        }

        .nav-links li button:hover {
          color: #5DCAA5;
        }

        .nav-links li button:hover::after {
          width: 100%;
        }

        .hire-btn {
          font-family: 'Caveat', cursive;
          font-size: 18px;
          background: transparent;
          border: 1.5px solid #1D9E75;
          color: #5DCAA5;
          padding: 6px 20px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .hire-btn:hover {
          background: #1D9E75;
          color: #0a1f1f;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background: #5DCAA5;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          background: #0a1f1f;
          border-top: 1px solid #1D9E75;
          padding: 1rem 2rem;
          position: absolute;
          top: 70px;
          left: 0;
          width: 100%;
          z-index: 998;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu li {
          list-style: none;
          padding: 10px 0;
          border-bottom: 1px solid #0d2b2b;
        }

        .mobile-menu li button {
          font-family: 'Caveat', cursive;
          font-size: 22px;
          color: #9FE1CB;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s;
        }

        .mobile-menu li button:hover {
          color: #5DCAA5;
        }

        .mobile-hire-btn {
          font-family: 'Caveat', cursive;
          font-size: 20px;
          background: transparent;
          border: 1.5px solid #1D9E75;
          color: #5DCAA5;
          padding: 8px 20px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 12px;
          width: 100%;
          transition: all 0.3s;
        }

        .mobile-hire-btn:hover {
          background: #1D9E75;
          color: #0a1f1f;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hire-btn { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className="navbar">
        <button className="navbar-logo" onClick={() => scrollTo("home")}>
          Muhammad Waqas
        </button>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <button onClick={() => scrollTo(link.id)}>
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <button className="hire-btn" onClick={() => scrollTo("contact")}>
          Hire Me
        </button>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.name}>
            <button onClick={() => scrollTo(link.id)}>
              {link.name}
            </button>
          </li>
        ))}
        <button className="mobile-hire-btn" onClick={() => scrollTo("contact")}>
          Hire Me
        </button>
      </ul>
    </>
  );
};

export default Navbar;