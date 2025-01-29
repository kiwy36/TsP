import React from 'react'; // Importa React para definir el componente

// Definición de las propiedades que recibe el componente Result
type ResultProps = {
    finalLife: number; // Representa la vida restante de la nave al finalizar el juego
};

// Definición del componente Result
const Result: React.FC<ResultProps> = ({ finalLife }) => {
    return (
        <div className="result"> {/* Contenedor principal del resultado final */}
            <h1>Resultado Final</h1> {/* Título de la sección */}
            <p>Vida restante: {finalLife}</p> {/* Muestra la cantidad de vida con la que se finalizó */}
            <p>
                {/* Muestra un mensaje según la vida restante: éxito si es mayor a 0, fracaso si es 0 o menos */}
                {finalLife > 0 ? "¡Has llegado a salvo!" : "Tu nave no sobrevivió."}
            </p>
        </div>
    );
};

export default Result; // Exporta el componente para ser utilizado en otros archivos
