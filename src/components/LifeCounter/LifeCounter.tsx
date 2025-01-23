import React from 'react';

// Componente para mostrar la vida restante de la nave
type LifeCounterProps = {
    life: number;
    lifeClass: string;
};

const LifeCounter: React.FC<LifeCounterProps> = ({ life, lifeClass }) => {
    return <div className={`life-counter ${lifeClass}`}>Vida: {life}</div>;
};

export default LifeCounter;