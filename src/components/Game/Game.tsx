import React, { useState } from 'react';
import OptionCard from './OptionCard';

interface Event {
  id: number;
  description: string;
  effect: number;
}

const events: Event[] = [
  { id: 1, description: 'Un meteorito golpea la nave. Pierdes 20 de vida.', effect: -20 },
  { id: 2, description: 'Encuentras un planeta con recursos. Ganas 30 de vida.', effect: 30 },
  { id: 3, description: 'Piratas espaciales atacan. Pierdes 15 de vida.', effect: -15 },
  // Agrega más eventos aquí
];

const Game: React.FC = () => {
  const [life, setLife] = useState<number>(100);
  const [instance, setInstance] = useState<number>(1);

  const handleOptionClick = (effect: number) => {
    setLife((prev) => Math.max(prev + effect, 0));
    setInstance((prev) => prev + 1);
  };

  const getRandomEvents = (): Event[] => {
    return events.sort(() => 0.5 - Math.random()).slice(0, 3);
  };

  if (instance > 7) {
    return (
      <div>
        <h2>¡Juego terminado!</h2>
        <p>Vida restante: {life}</p>
      </div>
    );
  }

  const options = getRandomEvents();

  return (
    <div>
      <h2>Instancia {instance}</h2>
      <p>Vida actual: {life}</p>
      <div className="options-container">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            description={option.description}
            effect={option.effect}
            onClick={() => handleOptionClick(option.effect)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
