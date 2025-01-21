import React, { useState } from 'react';
import { events } from '../Data/EventList';
import LifeCounter from '../LifeCounter/LifeCounter';
import EventCard from '../EventCard/EventCard';
import Result from '../Result/Result';

const Game: React.FC = () => {
    // Estado de la vida de la nave
    const [life, setLife] = useState(100);
    // Estado para controlar la instancia actual
    const [instance, setInstance] = useState(1);
    // Estado para controlar si el juego terminó
    const [gameOver, setGameOver] = useState(false);

    // Función para manejar la selección de un evento
    const handleEventSelect = (effect: number) => {
        setLife(prevLife => prevLife + effect);
        if (instance < 7) {
            setInstance(prevInstance => prevInstance + 1);
        } else {
            setGameOver(true);
        }
    };

    // Obtener tres eventos aleatorios para la instancia actual
    const currentEvents = events.sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div className="game">
            <h1>Aventura Espacial</h1>
            <LifeCounter life={life} />
            {!gameOver ? (
                <div className="event-options">
                    {currentEvents.map((event, index) => (
                        <EventCard key={index} title={event.title} onSelect={() => handleEventSelect(event.effect)} />
                    ))}
                </div>
            ) : (
                <Result finalLife={life} />
            )}
        </div>
    );
};

export default Game;
