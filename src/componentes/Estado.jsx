import React from 'react';
import '../styles/Estado.css';

const Estado = ({ intentos, puntaje }) => {
  return (
    <div className="estado">
      <p>🎯Intentos: {intentos}</p>
      <p>⭐Puntaje: {puntaje}</p>
    </div>
  );
};


export default Estado;
