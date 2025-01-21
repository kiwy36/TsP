import React from 'react';

// Definición de las propiedades del componente EventCard
type EventCardProps = {
    title: string;
    onSelect: () => void;
};

const EventCard: React.FC<EventCardProps> = ({ title, onSelect }) => {
    return (
        <button className="event-card" onClick={onSelect}>
            {title}
        </button>
    );
};

export default EventCard;