# 03 · Reglas del mundo y simulación

## Objetivo

Que el mundo parezca vivo sin exigir una simulación costosa. Los sistemas deben ser claros, combinables y ligeros para funcionar en navegador y celular.

## Tiempo

El mundo tiene un reloj jugable. Propuesta inicial:
- Un día completo de juego dura entre 18 y 24 minutos reales.
- Mañana, mediodía, tarde, atardecer y noche son fases visuales.
- Las misiones pueden fijar una hora narrativa para mantener continuidad.
- Dormir o descansar adelanta el tiempo solo en lugares seguros.

El reloj del juego no pretende reproducir exactamente la duración astronómica de los días históricos. El calendario de campaña avanza por capítulos, no por miles de días simulados.

## Día y noche

**Mañana:** luz suave, sombras largas, aves activas y comienzo de tareas.  
**Mediodía:** luz fuerte, sombras cortas, calor visual, búsqueda de sombra.  
**Tarde:** tonos cálidos, actividad de chacras y regreso de vehículos.  
**Atardecer:** cielo anaranjado, sonidos de aves y cierre de actividades.  
**Noche:** visibilidad reducida, luces en casas y galpones, grillos y cielo estrellado.

La noche no debe ser un castigo ni obligar al jugador a detenerse. Algunas zonas simplemente tienen menos actividad.

## Clima

El clima se inspira en un ambiente semiárido de meseta: baja precipitación, aire seco, amplitud térmica y episodios de viento. Las condiciones exactas de cada escena histórica se consideran recreación, salvo que exista registro meteorológico.

Estados iniciales:
- **Despejado:** estado base.
- **Viento:** mueve arbustos, polvo y ropa; puede afectar precisión de tareas livianas.
- **Nublado:** cambia luz y ambiente.
- **Llovizna/lluvia:** poco frecuente en el ciclo normal; modifica sonidos y suelo.
- **Frío:** vapor de respiración estilizado, abrigo visual y rutinas distintas.
- **Calor:** búsqueda de sombra, pausas y luz intensa.

No crear tormentas dramáticas cada pocos minutos. El clima debe dar identidad y variedad, no frustrar.

## Estaciones

- **Primavera:** brotes, floración y mayor actividad de aves.
- **Verano:** calor, luz intensa, tareas temprano y al atardecer.
- **Otoño:** tonos de hojas, cosechas según cultivo y viento.
- **Invierno:** frío, días más cortos y vegetación de aspecto más austero.

La disponibilidad de cultivos y fauna por estación debe validarse para cada especie y época.

## Viento y polvo

El viento es parte del carácter visual del lugar. Afecta:
- partículas de polvo en caminos;
- movimiento de pastos y ramas;
- sonido de chapas y árboles;
- dirección de humo de fogones ficticios;
- navegación de objetos livianos.

No debe lanzar al jugador ni bloquear misiones de forma arbitraria.

## Agua

El agua es un elemento central del mundo:
- río con corriente visual;
- canales con dirección de flujo;
- acequias y compuertas de utilería;
- riego por sectores;
- charcos temporales tras lluvias.

El minijuego de distribución de agua usa reglas simples y seguras: mover una compuerta ficticia, observar qué parcela recibe agua y evitar desperdicio. No se presentan instrucciones operativas de infraestructura real.

## Suelo y movimiento

Superficies:
- tierra compacta: velocidad normal;
- arena suelta: caminar más lento;
- camino de chacra: desplazamiento rápido;
- pasto y borde ribereño: movimiento moderado;
- barro: solo aparece con lluvia y reduce velocidad.

El jugador no puede atravesar bardas, alambrados, agua profunda, galpones cerrados o propiedades privadas.

## Colisiones y objetos

- Los objetos pequeños pueden recogerse si están resaltados por proximidad.
- Los objetos grandes requieren una misión o herramienta.
- No se pueden cargar infinitos elementos.
- Las herramientas vuelven a su sitio o quedan guardadas en inventario.
- Los objetos importantes no desaparecen por accidente.

## Rutinas y vida

Los personajes y animales alternan estados de actividad, descanso, desplazamiento y reacción. No hace falta IA compleja: rutinas por puntos y horarios con variaciones aleatorias controladas.

## Reglas de seguridad y respeto

- No se premia entrar a propiedades privadas ni acercarse a instalaciones peligrosas.
- No se puede manipular maquinaria real de bombeo.
- No se fomenta alimentar o perseguir fauna silvestre.
- No se usa el río como zona de riesgo espectacular.
- No se convierten animales en objetos coleccionables.
- No se incluyen armas ni violencia como mecánica central.

## Persistencia

El juego guarda localmente:
- capítulo y misión;
- zonas descubiertas;
- objetos del cuaderno;
- transformaciones ya realizadas;
- opciones de control y sonido.

Si el navegador borra sus datos, el progreso puede perderse. En la primera versión se debe advertir y ofrecer exportar/importar una partida mediante archivo local si resulta viable.

## Reglas de consistencia

1. Una transformación del mundo debe tener una causa jugable.
2. El clima no debe contradecir una escena histórica documentada.
3. Los NPC no pueden aparecer en dos lugares al mismo tiempo.
4. Los vehículos respetan caminos y límites.
5. Una misión no debe depender de un objeto que ya desapareció.
6. El jugador siempre puede recuperar el hilo de la misión.
7. Las acciones opcionales nunca bloquean el avance principal.
