import React, { useEffect } from 'react';
import '../styles/Resultado.css';

const Resultado = ({ mensaje, setMensaje }) => {
  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => setMensaje(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensaje, setMensaje]);


  //Evita el renderizado
  if (!mensaje) return null;

  const esCorrecto = mensaje.includes('¡Correcto!');
  const esIncorrecto = mensaje.includes('Incorrecto') || mensaje.includes('Lo siento');

  const claseMensaje = esCorrecto
    ? 'toast-mensaje toast-mensaje-correcto'
    : esIncorrecto
    ? 'toast-mensaje toast-mensaje-incorrecto'
    : 'toast-mensaje';

  return (
    <div className={claseMensaje}>
      {mensaje}
    </div>
  );
};

export default Resultado;
