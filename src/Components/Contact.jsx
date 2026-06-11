import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <>
      <style>{`
        .contact { min-height: 100vh; background: #0a1f1f; display: flex; align-items: center; justify-content: center; padding: 80px 2rem; }
        .contact-container { max-width: 1100px; width: 100%; }
        .contact-tag { font-family: 'Caveat', cursive; font-size: 22px; color: #1D9E75; margin-bottom: 6px; }
        .contact-title { font-family: 'Poppins', sans-serif; font-size: 36px; font-weight: 700; color: #ffffff; margin-bottom: 8px; }
        .contact-title span { color: #5DCAA5; }
        .contact-sub { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 300; color: #a0b8b4; margin-bottom: 40px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

        .contact-left { display: flex; flex-direction: column; gap: 16px; }
        .contact-info-card { background: #091818; border: 1px solid #1D9E75; border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; gap: 14px; transition: border-color 0.3s; }
        .contact-info-card:hover { border-color: #5DCAA5; }
        .contact-icon { width: 42px; height: 42px; border-radius: 50%; background: #0d2b2b; border: 1px solid #1D9E75; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .contact-icon svg { width: 18px; height: 18px; fill: #5DCAA5; }
        .contact-info-label { font-family: 'Poppins', sans-serif; font-size: 11px; color: #5DCAA5; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 3px; }
        .contact-info-val { font-family: 'Poppins', sans-serif; font-size: 13px; color: #ffffff; font-weight: 500; }

        .contact-socials { display: flex; gap: 10px; margin-top: 4px; }
        .contact-social-btn { width: 38px; height: 38px; border-radius: 50%; background: #091818; border: 1px solid #1D9E75; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; text-decoration: none; }
        .contact-social-btn:hover { background: #1D9E75; }
        .contact-social-btn svg { width: 16px; height: 16px; fill: #5DCAA5; }
        .contact-social-btn:hover svg { fill: #0a1f1f; }

        .contact-right { background: #091818; border: 1px solid #1D9E75; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; gap: 6px; }

        .input-group { display: flex; flex-direction: column; gap: 4px; }
        .contact-input { background: #0a1f1f; border: 1px solid #1D9E75; border-radius: 8px; padding: 10px 14px; color: #e0f0ec; font-size: 13px; font-family: 'Poppins', sans-serif; outline: none; width: 100%; transition: border-color 0.3s; }
        .contact-input:focus { border-color: #5DCAA5; }
        .contact-input::placeholder { color: #5a7a72; }
        .contact-input.error { border-color: #ff4444; }
        .contact-textarea { background: #0a1f1f; border: 1px solid #1D9E75; border-radius: 8px; padding: 10px 14px; color: #e0f0ec; font-size: 13px; font-family: 'Poppins', sans-serif; outline: none; width: 100%; height: 120px; resize: none; transition: border-color 0.3s; }
        .contact-textarea:focus { border-color: #5DCAA5; }
        .contact-textarea::placeholder { color: #5a7a72; }
        .contact-textarea.error { border-color: #ff4444; }
        .error-msg { font-family: 'Poppins', sans-serif; font-size: 11px; color: #ff4444; padding-left: 2px; }

        .contact-btn { background: #1D9E75; color: #0a1f1f; border: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600; font-family: 'Poppins', sans-serif; cursor: pointer; width: 100%; transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 8px; }
        .contact-btn:hover { background: #5DCAA5; }
        .contact-btn svg { width: 16px; height: 16px; fill: currentColor; }
        .contact-success { background: #0d2b2b; border: 1px solid #1D9E75; border-radius: 8px; padding: 10px 14px; font-family: 'Poppins', sans-serif; font-size: 13px; color: #5DCAA5; text-align: center; }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-title { font-size: 28px; }
        }
      `}</style>

      <section className="contact" id="contact">
        <div className="contact-container">
          <p className="contact-tag">— Get in touch</p>
          <h2 className="contact-title">Contact <span>Me</span></h2>
          <p className="contact-sub">Have a project in mind or want to hire me? Let's talk!</p>

          <div className="contact-grid">
            <div className="contact-left">
              <div className="contact-info-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-val">m07911795@gmail.com</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>
                </div>
                <div>
                  <p className="contact-info-label">Phone</p>
                  <p className="contact-info-val">+92-313-2687728</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                </div>
                <div>
                  <p className="contact-info-label">Location</p>
                  <p className="contact-info-val">Karachi, Pakistan</p>
                </div>
              </div>
              <div className="contact-socials">
                <a href="https://github.com/waqasarshd" target="_blank" rel="noreferrer" className="contact-social-btn">
                  <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/waqas-arshad-286501348" target="_blank" rel="noreferrer" className="contact-social-btn">
                  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578653574553" target="_blank" rel="noreferrer" className="contact-social-btn">
                  <svg viewBox="0 0 24 24"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                </a>
              </div>
            </div>

            <div className="contact-right">
              {sent && <div className="contact-success">Message sent! I'll get back to you soon. ✓</div>}

              <div className="input-group">
                <input
                  className={`contact-input ${errors.name ? "error" : ""}`}
                  type="text" name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className="input-group">
                <input
                  className={`contact-input ${errors.email ? "error" : ""}`}
                  type="email" name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className="input-group">
                <textarea
                  className={`contact-textarea ${errors.message ? "error" : ""}`}
                  name="message"
                  placeholder="Your Message..."
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button className="contact-btn" onClick={handleSubmit}>
                <svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;