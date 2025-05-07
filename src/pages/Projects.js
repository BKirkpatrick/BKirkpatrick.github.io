import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        <li><Link to="/projects/tree-dashboard">🌳 Tree Dashboard – Visualizing Tree Data</Link></li>
        <li><Link to="/projects/bee-monitor">🐝 Bee Hive Monitor – Raspberry Pi + sensors to track hive health</Link></li>
        <li><Link to="/projects/rat-tracker">🐀 Rat Tracker – RFID + video tracking in lab environments</Link></li>
        <li><Link to="/projects/portfolio-optimiser">📈 Portfolio Optimizer – XGBoost models + financial risk metrics</Link></li>
      </ul>
    </div>
  );
}

export default Projects;