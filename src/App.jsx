
import React, { useState, useEffect } from 'react';

import MenuInicial from './componentes/MenuInicial';
import { personajes } from './data/personajes';
import FotoPersonaje from './componentes/FotoPersonaje';
import ListaPistas from './componentes/ListaPistas';
import CampoRespuesta from './componentes/CampoRespuesta';
import Estado from './componentes/Estado';
import Resultado from './componentes/Resultado';
import Sugerencias from './componentes/Sugerencias';


function App() {
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [indice, setIndice] = useState(0);
  const [indicePista, setIndicePista] = useState(0);
  const [respuesta, setRespuesta] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [intentos, setIntentos] = useState(0);
  const [puntaje, setPuntaje] = useState(0);

  const [mostrarBoton, setMostrarBoton] = useState(false);
  const personaje = personajes?.[indice] ?? null;

  useEffect(() => {
  if (!personaje) return;
  if (!personaje) return <p>Cargando personaje...</p>;


  const genero = personaje.genero;

  const distractores = personajes
    .filter(p => p.nombre !== personaje.nombre && p.genero === genero)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
    .map(p => p.nombre);

  const opciones = [...distractores, personaje.nombre].sort(() => 0.5 - Math.random());
  setOpcionesTexto(opciones);
}, [indice, personaje]);

  const [opcionesTexto, setOpcionesTexto] = useState([]);


  useEffect(() => {
  const genero = personaje.genero; // 'f' o 'm'

  const distractores = personajes
    .filter(p => p.nombre !== personaje.nombre && p.genero === genero) // 👈 mismo género
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)
    .map(p => p.nombre);

  const opciones = [...distractores, personaje.nombre].sort(() => 0.5 - Math.random());
  setOpcionesTexto(opciones);
}, [indice]);



  const manejarEnvio = (e) => {
    e.preventDefault();
    const entrada = respuesta.trim().toLowerCase();
    const correcto = personaje.nombre.toLowerCase();

    setIntentos((prev) => prev + 1);

    if (entrada === correcto) {
      setMensaje(`🎉 ¡Correcto! Era ${personaje.nombre}`);
      setPuntaje((prev) => prev + 1);
      setMostrarBoton(true);  // ✅ Mostrar botón
    } else {
      if (indicePista < personaje.pistas.length - 1) {
        setIndicePista((prev) => prev + 1);
        setMensaje('❌ Incorrecto. Aquí va otra pista...');
      } else {
        setMensaje(`Lo siento, era ${personaje.nombre}`);
        setMostrarBoton(true);  // ✅ Mostrar botón también
      }
    }


    setRespuesta('');
  };

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % personajes.length);
    setIndicePista(0);
    setMensaje('');
    setRespuesta('');
    setIntentos(0);
    setMostrarBoton(false); // ✅ Ocultar botón al pasar al siguiente
  };


  const iniciarJuego = () => {
    setJuegoIniciado(true);
  };


  if (!juegoIniciado) return <MenuInicial onIniciar={iniciarJuego} />;


  // 🔹 JUEGO EN MARCHA
  return (
    <div className="app-container">
      <h1>Adivina el Personaje 🧠</h1>

      <FotoPersonaje nombreImagen={personaje.imagen} />

      <ListaPistas pistas={personaje.pistas.slice(0, indicePista + 1)} />

      <Sugerencias opciones={opcionesTexto} />

      <CampoRespuesta

        respuesta={respuesta}
        setRespuesta={setRespuesta}
        manejarEnvio={manejarEnvio}
        mostrarBoton={mostrarBoton}
        siguiente={siguiente}
      />

      <Estado intentos={intentos} puntaje={puntaje} />

      {juegoIniciado && mensaje && (
        <Resultado
          mensaje={mensaje}
          setMensaje={setMensaje}
          siguiente={siguiente}
        />
      )}

    </div>
  );
}

export default App;
