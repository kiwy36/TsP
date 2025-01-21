import React from 'react';

interface OptionCardProps {
  description: string;
  effect: number;
  onClick: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({ description, onClick }) => {
  return (
    <div className="option-card" onClick={onClick}>
      <p>{description}</p>
    </div>
  );
};

export default OptionCard;
