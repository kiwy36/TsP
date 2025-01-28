export const events = [
    {
        title: "Explorar el Sector Alfa",
        description: "Detectas una señal extraña en el Sector Alfa. ¿Qué haces?",
        options: [
        {
            text: "Ir a la derecha, hacia el cúmulo estelar",
            effect: -10,
            resultDescription: "Un campo de asteroides daña la nave al intentar evitar una tormenta solar. Pierdes recursos y sufres daños menores.",
            image: "asteroid_field.jpg",
            shipPointChange: 0,
            safetyPointChange: -1,
        },
        {
            text: "Buscar el planeta más cercano",
            effect: +10,
            resultDescription: "Descubres un planeta rico en minerales raros. Logras extraer recursos valiosos que mejoran tus sistemas.",
            image: "planet_resources.jpg",
            shipPointChange: 0,
            safetyPointChange: 1,
        },
        {
            text: "Ignorar la señal y continuar la ruta trazada",
            effect: 0,
            resultDescription: "Decides no arriesgarte y sigues tu camino. No ocurre nada.",
            image: "pirates_detect.jpg",
            shipPointChange: 0,
            safetyPointChange: 0,
        },
        {
            text: "Volver a la estación más cercana",
            effect: 0,
            resultDescription: "Regresas a la estación sin obtener nada, pero evitas problemas mayores.",
            image: "spaceport.jpg",
            shipPointChange: 0,
            safetyPointChange: 0,
        }
        ]
    },
    {
        title: "Encuentro con una Nave Desconocida",
        description: "Una nave de origen desconocido se aproxima. ¿Cómo reaccionas?",
        options: [
        {
            text: "Intentar comunicarte pacíficamente",
            effect: 0,
            resultDescription: "Logras establecer contacto y la nave comparte información valiosa sobre rutas seguras.",
            image: "space_traveler.jpg",
            shipPointChange: 0,
            safetyPointChange: 1,
        },
        {
            text: "Prepararte para un posible enfrentamiento",
            effect: -20,
            resultDescription: "La nave resulta ser hostil y te ataca. Sufres daños durante el breve combate.",
            image: "space_pirates.jpg",
            shipPointChange: 1,
            safetyPointChange: -2,
        },
        {
            text: "Evadir la nave sin hacer contacto",
            effect: 0,
            resultDescription: "Logras evitar la nave sin incidentes. No ganas ni pierdes nada.",
            image: "pirates_detect.jpg",
            shipPointChange: 0,
            safetyPointChange: 0,
        },
        {
            text: "Atacar primero para evitar sorpresas",
            effect: -30,
            resultDescription: "La nave se defiende pero logra escapar y tú sufres daños graves en el enfrentamiento.",
            image: "ship_collision.jpg",
            shipPointChange: 2,
            safetyPointChange: -2,
        }
        ]
    },
    {
        title: "Agujeros Negros y Distorsión Espacial",
        description: "Te acercas a un agujero negro que distorsiona tus sistemas. ¿Qué harás?",
        options: [
        {
            text: "Acelerar para escapar",
            effect: -20,
            resultDescription: "Tu nave sufre severos daños por la aceleración, pero logras escapar.",
            image: "black_hole.jpg",
            shipPointChange: 0,
            safetyPointChange: -2,
        },
        {
            text: "Intentar estabilizar los sistemas y esperar",
            effect: 0,
            resultDescription: "Los sistemas de la nave se estabilizan parcialmente, pero se pierden recursos.",
            image: "cosmic_ray.jpg",
            shipPointChange: 0,
            safetyPointChange: +1,
        },
        {
            text: "Usar un campo de distorsión para atravesarlo",
            effect: -30,
            resultDescription: "El campo de distorsión provoca daños graves, pero logras cruzar.",
            image: "space_storm.jpg",
            shipPointChange: 0,
            safetyPointChange: -3,
        },
        {
            text: "Evitar el agujero negro y retroceder",
            effect: 0,
            resultDescription: "Te alejas del agujero negro sin sufrir daños.",
            image: "astronaut.jpg",
            shipPointChange: 0,
            safetyPointChange: 0,
        }
        ]
    },
    {
        title: "El Campo de Asteroides",
        description: "Un campo de asteroides bloquea tu camino. ¿Cómo lo abordas?",
        options: [
        {
            text: "Acelerar y atravesarlo rápidamente",
            effect: -30,
            resultDescription: "Varios asteroides golpean la nave, dañando los sistemas de navegación.",
            image: "asteroid_field.jpg",
            shipPointChange: 0,
            safetyPointChange: -2,
        },
        {
            text: "Desviar la nave hacia una ruta más segura",
            effect: 0,
            resultDescription: "Evitas el campo de asteroides y encuentras una ruta segura con recursos adicionales.",
            image: "space_traveler.jpg",
            shipPointChange: 0,
            safetyPointChange: 1,
        },
        {
            text: "Activas el sistema de defensa y vas con precausion",
            effect: 0,
            resultDescription: "Cruzas el imprevisto de manera prudente sin sufrir daños.",
            image: "spaceport.jpg",
            shipPointChange: 0,
            safetyPointChange: 0,
        },
        {
            text: "Detenerte y esperar a que pase el campo",
            effect: 0,
            resultDescription: "Pierdes tiempo esperando, pero no sufres daños.",
            image: "space_storm.jpg",
            shipPointChange: 0,
            safetyPointChange: 0,
        }
        ]
    },
    {
        title: "Nebulosa Eléctrica",
        description: "Tu nave se adentra en una densa nebulosa cargada de energía eléctrica. La visibilidad es limitada y los sistemas están inestables. ¿Cómo reaccionas?",
        options: [
        {
            text: "Activar los escudos y continuar",
            effect: -10,
            resultDescription: "El campo eléctrico agota tus escudos rápidamente, pero logras cruzar la nebulosa.",
            image: "electric_nebula.jpg",
            shipPointChange: 0,
            safetyPointChange: -1,
        },
        {
            text: "Buscar un camino alternativo",
            effect: +30,
            resultDescription: "Encuentras una ruta segura que evita la nebulosa, pero encuestras una estación de reparaciones.",
            image: "space_route.jpg",
            shipPointChange: 0,
            safetyPointChange: +2,
        },
        {
            text: "Acelerar la nave al maximo para salir lo mas rapido posible.",
            effect: -20,
            resultDescription: "La nave sufre graves daños por el imprevisto.",
            image: "data_analysis.jpg",
            shipPointChange: 0,
            safetyPointChange: -2,
        },
        {
            text: "Retroceder y evitar riesgos",
            effect: 0,
            resultDescription: "Decides no arriesgarte y abandonas la zona. No ocurre nada.",
            image: "retreat.jpg",
            shipPointChange: 0,
            safetyPointChange: 0,
        }
        ]
    },
    {
        title: "Señal de Socorro",
        description: "Recibes una señal de socorro de una nave dañada en el sector cercano. Podría ser una trampa, pero también una oportunidad. ¿Qué haces?",
        options: [
        {
            text: "Responder y brindar ayuda",
            effect: +10,
            resultDescription: "Ayudas a la nave y, a cambio, recibes recursos y una mejora para tus sistemas.",
            image: "rescue_mission.jpg",
            shipPointChange: 0,
            safetyPointChange: 1,
        },
        {
            text: "Ignorar la señal y continuar",
            effect: 0,
            resultDescription: "Decides no involucrarte y sigues tu camino. Nada ocurre.",
            image: "neutral_space.jpg",
            shipPointChange: 0,
            safetyPointChange: 0,
        },
        {
            text: "Prepararte para un ataque sorpresa",
            effect: -10,
            resultDescription: "Destruyes una nave pirata que tenia pensado asaltarte sin muchos daños.",
            image: "pirate_trap.jpg",
            shipPointChange: 0,
            safetyPointChange: -1,
        },
        {
            text: "Intentar comunicarte primero para evaluar riesgos",
            effect: 0,
            resultDescription: "Era la primera nave enemiga que intentaba darte una jugarreta pero logras evitar la trampa.",
            image: "distress_call.jpg",
            shipPointChange: 0,
            safetyPointChange: +2,
        }
        ]
    },
    {
        title: "Desvío hacia un Campo de Investigación Abandonado",
        description: "Detectas un antiguo campo de investigación espacial. Podrías explorar para recuperar datos o recursos. ¿Qué haces?",
        options: [
        {
            text: "Explorar y buscar recursos",
            effect: +20,
            resultDescription: "Encuentras tecnología avanzada que mejora tu nave.",
            image: "abandoned_station.jpg",
            shipPointChange: 0,
            safetyPointChange: +2,
        },
        {
            text: "Recolectar datos y salir rápidamente",
            effect: 0,
            resultDescription: "Obtienes información valiosa, pero no encuentras recursos tangibles.",
            image: "data_collection.jpg",
            shipPointChange: 0,
            safetyPointChange: +1,
        },
        {
            text: "Evitar la zona por precaución",
            effect: 0,
            resultDescription: "Decides no explorar y sigues tu camino sin incidentes.",
            image: "cautious.jpg",
            shipPointChange: 0,
            safetyPointChange: 0,
        },
        {
            text: "Investigar profundamente a pesar del riesgo",
            effect: -10,
            resultDescription: "La estación colapsa mientras exploras, dañando tu nave levemente.",
            image: "station_collapse.jpg",
            shipPointChange: 0,
            safetyPointChange: -1,
        }
        ]
    },
    {
        title: "Enfrentamiento Final: La Nave Enemiga",
        description: "Llegas al clímax de tu misión: enfrentarte a la nave enemiga que ha amenazado tu travesía. Tu próximo movimiento será crucial para determinar el destino de tu nave y tu tripulación. ¿Qué harás?",
        options: [
        {
            text: "Enfrentarla de frente y lanzar todo tu armamento",
            effect: -50,
            resultDescription: "Tu nave sufre un ataque devastador durante el enfrentamiento directo. Aunque logras dañarla, la mayoría de tus sistemas quedan destruidos pero la nave enemiga tambien se lleva sus daños, que pasara ?.",
            image: "massive_battle.jpg",
            shipPointChange: 7,
            safetyPointChange: -6,
        },
        {
            text: "Duelo de velocidad y habilidad",
            effect: 0,
            resultDescription: "Con un ataque certero, destruyes la nave enemiga y sales victorioso. Tu tripulación celebra mientras restauras el honor de tu misión.",
            image: "enemy_core_destroyed.jpg",
            shipPointChange: +14,
            safetyPointChange: +1,
        },
        {
            text: "Usar maniobras evasivas para escapar",
            effect: -10,
            resultDescription: "Logras escapar del ataque de la nave enemiga, pero sufres daños moderados durante la retirada. Aunque sobrevives, la misión queda inconclusa.",
            image: "escape_maneuver.jpg",
            shipPointChange: -14,
            safetyPointChange: +4,
        },
        {
            text: "Utilizar una estrategia de sacrificio: lanzar un ataque suicida",
            effect: -50,
            resultDescription: "Logras destruir la nave enemiga, pero el ataque causa daños críticos a tu propia nave. ¿Sobrevives para contar la historia?.",
            image: "kamikaze_attack.jpg",
            shipPointChange: +20,
            safetyPointChange: -8,
        }
        ]
    }
];
