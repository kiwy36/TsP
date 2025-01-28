import React, { useState } from 'react';

// Definición de las propiedades del componente EventCard
type EventCardProps = {
    title: string;
    onSelect: (effect: number) => void;
    options: Array<{
        text: string;
        effect: number;
        resultDescription: string;
        image: string; // URL del repositorio
    }>;
};

const EventCard: React.FC<EventCardProps> = ({ title, onSelect, options }) => {
    const [selectedOption, setSelectedOption] = useState<null | number>(null);

    const handleSelect = (index: number) => {
        setSelectedOption(index);
        onSelect(options[index].effect);
    };

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
            {selectedOption !== null && (
                <div className="result">
                    {/* Cambia el src para usar el enlace completo de la imagen */}
                    <img src={options[selectedOption].image} alt={options[selectedOption].text} />
                    <p>{options[selectedOption].resultDescription}</p>
                </div>
            )}
        </div>
    );
};

export default EventCard;
