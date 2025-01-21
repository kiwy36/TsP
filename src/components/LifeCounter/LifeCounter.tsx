import React from 'react';

// Componente para mostrar la vida restante de la nave
type LifeCounterProps = {
    life: number;
};

const LifeCounter: React.FC<LifeCounterProps> = ({ life }) => {
    return (
        <div className="life-counter">
            <h2>Vida de la nave: {life}</h2>
        </div>
    );
};

export default LifeCounter;