import React, { useState } from 'react';

type EventCardProps = {
    title: string;
    onSelect: (effect: number, shipPointChange: number, safetyPointChange: number) => void;
    onEventComplete?: () => void; // Nuevo callback para indicar que la transición terminó.
    options: Array<{
        text: string;
        effect: number;
        shipPointChange: number;
        safetyPointChange: number;
        resultDescription: string;
        image: string;
    }>;
};

const EventCard: React.FC<EventCardProps> = ({ title, onSelect, onEventComplete, options }) => {
    const [selectedOption, setSelectedOption] = useState<null | number>(null);
    const [showResult, setShowResult] = useState(false);

    const handleSelect = (index: number) => {
        setSelectedOption(index);
        const option = options[index];
        // Se llama inmediatamente para actualizar la vida y puntos.
        onSelect(option.effect, option.shipPointChange, option.safetyPointChange);
        // Activamos la transición: ocultamos las opciones y mostramos el resultado.
        setShowResult(true);

        // Después de 8 segundos se oculta el resultado y se notifica al padre para avanzar.
        setTimeout(() => {
            setShowResult(false);
            setSelectedOption(null);
            if (onEventComplete) onEventComplete();
        }, 8000);
    };

    return (
        <div className="event-card">
            <h3>{title}</h3>
            {/* Se muestran las opciones solo cuando no se está mostrando el resultado */}
            {!showResult && (
                <div className="event-options">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={selectedOption === index ? 'selected' : ''}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            )}
            {/* Se muestra el resultado cuando se ha seleccionado una opción */}
            {showResult && selectedOption !== null && (
                <div className="result">
                    <p>{options[selectedOption].resultDescription}</p>
                </div>
            )}
        </div>
    );
};

export default EventCard;
