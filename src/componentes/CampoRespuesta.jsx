import React from 'react';
import '../styles/CampoRespuesta.css';


const CampoRespuesta = ({ respuesta, setRespuesta, manejarEnvio, mostrarBoton, siguiente }) => {
  if (mostrarBoton) {
    return (
      <button className="btn-responder" onClick={siguiente}>
        👉 Siguiente personaje
      </button>
    );
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        placeholder="¿Quién crees que es?"
        required
      />
      <button type="submit" className="btn-responder">Responder</button>
    </form>
  );
};

export default CampoRespuesta;
