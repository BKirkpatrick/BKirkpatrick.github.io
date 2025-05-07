import React from 'react';

function TreeDashboard() {
  return (
    <div style={{ height: '90vh' }}>
      <h1>🌳 Tree Dashboard</h1>
      <iframe 
        src="https://tree-dashboard.netlify.app/tree-dashboard.html" 
        title="Tree Dashboard" 
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}

export default TreeDashboard;
