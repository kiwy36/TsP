import React, { useState, useEffect } from 'react';

// Definición de las propiedades que recibe el componente EventCard
type EventCardProps = {
    title: string;
    onSelect: (effect: number, shipPointChange: number, safetyPointChange: number) => void;
    options: Array<{
        text: string;
        effect: number;
        shipPointChange: number;
        safetyPointChange: number;
        resultDescription: string;
        image: string;
    }>;
};

// Definición del componente EventCard
const EventCard: React.FC<EventCardProps> = ({ title, onSelect, options }) => {
    const [selectedOption, setSelectedOption] = useState<null | number>(null);
    const [showResult, setShowResult] = useState(false); // Controla la visibilidad del mensaje del resultado

    // Maneja la selección de una opción del evento
    const handleSelect = (index: number) => {
        setSelectedOption(index); // Actualiza el estado con la opción seleccionada
        const selectedOption = options[index];
        // Llama a la función onSelect pasando los efectos de la opción elegida
        onSelect(selectedOption.effect, selectedOption.shipPointChange, selectedOption.safetyPointChange);
        setShowResult(true); // Muestra el resultado
    };

    // Temporizador para ocultar el resultado después de 10 segundos
    useEffect(() => {
        if (showResult) {
            const timer = setTimeout(() => {
                setShowResult(false); // Oculta el mensaje después de 10 segundos
            }, 10000);
            return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
        }
    }, [showResult]);

    return (
        <div className="event-card">
            <h3>{title}</h3>
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
            {/* Mostrar el resultado solo si ha sido seleccionado una opción */}
            {showResult && selectedOption !== null && (
                <div className="result">
                    <p>{options[selectedOption].resultDescription}</p>
                </div>
            )}
        </div>
    );
};

export default EventCard;
