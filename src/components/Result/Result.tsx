import React from 'react';

// Componente que muestra el resultado final después de 7 instancias
type ResultProps = {
    finalLife: number;
};

const Result: React.FC<ResultProps> = ({ finalLife }) => {
    return (
        <div className="result">
            <h1>Resultado Final</h1>
            <p>Vida restante: {finalLife}</p>
            <p>{finalLife > 0 ? "¡Has llegado a salvo!" : "Tu nave no sobrevivió."}</p>
        </div>
    );
};

export default Result;