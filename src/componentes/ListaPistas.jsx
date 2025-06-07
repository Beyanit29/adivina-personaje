import React from 'react';
import '../styles/ListaPistas.css';

const ListaPistas = ({ pistas }) => {
  return (
    <div className="lista-pistas">
      {pistas.map((pista, i) => (
        <div key={i} className="pista">{pista}</div>
      ))}
    </div>
  );
};

export default ListaPistas;
