import React from 'react'; // Importa la biblioteca React para poder usar sus funcionalidades
import Game from './components/Game/Game'; // Importa el componente principal del juego
import './App.css'; // Importa los estilos CSS para la aplicación

// Define el componente principal App
const App: React.FC = () => {
    return (
        <div className="App"> {/* Contenedor principal de la aplicación */}
            <Game /> {/* Renderiza el componente del juego */}
        </div>
    );
};

export default App; // Exporta el componente App para que pueda ser utilizado en otros archivos
