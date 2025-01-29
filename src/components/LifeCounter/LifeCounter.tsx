import React from 'react'; // Importa React para definir el componente

// Definición de las propiedades que recibe el componente LifeCounter
type LifeCounterProps = {
    life: number; // Representa la cantidad de vida actual de la nave
    lifeClass: string; // Clase CSS para estilizar el contador de vida según la cantidad restante
};

// Definición del componente LifeCounter
const LifeCounter: React.FC<LifeCounterProps> = ({ life, lifeClass }) => {
    return (
        // Contenedor que muestra la vida restante, aplicando una clase dinámica para cambiar su estilo
        <div className={`life-counter ${lifeClass}`}>
            Vida: {life} {/* Muestra la cantidad actual de vida */}
        </div>
    );
};

export default LifeCounter; // Exporta el componente para ser utilizado en otros archivos
