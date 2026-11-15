# 06 · Arte, interfaz y tecnología

## Dirección de arte

**Estilo:** aventura 3D estilizada, colorida y cálida; proporciones ligeramente caricaturescas, materiales simples y siluetas expresivas. No psicodélico, no hiperrealista y no infantilizado en exceso.

La referencia es la claridad visual y la curiosidad de los juegos de aventura de finales de los 90, reinterpretadas con una identidad original del valle neuquino.

### Paleta conceptual
- ocres, arena y arcilla para el monte;
- verdes apagados y vivos para chacras y vegetación;
- azules profundos y turquesas moderados para el río;
- tonos cálidos para madera, tierra y construcciones;
- cielos amplios con cambios claros entre horas del día.

### Formas
- bardas y mesetas con siluetas reconocibles;
- árboles y arbustos con formas distintas;
- canales visibles desde cierta altura;
- caminos que guían sin flechas invasivas;
- edificios de lectura simple y proporciones coherentes.

### Personajes
- cabezas y manos algo expresivas;
- ropa con pliegues mínimos;
- animaciones cortas y legibles;
- variedad de cuerpos, edades y vestimenta;
- rostros amables, sin caricaturizar identidades culturales.

## Cámara y movimiento

Propuesta inicial: cámara en tercera persona con ángulo elevado, distancia ajustable y seguimiento suave. El jugador ocupa una parte pequeña de la pantalla para que se vea el paisaje.

Movimiento:
- caminar;
- correr;
- girar;
- interactuar;
- recoger/dejar;
- saltar solo si el diseño de terreno lo necesita.

Evitar plataformas difíciles: el corazón es explorar y colaborar, no hacer saltos de precisión.

## Interfaz

La pantalla principal debe mostrar casi todo el mundo:
- objetivo actual, en una frase;
- señal de interacción cuando corresponde;
- icono pequeño de cuaderno;
- pausa y sonido;
- controles táctiles grandes y configurables en celular.

El mapa, inventario y archivo se abren como paneles breves, no quedan siempre encima del paisaje.

## Sonido y música

- ambiente por zona y hora;
- música original con instrumentos y motivos propios, sin imitar melodías protegidas;
- efectos suaves y claros;
- volumen independiente para música, ambiente y efectos;
- subtítulos para diálogos importantes.

## Accesibilidad

- controles táctiles grandes;
- opción de teclado;
- posibilidad de reducir movimiento de cámara;
- contraste suficiente;
- textos legibles;
- no depender solo del color para indicar objetivos;
- subtítulos;
- opción de pausar en cualquier momento;
- dificultad amable y sin límite de tiempo en misiones principales.

## Tecnología: decisión por etapas

La plataforma objetivo es navegador. No elegir un motor por moda. Primero se hará una prueba técnica pequeña para comparar:
- rendimiento en computadora modesta;
- rendimiento en celular;
- peso de descarga;
- facilidad de publicar en GitHub Pages;
- controles táctiles;
- cámara y colisiones;
- guardado local;
- facilidad de mantenimiento por una persona principiante.

Se puede evaluar un motor 3D web ligero o un motor 2D/2.5D. La elección final se toma después de probar una escena mínima en el equipo real del proyecto.

## Arquitectura conceptual

Separar los datos del contenido:
- escenas y zonas;
- personajes y rutinas;
- misiones;
- objetos e inventario;
- tiempo y clima;
- eventos de transformación;
- fuentes históricas;
- opciones y guardado.

Así se pueden añadir misiones sin reescribir todo el juego.

## Rendimiento

- geometría sencilla;
- texturas optimizadas;
- sombras limitadas;
- efectos de partículas moderados;
- distancia de dibujo controlada;
- carga por zonas;
- audio comprimido;
- no cargar el mapa completo en celulares modestos.

## Prototipo vertical

Una escena de prueba debe demostrar:
1. movimiento cómodo;
2. cámara que no marea;
3. interacción con tres objetos;
4. diálogo corto con un personaje;
5. una misión completa;
6. cambio visible del entorno;
7. controles táctiles y teclado;
8. guardado local.

Solo cuando esto funcione se producen más zonas y personajes.
