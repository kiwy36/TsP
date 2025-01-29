import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado del componente

// Definición de las propiedades que recibe el componente EventCard
type EventCardProps = {
    title: string; // Título del evento
    onSelect: (effect: number, shipPointChange: number, safetyPointChange: number) => void; // Función que se ejecuta al seleccionar una opción
    options: Array<{ // Lista de opciones disponibles para el evento
        text: string; // Texto de la opción
        effect: number; // Efecto numérico que produce la opción
        shipPointChange: number; // Cambios en los puntos de combate de la nave
        safetyPointChange: number; // Cambios en los puntos de seguridad de la nave
        resultDescription: string; // Descripción del resultado al seleccionar esta opción
        image: string; // Imagen representativa del resultado de la opción
    }>;
};

// Definición del componente EventCard
const EventCard: React.FC<EventCardProps> = ({ title, onSelect, options }) => {
    // Estado local para rastrear qué opción ha sido seleccionada
    const [selectedOption, setSelectedOption] = useState<null | number>(null);

    // Maneja la selección de una opción del evento
    const handleSelect = (index: number) => {
        setSelectedOption(index); // Actualiza el estado con la opción seleccionada
        const selectedOption = options[index]; // Obtiene los detalles de la opción seleccionada
        // Llama a la función onSelect pasando los efectos de la opción elegida
        onSelect(selectedOption.effect, selectedOption.shipPointChange, selectedOption.safetyPointChange);
    };

    return (
        <div className="event-card"> {/* Contenedor principal de la tarjeta del evento */}
            <h3>{title}</h3> {/* Muestra el título del evento */}
            <div className="event-options"> {/* Contenedor de las opciones */}
                {options.map((option, index) => (
                    <button
                        key={index} // Asigna una clave única para cada botón
                        onClick={() => handleSelect(index)} // Maneja la selección de la opción
                        className={selectedOption === index ? 'selected' : ''} // Agrega una clase si la opción está seleccionada
                    >
                        {option.text} {/* Muestra el texto de la opción */}
                    </button>
                ))}
            </div>
            {/* Muestra el resultado si se ha seleccionado una opción */}
            {selectedOption !== null && (
                <div className="result">
                    <img src={options[selectedOption].image} alt={options[selectedOption].text} /> {/* Muestra la imagen del resultado */}
                    <p>{options[selectedOption].resultDescription}</p> {/* Muestra la descripción del resultado */}
                </div>
            )}
        </div>
    );
};

export default EventCard; // Exporta el componente para ser usado en otros archivos
