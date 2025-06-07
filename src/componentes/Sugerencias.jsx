import React from 'react';
import '../styles/Sugerencias.css';

const Sugerencias = ({ opciones }) => {
  if (!opciones || opciones.length === 0) return null;

  return (
    <div className="ayuda-opciones">
      <p><strong>Sugerencias:</strong></p>
      <div className="sugerencias-lista">
        {opciones.map((nombre, index) => (
          <span key={index} className="sugerencia-item">{nombre}</span>
        ))}
      </div>
    </div>
  );
};

export default Sugerencias;