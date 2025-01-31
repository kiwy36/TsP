import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado del componente.
import { events } from '../Data/EventList'; // Importa la lista de eventos desde el archivo EventList.
import LifeCounter from '../LifeCounter/LifeCounter'; // Importa el componente que muestra la vida restante.
import EventCard from '../EventCard/EventCard'; // Importa el componente que representa un evento en el juego.
import Result from '../Result/Result'; // Importa el componente que muestra el resultado final del juego.

// Definición del componente Game
const Game: React.FC = () => {
    // Estados principales del juego
    const [life, setLife] = useState(100); // Estado de la vida de la nave, inicia en 100.
    const [instance, setInstance] = useState(0); // Índice del evento actual en la lista de eventos.
    const [shipPoints, setShipPoints] = useState(0); // Puntos de combate obtenidos en la partida.
    const [safetyPoints, setSafetyPoints] = useState(0); // Puntos de seguridad obtenidos en la partida.
    const [gameOver, setGameOver] = useState(false); // Indica si el juego ha terminado.
    const [gameStarted, setGameStarted] = useState(false); // Indica si el juego ha comenzado.
    const [endMessage, setEndMessage] = useState(''); // Mensaje final del juego según el desenlace.

    // Maneja la selección de un evento y actualiza el estado del juego
    const handleEventSelect = (effect: number, shipPointChange: number, safetyPointChange: number) => {
        setLife((prevLife) => {
            const newLife = Math.max(0, prevLife + effect); // Ajusta la vida sin permitir valores negativos.
            if (newLife === 0) { // Si la vida llega a 0, el juego termina.
                setGameOver(true);
                calculateEnding(newLife, shipPoints + shipPointChange, safetyPoints + safetyPointChange);
            }
            return newLife;
        });
    
        setShipPoints((prev) => prev + shipPointChange); // Suma puntos de combate.
        setSafetyPoints((prev) => prev + safetyPointChange); // Suma puntos de seguridad.
    
        if (instance < events.length - 1 && life > 0) {
            setInstance((prevInstance) => prevInstance + 1); // Avanza al siguiente evento si el juego no ha terminado.
        } else {
            setGameOver(true); // Si no hay más eventos, finaliza el juego.
            calculateEnding(life, shipPoints + shipPointChange, safetyPoints + safetyPointChange);
        }
    };
    
    // Calcula el desenlace final basado en los puntos obtenidos
    const calculateEnding = (finalLife: number, finalShipPoints: number, finalSafetyPoints: number) => {
        if (finalLife <= 0) {
            setEndMessage('La nave fue destruida. Fin del viaje.');
            return;
        }
    
        let endingMessage = '¡Destruiste la nave enemiga y ';
        if (finalShipPoints >= 7) { // Si se acumularon suficientes puntos de combate...
            if (finalSafetyPoints >= 6) {
                endingMessage += 'volviste sano y salvo a la base!';
            } else if (finalSafetyPoints > 0) {
                endingMessage += 'quedaste atrapado en un planeta desconocido.';
            } else {
                endingMessage += 'estás a salvo en un punto seguro del espacio esperando refuerzos.';
            }
        } else { // Si la nave enemiga escapa...
            endingMessage = 'La nave enemiga escapó ';
            if (finalSafetyPoints >= 6) {
                endingMessage += 'pero lograste volver sano y salvo a la base.';
            } else if (finalSafetyPoints > 0) {
                endingMessage += 'y quedaste atrapado en un planeta desconocido.';
            } else {
                endingMessage += 'y sobreviviste al encuentro, pero estás en un punto seguro del espacio esperando refuerzos.';
            }
        }
    
        setEndMessage(endingMessage); // Establece el mensaje final según el resultado del juego.
    };
    
    // Reinicia el juego a su estado inicial
    const handleRestart = () => {
        setLife(100);
        setInstance(0);
        setShipPoints(0);
        setSafetyPoints(0);
        setGameOver(false);
        setGameStarted(false);
        setEndMessage('');
    };

    // Inicia el juego cambiando el estado gameStarted a true
    const handleStartGame = () => {
        setGameStarted(true);
    };

    // Determina la imagen que se mostrará según el estado del juego y la vida restante
    let imageSrc = '';
        if (!gameStarted) {
            imageSrc = '/images/001.jpeg';
        } else if (gameOver) {
            imageSrc = life > 0 ? '/images/006.png' : '/images/007.jpeg';
        } else if (life > 70) {
            imageSrc = '/images/002.png';
        } else if (life > 30) {
            imageSrc = '/images/003.png';
        } else {
            imageSrc = '/images/004.png';
        }

    // Asigna una clase CSS según el nivel de vida
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
            <section className='seccion-uno'>
                <h1>Aventura Espacial</h1>
                <img src={imageSrc} alt="Estado de la nave" className="game-image" />
                <LifeCounter life={life} lifeClass={lifeClass} />
            </section>
            <br />
            <section className='seccion-dos'>
            {!gameStarted ? (
                <button className="start-button" onClick={handleStartGame}>
                    Comenzar
                </button>
            ) : !gameOver ? (
                <>
                    <div className="event-group">
                        <EventCard
                            title={events[instance].title}
                            options={events[instance].options}
                            onSelect={(effect, shipPointChange, safetyPointChange) =>
                                handleEventSelect(effect, shipPointChange, safetyPointChange)
                            }
                        />
                    </div>
                </>
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

export default Game; // Exporta el componente Game para ser utilizado en la aplicación principal.