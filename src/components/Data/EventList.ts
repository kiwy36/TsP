export const events = [
    {
        title: "Explorar el Sector Alfa",
        description: "Detectas una señal extraña en el Sector Alfa. ¿Qué haces?",
        options: [
            {
                text: "Ir a la derecha, hacia el cúmulo estelar",
                effect: -10,
                resultDescription: "Un campo de asteroides daña la nave al intentar evitar una tormenta solar. Pierdes recursos y sufres daños menores.",
                image: "asteroid_field.jpg"
            },
            {
                text: "Buscar el planeta más cercano",
                effect: 20,
                resultDescription: "Descubres un planeta rico en minerales raros. Logras extraer recursos valiosos que mejoran tus sistemas.",
                image: "planet_resources.jpg"
            },
            {
                text: "Ignorar la señal y continuar la ruta trazada",
                effect: 0,
                resultDescription: "Decides no arriesgarte y sigues tu camino. No ocurre nada.",
                image: "pirates_detect.jpg"
            },
            {
                text: "Volver a la estación más cercana",
                effect: -5,
                resultDescription: "Regresas a la estación sin obtener nada, pero evitas problemas mayores.",
                image: "spaceport.jpg"
            }
        ]
    },
    {
        title: "Encuentro con una Nave Desconocida",
        description: "Una nave de origen desconocido se aproxima. ¿Cómo reaccionas?",
        options: [
            {
                text: "Intentar comunicarte pacíficamente",
                effect: 15,
                resultDescription: "Logras establecer contacto y la nave comparte información valiosa sobre rutas seguras.",
                image: "space_traveler.jpg"
            },
            {
                text: "Prepararte para un posible enfrentamiento",
                effect: -15,
                resultDescription: "La nave resulta ser hostil y te ataca. Sufres daños durante el breve combate.",
                image: "space_pirates.jpg"
            },
            {
                text: "Evadir la nave sin hacer contacto",
                effect: 0,
                resultDescription: "Logras evitar la nave sin incidentes. No ganas ni pierdes nada.",
                image: "pirates_detect.jpg"
            },
            {
                text: "Atacar primero para evitar sorpresas",
                effect: -20,
                resultDescription: "La nave se defiende y tú sufres daños graves en el enfrentamiento.",
                image: "ship_collision.jpg"
            }
        ]
    },
    {
        title: "Agujeros Negros y Distorsión Espacial",
        description: "Te acercas a un agujero negro que distorsiona tus sistemas. ¿Qué harás?",
        options: [
            {
                text: "Acelerar para escapar",
                effect: -25,
                resultDescription: "Tu nave sufre severos daños por la aceleración, pero logras escapar.",
                image: "black_hole.jpg"
            },
            {
                text: "Intentar estabilizar los sistemas y esperar",
                effect: -10,
                resultDescription: "Los sistemas de la nave se estabilizan parcialmente, pero se pierden recursos.",
                image: "cosmic_ray.jpg"
            },
            {
                text: "Usar un campo de distorsión para atravesarlo",
                effect: -30,
                resultDescription: "El campo de distorsión provoca daños graves, pero logras cruzar.",
                image: "space_storm.jpg"
            },
            {
                text: "Evitar el agujero negro y retroceder",
                effect: 0,
                resultDescription: "Te alejas del agujero negro sin sufrir daños.",
                image: "astronaut.jpg"
            }
        ]
    },
    {
        title: "El Campo de Asteroides",
        description: "Un campo de asteroides bloquea tu camino. ¿Cómo lo abordas?",
        options: [
            {
                text: "Acelerar y atravesarlo rápidamente",
                effect: -20,
                resultDescription: "Varios asteroides golpean la nave, dañando los sistemas de navegación.",
                image: "asteroid_field.jpg"
            },
            {
                text: "Desviar la nave hacia una ruta más segura",
                effect: 10,
                resultDescription: "Evitas el campo de asteroides y encuentras una ruta segura con recursos adicionales.",
                image: "space_traveler.jpg"
            },
            {
                text: "Buscar una estación cercana para reparaciones",
                effect: 0,
                resultDescription: "Te diriges a la estación más cercana y no obtienes nada más.",
                image: "spaceport.jpg"
            },
            {
                text: "Detenerte y esperar a que pase el campo",
                effect: -5,
                resultDescription: "Pierdes tiempo esperando, pero no sufres daños.",
                image: "space_storm.jpg"
            }
        ]
    },
    {
        title: "El Planeta Misterioso",
        description: "Encuentras un planeta desconocido. ¿Te arriesgas a explorar?",
        options: [
            {
                text: "Atterizar y explorar el planeta",
                effect: 20,
                resultDescription: "Encuentras recursos valiosos que mejoran tus sistemas y reservas.",
                image: "vegetation_planet.jpg"
            },
            {
                text: "Desviar la nave para evitar peligros",
                effect: 0,
                resultDescription: "Decides no arriesgarte y sigues tu camino sin ningún cambio.",
                image: "planet_resources.jpg"
            },
            {
                text: "Establecer contacto con posibles habitantes",
                effect: -10,
                resultDescription: "La comunicación resulta en un malentendido y debes huir rápidamente.",
                image: "hostile_planet.jpg"
            },
            {
                text: "Sobrevolar el planeta sin aterrizar",
                effect: -5,
                resultDescription: "Aunque no aterrizas, algunos fragmentos dañan tus sistemas.",
                image: "asteroid_exploration.jpg"
            }
        ]
    },
    {
        title: "Piratas Espaciales en el Camino",
        description: "Un grupo de piratas espaciales te intercepta. ¿Cómo actúas?",
        options: [
            {
                text: "Enfrentarlos en combate directo",
                effect: -30,
                resultDescription: "Sufres graves daños durante la batalla, perdiendo recursos y tiempo.",
                image: "space_pirates.jpg"
            },
            {
                text: "Tratar de negociar un trato",
                effect: -5,
                resultDescription: "Te permiten seguir, pero debes entregar parte de tus recursos.",
                image: "drone_attack.jpg"
            },
            {
                text: "Intentar evadirlos con maniobras rápidas",
                effect: 10,
                resultDescription: "Logras evadirlos sin problemas y continúas con tus recursos intactos.",
                image: "pirates_detect.jpg"
            },
            {
                text: "Lanzar una señal de emergencia",
                effect: -15,
                resultDescription: "Aunque consigues algo de ayuda, los piratas te roban parte de tus recursos.",
                image: "space_storm.jpg"
            }
        ]
    },
    {
        title: "Campo de Radiación y Daños Graves",
        description: "Te adentras en un campo de radiación. ¿Qué haces?",
        options: [
            {
                text: "Acelerar para atravesarlo rápidamente",
                effect: -20,
                resultDescription: "La radiación provoca fallos en los sistemas de energía y los escudos.",
                image: "radiation_field.jpg"
            },
            {
                text: "Intentar neutralizar los efectos con el sistema de defensa",
                effect: -15,
                resultDescription: "La defensa no es suficiente y sufres daños adicionales.",
                image: "cosmic_ray.jpg"
            },
            {
                text: "Desactivar sistemas no esenciales para reducir el impacto",
                effect: 0,
                resultDescription: "Logras minimizar el daño, pero pierdes tiempo en la reparación de sistemas.",
                image: "asteroid_field.jpg"
            },
            {
                text: "Salir del campo de radiación cuanto antes",
                effect: 10,
                resultDescription: "Logras escapar del campo sin sufrir daños graves.",
                image: "space_traveler.jpg"
            }
        ]
    },
    {
        title: "El Tesoro Oculto en el Espacio",
        description: "Recibes una señal misteriosa de un posible tesoro en el espacio. ¿Te arriesgas a buscarlo?",
        options: [
            {
                text: "Seguir la señal hacia el punto de coordenadas",
                effect: 25,
                resultDescription: "Encuentras un tesoro oculto que mejora tus sistemas con recursos raros.",
                image: "hidden_treasure.jpg"
            },
            {
                text: "Ignorar la señal y continuar con la ruta",
                effect: 0,
                resultDescription: "Decides no arriesgarte y sigues tu viaje sin novedades.",
                image: "astronaut.jpg"
            },
            {
                text: "Mandar un dron a investigar antes de acercarse",
                effect: -5,
                resultDescription: "El dron encuentra una trampa que daña parte de tu equipo.",
                image: "space_storm.jpg"
            },
            {
                text: "Sospechar de la señal y evitarla",
                effect: -10,
                resultDescription: "Tu desconfianza es acertada, pero no logras descubrir nada.",
                image: "spaceport.jpg"
            }
        ]
    }
];
