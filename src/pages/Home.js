import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [crtOn, setCrtOn] = useState(false);

  return (
    <div className={`home ${crtOn ? 'crt-active' : ''}`}>
      <button className="crt-toggle" onClick={() => setCrtOn(!crtOn)}>
        {crtOn ? '🟢 CRT ON' : '⚫ CRT OFF'}
      </button>
      {crtOn && <div className="crt-overlay">
        <div className="crt-vignette"></div>
      </div>}

      <section className="hero">
        <h1>Welcome to Blammo Studios</h1>
        <p>⚡️Tech wizardry meets retro flair — handcrafted by Blair Kirkpatrick.</p>
        <a className="cta" href="#projects">See the Madness</a>
      </section>

      <section className="about">
        <h2>Who the Blammo?</h2>
        <p>I'm Blair — a physicist-turned-ML engineer with a healthy disrespect for bland websites and corporate fluff. I build serious systems with an unserious grin.</p>
        <p>Inspired by CRT monitors, floppy disks, and the strange optimism of 1980s tech fiction.</p>
      </section>

      <section className="projects" id="projects">
        <h2>Lab Reports</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>🐝 Bee Hive Monitor</h3>
            <p>Raspberry Pi + hive sensors = data-driven apiculture. Because even bees deserve observability.</p>
            <Link to="/projects/bee-monitor">Open Case File →</Link>
          </div>
          <div className="project-card">
            <h3>🐀 Rat Tracker</h3>
            <p>RFID and video tracking for lab rats. Like Google Analytics for rodents.</p>
            <Link to="/projects/rat-tracker">Peek Inside →</Link>
          </div>
          <div className="project-card">
            <h3>📈 Portfolio Optimizer</h3>
            <p>Machine learning meets financial chaos. Because YOLO is not a strategy.</p>
            <Link to="/projects/portfolio-optimizer">View Strategy →</Link>
          </div>
        </div>
      </section>

      <section className="blog">
        <h2>From the Console</h2>
        <p>Musings, rants, and insights — piped straight from my brain to Medium.</p>
        <a className="cta" href="/blog">Enter Blog Terminal</a>
      </section>

      <section className="contact">
        <h2>Insert Coin to Continue</h2>
        <p>📧 blair [dot] kirkpatrick [at] email.com</p>
        <p>🔗 <a href="https://github.com/BKirkpatrick">GitHub</a> | <a href="https://linkedin.com/in/blairkirkpatrick">LinkedIn</a></p>
      </section>
    </div>
  );
}

export default Home;