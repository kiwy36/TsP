import React, { useState } from 'react';
import LifeCounter from '../LifeCounter/LifeCounter';
import EventCard from '../EventCard/EventCard';
import Result from '../Result/Result';
import gameEvents from '../Data/gameEvents.json'; // Importa el JSON

const Game: React.FC = () => {
    const [life, setLife] = useState(100);
    const [instance, setInstance] = useState(0);
    const [shipPoints, setShipPoints] = useState(0);
    const [safetyPoints, setSafetyPoints] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [endMessage, setEndMessage] = useState('');

    // Esta función se encarga de aplicar el efecto de la opción seleccionada.
    const handleEventSelect = (effect: number, shipPointChange: number, safetyPointChange: number) => {
        setLife((prevLife) => {
            const newLife = Math.max(0, prevLife + effect);
            if (newLife === 0) {
                setGameOver(true);
                calculateEnding(newLife, shipPoints + shipPointChange, safetyPoints + safetyPointChange);
            }
            return newLife;
        });

        setShipPoints((prev) => prev + shipPointChange);
        setSafetyPoints((prev) => prev + safetyPointChange);

        // Si la nave sufre daños críticos en el último evento,
        // se puede calcular el final inmediatamente.
        // De lo contrario, la actualización de la instancia se hará
        // una vez transcurridos los 8 segundos en EventCard.
        if(instance === gameEvents.events.length - 1 && life > 0) {
            setGameOver(true);
            calculateEnding(life, shipPoints + shipPointChange, safetyPoints + safetyPointChange);
        }
    };

    // Esta función se llama desde EventCard una vez finalizada la transición.
    const handleEventComplete = () => {
        // Si el juego no ha terminado, avanzamos a la siguiente instancia.
        if (!gameOver && instance < gameEvents.events.length - 1) {
            setInstance((prevInstance) => prevInstance + 1);
        }
    };

    const calculateEnding = (finalLife: number, finalShipPoints: number, finalSafetyPoints: number) => {
        if (finalLife <= 0) {
            setEndMessage('La nave fue destruida. Fin del viaje.');
            return;
        }
    
        let endingMessage = '¡Destruiste la nave enemiga y ';
        if (finalShipPoints >= 7) {
            if (finalSafetyPoints >= 6) {
                endingMessage += 'volviste sano y salvo a la base!';
            } else if (finalSafetyPoints > 0) {
                endingMessage += 'quedaste atrapado en un planeta desconocido.';
            } else {
                endingMessage += 'estás a salvo en un punto seguro del espacio esperando refuerzos.';
            }
        } else {
            endingMessage = 'La nave enemiga escapó ';
            if (finalSafetyPoints >= 6) {
                endingMessage += 'pero lograste volver sano y salvo a la base.';
            } else if (finalSafetyPoints > 0) {
                endingMessage += 'y quedaste atrapado en un planeta desconocido.';
            } else {
                endingMessage += 'y sobreviviste al encuentro, pero estás en un punto seguro del espacio esperando refuerzos.';
            }
        }
    
        setEndMessage(endingMessage);
    };

    const handleRestart = () => {
        setLife(100);
        setInstance(0);
        setShipPoints(0);
        setSafetyPoints(0);
        setGameOver(false);
        setGameStarted(false);
        setEndMessage('');
    };

    const handleStartGame = () => {
        setGameStarted(true);
    };

    let imageSrc = '';
    if (!gameStarted) {
        imageSrc = '/images/002.png';
    } else if (gameOver) {
        imageSrc = life > 0 ? '/images/003.png' : '/images/001.jpeg';
    } else if (life > 70) {
        imageSrc = '/images/006.png';
    } else if (life > 30) {
        imageSrc = '/images/005.png';
    } else {
        imageSrc = '/images/004.png';
    }

    let lifeClass = 'high';
    if (life <= 70 && life > 30) {
        lifeClass = 'medium';
    } else if (life <= 30 && life > 10) {
        lifeClass = 'low';
    } else if (life <= 10) {
        lifeClass = 'critical';
    }

    return (
        <div className="game">
            <section className="seccion-uno">
                <h1>Aventura Espacial</h1>
                <img src={imageSrc} alt="Estado de la nave" className="game-image" />
                <LifeCounter life={life} lifeClass={lifeClass} />
            </section>
            <br />
            <section className="seccion-dos">
                {!gameStarted ? (
                    <button className="start-button" onClick={handleStartGame}>
                        Comenzar
                    </button>
                ) : !gameOver ? (
                    <div className="event-group">
                        <EventCard
                            title={gameEvents.events[instance].title}
                            options={gameEvents.events[instance].options}
                            onSelect={(effect, shipPointChange, safetyPointChange) =>
                                handleEventSelect(effect, shipPointChange, safetyPointChange)
                            }
                            onEventComplete={handleEventComplete}
                        />
                    </div>
                ) : (
                    <div>
                        <Result finalLife={life} />
                        <h2 className="Resultado">{endMessage}</h2>
                        <button className="restart-button" onClick={handleRestart}>
                            Reiniciar Juego
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Game;
