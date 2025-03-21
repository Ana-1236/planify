import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <a href="index.html">
        <img src="src/assets/PLANify with rocco.png" alt="PLANIFY" style={{ height: '90px' }} />
      </a>
      <div>
        <a href="index.html" style={{ margin: '0 1rem' }}>Inicio</a>
        <a href="proyectoss.html" style={{ margin: '0 1rem' }}>Proyectos</a>
        {/* ... otros enlaces ... */}
      </div>
    </nav>
  );
}

export default Navbar;