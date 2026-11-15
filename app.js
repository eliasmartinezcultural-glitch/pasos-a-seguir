const state = { trust: 0, knowledge: 0, memory: 0, completed: [], notes: [], current: "arrival" };
const scenes = {
  arrival: {
    title: "Un lugar para empezar",
    text: "El camino se abre frente a Mateo. Tiene 19 años, una valija pequeña y una libreta nueva. Ha llegado a la zona buscando trabajo. No conoce a nadie todavía, pero quiere entender cómo se vive y se trabaja en este lugar.",
    second: "A lo lejos se ve el valle. El viento levanta un poco de polvo. Mateo se detiene, mira alrededor y debe decidir por dónde empezar."
  },
  next: {
    title: "La primera jornada",
    text: "Después de dar el primer paso, Mateo comprende algo: para conocer un lugar no alcanza con mirarlo desde el camino. Hay que escuchar a quienes viven allí, aprender sus tareas y entender qué necesita la comunidad.",
    second: "Su primera jornada todavía no terminó. Antes de seguir, decide guardar lo aprendido en su libreta."
  }
};
const outcomes = {
  work: { title: "Una oportunidad para aprender", body: "Mateo se acerca a preguntar. Al principio siente vergüenza, pero descubre que escuchar y presentarse con respeto es una buena manera de empezar. Una persona del lugar le explica qué tareas se realizan en la zona y qué herramientas tendrá que aprender a usar.", stats: { trust: 1, knowledge: 1 }, note: "Mateo se animó a preguntar. Su primera lección: el trabajo también empieza conversando." },
  explore: { title: "Mirar con atención", body: "Mateo camina un poco y observa el paisaje. Se fija en el relieve, la vegetación y la presencia del agua. Entiende que el territorio no es solamente un escenario: sus características condicionan la vida y el trabajo de quienes lo habitan.", stats: { knowledge: 2 }, note: "Mateo observó el valle y anotó que conocer el territorio es el primer paso para comprenderlo." },
  write: { title: "La primera página", body: "Mateo abre la libreta. Anota lo que ve, las preguntas que tiene y las cosas que todavía no comprende. Tal vez algún día esas notas ayuden a recordar cómo se sentía llegar a un lugar nuevo.", stats: { memory: 2 }, note: "Primera página escrita: «Para conocer un lugar, primero hay que aprender a mirar y escuchar»." }
};
const $ = id => document.getElementById(id);
function renderStats() {
  $("stat-trust").textContent = state.trust;
  $("stat-knowledge").textContent = state.knowledge;
  $("stat-memory").textContent = state.memory;
  $("progress-label").textContent = state.completed.length + " / 3";
  $("progress-bar").style.width = (state.completed.length / 3 * 100) + "%";
  $("notebook-empty").hidden = state.notes.length > 0;
  $("notebook-list").innerHTML = state.notes.map(note => "<li>" + escapeHTML(note) + "</li>").join("");
}
function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function choose(key) {
  if (state.completed.length > 0) return;
  const result = outcomes[key];
  if (!result) return;
  state.completed.push(key);
  state.trust += result.stats.trust || 0;
  state.knowledge += result.stats.knowledge || 0;
  state.memory += result.stats.memory || 0;
  state.notes.push(result.note);
  $("scene-title").textContent = result.title;
  $("scene-text").textContent = result.body;
  $("scene-text-two").textContent = "Mateo guarda sus cosas. Esta decisión quedará registrada en su recorrido, pero todavía hay mucho por descubrir.";
  $("choices").hidden = true;
  $("feedback").hidden = false;
  $("feedback").textContent = "✦ " + result.note;
  $("continue-row").hidden = false;
  renderStats();
}
function continueAdventure() {
  if (state.current === "arrival") {
    state.current = "next";
    $("scene-title").textContent = scenes.next.title;
    $("scene-text").textContent = scenes.next.text;
    $("scene-text-two").textContent = scenes.next.second;
    $("feedback").hidden = true;
    $("continue-row").hidden = true;
    $("choices").hidden = false;
    $("choices").innerHTML = '<button class="choice" data-choice="listen"><span class="choice-icon">👂</span><span><strong>Escuchar a quienes conocen el lugar</strong><small>Aprender de la experiencia de sus habitantes.</small></span><b>→</b></button><button class="choice" data-choice="tools"><span class="choice-icon">🧰</span><span><strong>Conocer las herramientas de trabajo</strong><small>Descubrir para qué sirve cada herramienta.</small></span><b>→</b></button><button class="choice" data-choice="record"><span class="choice-icon">✍️</span><span><strong>Ordenar sus notas</strong><small>Separar lo que vio de lo que todavía necesita investigar.</small></span><b>→</b></button>';
    $("choices").querySelectorAll("button").forEach(button => button.addEventListener("click", () => chooseSecond(button.dataset.choice)));
    $("progress-label").textContent = "1 / 3";
    $("progress-bar").style.width = "33%";
    $("chapter-era").textContent = "Conocer para comprender";
  } else {
    $("scene-title").textContent = "Fin del primer recorrido";
    $("scene-text").textContent = "Mateo cierra su libreta. Ya dio sus primeros pasos: se acercó a la gente, observó el territorio y empezó a registrar lo que aprende. Su historia recién comienza.";
    $("scene-text-two").textContent = "Este prototipo termina aquí. Las próximas misiones se construirán a partir de documentación histórica comprobada sobre San Patricio del Chañar.";
    $("choices").hidden = true;
    $("feedback").hidden = false;
    $("feedback").textContent = "PRÓXIMAMENTE · Nuevas misiones, personajes y acontecimientos históricos documentados.";
    $("continue-row").hidden = true;
    $("chapter-era").textContent = "Próximo capítulo";
    state.completed.push("finish");
    renderStats();
  }
}
function chooseSecond(key) {
  const second = {
    listen: { body: "Mateo se queda conversando. Descubre que la memoria de un lugar vive también en las experiencias de sus habitantes. Escuchar no reemplaza los documentos, pero puede abrir caminos para investigar.", stat: "trust", note: "Mateo aprendió que escuchar a la comunidad es parte de conocer su historia." },
    tools: { body: "Mateo observa las herramientas y pregunta para qué se utiliza cada una. Comprende que detrás de cada tarea hay conocimientos, esfuerzo y organización.", stat: "knowledge", note: "Mateo comenzó a reconocer las herramientas y los saberes del trabajo." },
    record: { body: "Mateo revisa sus apuntes. Separa lo que observó de lo que alguien le contó y de las preguntas que todavía no tienen respuesta. Decide no confundir recuerdos, opiniones y hechos comprobados.", stat: "memory", note: "Mateo anotó una regla para su libreta: distinguir lo observado de lo que falta comprobar." }
  }[key];
  if (!second) return;
  state[second.stat] += 1;
  state.notes.push(second.note);
  $("scene-title").textContent = "Una lección para el camino";
  $("scene-text").textContent = second.body;
  $("scene-text-two").textContent = "El día termina y Mateo siente que ahora tiene más preguntas que al llegar. Es una buena señal: está empezando a conocer el lugar.";
  $("choices").hidden = true;
  $("feedback").hidden = false;
  $("feedback").textContent = "✦ " + second.note;
  $("continue-row").hidden = false;
  $("continue-button").textContent = "Cerrar el prólogo →";
  state.completed.push(key);
  renderStats();
}
$("choices").querySelectorAll("button").forEach(button => button.addEventListener("click", () => choose(button.dataset.choice)));
$("continue-button").addEventListener("click", continueAdventure);
renderStats();
