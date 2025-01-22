import React, { useState } from 'react';
import { events } from '../Data/EventList';
import LifeCounter from '../LifeCounter/LifeCounter';
import EventCard from '../EventCard/EventCard';
import Result from '../Result/Result';

const Game: React.FC = () => {
    const [life, setLife] = useState(100);
    const [instance, setInstance] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [, setSelectedOption] = useState<null | number>(null);

    const handleEventSelect = (effect: number) => {
        setLife(prevLife => Math.max(0, prevLife + effect));
        setSelectedOption(null);

        if (instance < events.length - 1) {
            setInstance(prevInstance => prevInstance + 1);
        } else {
            setGameOver(true);
        }
    };

    const handleRestart = () => {
        setLife(100);
        setInstance(0);
        setGameOver(false);
        setGameStarted(false);
        setSelectedOption(null);
    };

    const handleStartGame = () => {
        setGameStarted(true);
    };

    // Determina qué imagen mostrar según la vida
    let imageSrc = "";
    if (!gameStarted) {
        imageSrc = "img-123PortadaInicio.com";
    } else if (gameOver) {
        imageSrc = life > 0 ? "img-124NaveVictoria.com" : "img-125NaveDestruida.com";
    } else if (life > 70) {
        imageSrc = "img-121NaveUno.com";
    } else if (life > 30) {
        imageSrc = "img-122NaveDos.com";
    } else {
        imageSrc = "img-126NaveTres.com";
    }

    return (
        <div className="game">
            <h1>Aventura Espacial</h1>
            <img src={imageSrc} alt="Estado de la nave" className="game-image" />
            <br />

            {!gameStarted ? (
                <button className="start-button" onClick={handleStartGame}>Comenzar</button>
            ) : !gameOver ? (
                <>
                    <LifeCounter life={life} />
                    <div className="event-group">
                        <EventCard
                            title={events[instance].title}
                            options={events[instance].options}
                            onSelect={handleEventSelect}
                        />
                    </div>
                </>
            ) : (
                <div>
                    <Result finalLife={life} />
                    <button className="restart-button" onClick={handleRestart}>Reiniciar Juego</button>
                </div>
            )}
        </div>
    );
};

export default Game;
