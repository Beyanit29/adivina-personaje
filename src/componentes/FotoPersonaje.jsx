import React from 'react';
import '../styles/FotoPersonaje.css';

const FotoPersonaje = ({ nombreImagen }) => {
  const esUrlExterna = nombreImagen?.startsWith("http");
  const rutaLocal = `/src/assets/personajes/${nombreImagen}`;

  // Para imágenes locales con import.meta.glob
  const imagenes = import.meta.glob('/src/assets/personajes/*.jpg', { eager: true });
  const imagen = imagenes[rutaLocal];

  return (
    <div className="foto-personaje">
      {esUrlExterna ? (
        <img src={nombreImagen} alt="Personaje" />
      ) : imagen ? (
        <img src={imagen.default} alt="Personaje" />
      ) : (
        <p>Imagen no encontrada</p>
      )}
    </div>
  );
};

export default FotoPersonaje;
