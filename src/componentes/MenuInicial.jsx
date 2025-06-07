import React from 'react';
import '../styles/menuInicial.css';

const MenuInicial = ({ onIniciar }) => {
    return (
        <div className="menu-inicial">
            <div className="background-pattern"></div>
            
            <div className="content-container">
                <div className="header-section">
                    <div className="emoji-decoration">🧠💻🔬</div>
                    <h1 className="main-title">
                        <span className="title-line-1">Adivina el</span>
                        <span className="title-line-2">Personaje</span>
                    </h1>
                    <div className="subtitle">Historia de la Computación</div>
                </div>

                <div className="description-section">
                    <p className="game-description">
                        ¿Podrás reconocer a los genios que cambiaron la historia de la computación?
                        <br />
                        <span className="challenge-text">¡Pon a prueba tus conocimientos!</span>
                    </p>
                </div>

                <div className="preview-icons">
                    <div className="icon-circle">👨‍💻</div>
                    <div className="icon-circle">👩‍💻</div>
                    <div className="icon-circle">🔬</div>
                    <div className="icon-circle">💡</div>
                </div>

                <div className="action-section">
                    <button className="start-button" onClick={onIniciar}>
                        <span className="button-icon">🎮</span>
                        <span className="button-text">Iniciar Juego</span>
                        <div className="button-shine"></div>
                    </button>
                </div>

                <div className="creators-section">
                    <div className="creators-title">Creado por:</div>
                    <div className="creators-names">
                        <div className="creator-name">Fernando Reyes Baltazar</div>
                        <div className="creator-name">Alondra Beyanit De Jesús Rodríguez</div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default MenuInicial;