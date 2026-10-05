type Q = { id: number; topic: string; level: string; q: string; a: string };
type State = {
  ratings: Record<number, number>;
  saved: number[];
  notes: Record<number, string>;
};
const bank: Q[] = [
  {
    id: 1,
    topic: "HTML",
    level: "Foundation",
    q: "Why is semantic HTML valuable?",
    a: "It gives content meaningful structure, improving accessibility, maintainability and search understanding. Choose elements by purpose, not appearance.",
  },
  {
    id: 2,
    topic: "CSS",
    level: "Foundation",
    q: "How does the CSS box model work?",
    a: "Content is surrounded by padding, border and margin. With border-box, declared width includes padding and border.",
  },
  {
    id: 3,
    topic: "JavaScript",
    level: "Intermediate",
    q: "Explain event delegation.",
    a: "Attach one listener to a common ancestor and inspect the bubbling event target. It works well for dynamic lists and reduces listeners.",
  },
  {
    id: 4,
    topic: "JavaScript",
    level: "Advanced",
    q: "What happens in the JavaScript event loop?",
    a: "Synchronous work runs on the call stack. Queued microtasks run before the next task, then rendering may occur.",
  },
  {
    id: 5,
    topic: "React",
    level: "Intermediate",
    q: "When should state be lifted up?",
    a: "Lift shared state to the closest common owner when multiple components must read or update one source of truth.",
  },
  {
    id: 6,
    topic: "React",
    level: "Advanced",
    q: "How do you prevent unnecessary renders?",
    a: "Keep state local, pass stable values, avoid premature derived state and measure before applying memoization.",
  },
  {
    id: 7,
    topic: "Behavioural",
    level: "Foundation",
    q: "Tell me about a difficult bug you solved.",
    a: "Use a concise situation, task, action and result. Emphasize investigation, trade-offs, verification and what changed afterward.",
  },
  {
    id: 8,
    topic: "CSS",
    level: "Intermediate",
    q: "Grid or Flexbox: how do you choose?",
    a: "Flexbox is strongest for one-dimensional flow. Grid controls rows and columns together. They often work best in combination.",
  },
];
bank.push(
  {
    id: 9,
    topic: "HTML",
    level: "Intermediate",
    q: "What makes a form accessible?",
    a: "Use explicit labels, logical tab order, appropriate input types, clear instructions and errors connected with aria-describedby.",
  },
  {
    id: 10,
    topic: "HTML",
    level: "Advanced",
    q: "When should ARIA be used?",
    a: "Prefer native elements first. Use ARIA only to fill a semantic gap, and verify its keyboard and screen-reader interaction.",
  },
  {
    id: 11,
    topic: "CSS",
    level: "Intermediate",
    q: "Explain CSS specificity.",
    a: "Specificity compares selector weights after origin and importance. Keep selectors shallow and let source order resolve equal weights.",
  },
  {
    id: 12,
    topic: "CSS",
    level: "Advanced",
    q: "How do container queries differ from media queries?",
    a: "Media queries respond to the viewport; container queries respond to an ancestor size, making components context-aware.",
  },
  {
    id: 13,
    topic: "JavaScript",
    level: "Foundation",
    q: "What is a closure?",
    a: "A function keeps access to the lexical variables where it was created, even after the outer function has returned.",
  },
  {
    id: 14,
    topic: "JavaScript",
    level: "Intermediate",
    q: "Promise.all or Promise.allSettled?",
    a: "Promise.all fails fast when every result is required. allSettled reports every outcome when partial success is useful.",
  },
  {
    id: 15,
    topic: "JavaScript",
    level: "Advanced",
    q: "How would you diagnose a memory leak?",
    a: "Reproduce growth, compare heap snapshots, inspect retained objects and event listeners, then verify memory stabilizes after the fix.",
  },
  {
    id: 16,
    topic: "TypeScript",
    level: "Foundation",
    q: "Why use a union type?",
    a: "A union limits a value to explicit alternatives, prevents impossible states and enables safe narrowing.",
  },
  {
    id: 17,
    topic: "TypeScript",
    level: "Intermediate",
    q: "type versus interface?",
    a: "Both model shapes. Interfaces merge and are strong for object contracts; type aliases compose unions, primitives and mapped types.",
  },
  {
    id: 18,
    topic: "TypeScript",
    level: "Advanced",
    q: "What is a discriminated union?",
    a: "Each variant shares a literal key. Checking that key narrows the value to the correct fields exhaustively.",
  },
  {
    id: 19,
    topic: "React",
    level: "Foundation",
    q: "What does state represent?",
    a: "State is data owned by a component that may change over time and must trigger a render when updated.",
  },
  {
    id: 20,
    topic: "React",
    level: "Intermediate",
    q: "How do effect dependencies work?",
    a: "List every reactive value read by the effect. Missing values cause stale behaviour; unstable values can trigger excess runs.",
  },
  {
    id: 21,
    topic: "React",
    level: "Advanced",
    q: "When is context the wrong tool?",
    a: "Avoid context for frequently changing broad state when it forces unrelated consumers to render. Prefer local state or targeted stores.",
  },
  {
    id: 22,
    topic: "Web Performance",
    level: "Intermediate",
    q: "How would you improve Largest Contentful Paint?",
    a: "Find the LCP element, prioritize its resource, reduce server delay, avoid render blocking and do not lazy-load it.",
  },
  {
    id: 23,
    topic: "Web Performance",
    level: "Advanced",
    q: "What causes layout shift?",
    a: "Late unsized media, font swaps, injected content and animations that change layout. Reserve space and animate transforms.",
  },
  {
    id: 24,
    topic: "Testing",
    level: "Foundation",
    q: "What should a UI test assert?",
    a: "Assert user-visible behaviour and meaningful outcomes rather than private implementation details.",
  },
  {
    id: 25,
    topic: "Testing",
    level: "Intermediate",
    q: "Unit, integration or end-to-end?",
    a: "Use unit tests for focused logic, integration for collaborating parts and a small E2E layer for critical journeys.",
  },
  {
    id: 26,
    topic: "Behavioural",
    level: "Intermediate",
    q: "How do you handle unclear requirements?",
    a: "State assumptions, ask outcome-focused questions, propose a small verifiable slice and document the agreed decision.",
  },
  {
    id: 27,
    topic: "Behavioural",
    level: "Intermediate",
    q: "Describe a technical disagreement.",
    a: "Explain the shared goal, evidence gathered, trade-offs discussed, decision made and how you supported the team afterward.",
  },
  {
    id: 28,
    topic: "Behavioural",
    level: "Advanced",
    q: "How do you balance speed and quality?",
    a: "Identify risk, protect critical checks, reduce scope before standards, release observably and schedule explicit follow-up work.",
  },
);
const get = <T extends HTMLElement>(id: string) =>
  document.getElementById(id) as T;
let state: State = JSON.parse(
    localStorage.getItem("imh-state") || '{"ratings":{},"saved":[],"notes":{}}',
  ),
  active = bank[0].id,
  seconds = 900,
  tick: number | undefined;
const questions = get("questions"),
  search = get<HTMLInputElement>("search"),
  topic = get<HTMLSelectElement>("topic"),
  level = get<HTMLSelectElement>("level");
[...new Set(bank.map((q) => q.topic))].forEach((t) =>
  topic.add(new Option(t, t)),
);
function save() {
  localStorage.setItem("imh-state", JSON.stringify(state));
}
function filtered() {
  const term = search.value.toLowerCase();
  return bank.filter(
    (q) =>
      (topic.value === "all" || q.topic === topic.value) &&
      (level.value === "all" || q.level === level.value) &&
      (q.q + " " + q.topic).toLowerCase().includes(term),
  );
}
function stats() {
  get("answered").textContent = String(Object.keys(state.ratings).length);
  get("strong").textContent = String(
    Object.values(state.ratings).filter((v) => v === 3).length,
  );
  get("saved").textContent = String(state.saved.length);
}
function renderList() {
  const qs = filtered();
  questions.innerHTML =
    qs
      .map(
        (q) =>
          `<button class="qbtn ${q.id === active ? "active" : ""}" data-id="${q.id}"><small>${q.topic} · ${q.level}${state.saved.includes(q.id) ? " · ★" : ""}</small>${q.q}</button>`,
      )
      .join("") || "<p>No matching questions.</p>";
  document.querySelectorAll<HTMLButtonElement>(".qbtn").forEach(
    (b) =>
      (b.onclick = () => {
        active = Number(b.dataset.id);
        render();
      }),
  );
}
function render() {
  const q = bank.find((x) => x.id === active) || bank[0];
  get("qtopic").textContent = q.topic;
  get("qlevel").textContent = q.level;
  get("question").textContent = q.q;
  get("answer").textContent = q.a;
  get("answer").style.display = "none";
  get<HTMLButtonElement>("reveal").textContent = "Reveal answer";
  get<HTMLTextAreaElement>("notes").value = state.notes[q.id] || "";
  get<HTMLButtonElement>("bookmark").textContent = state.saved.includes(q.id)
    ? "★ Saved"
    : "☆ Save";
  document
    .querySelectorAll<HTMLButtonElement>("[data-rate]")
    .forEach((b) =>
      b.classList.toggle(
        "active",
        Number(b.dataset.rate) === state.ratings[q.id],
      ),
    );
  renderList();
  stats();
}
search.oninput = renderList;
topic.onchange = renderList;
level.onchange = renderList;
get<HTMLButtonElement>("random").onclick = () => {
  const list = filtered();
  active = list[Math.floor(Math.random() * list.length)]?.id || bank[0].id;
  render();
};
get<HTMLButtonElement>("reveal").onclick = (e) => {
  const box = get("answer"),
    show = box.style.display !== "block";
  box.style.display = show ? "block" : "none";
  (e.currentTarget as HTMLButtonElement).textContent = show
    ? "Hide answer"
    : "Reveal answer";
};
get<HTMLButtonElement>("bookmark").onclick = () => {
  state.saved = state.saved.includes(active)
    ? state.saved.filter((x) => x !== active)
    : [...state.saved, active];
  save();
  render();
};
document.querySelectorAll<HTMLButtonElement>("[data-rate]").forEach(
  (b) =>
    (b.onclick = () => {
      state.ratings[active] = Number(b.dataset.rate);
      save();
      render();
    }),
);
get<HTMLTextAreaElement>("notes").oninput = (e) => {
  state.notes[active] = (e.target as HTMLTextAreaElement).value;
  save();
};
function clock() {
  get("timer").textContent =
    `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  if (seconds > 0) seconds--;
  else if (tick) clearInterval(tick);
}
get<HTMLButtonElement>("timerBtn").onclick = (e) => {
  if (tick) {
    clearInterval(tick);
    tick = undefined;
    (e.currentTarget as HTMLButtonElement).textContent = "Start";
  } else {
    tick = window.setInterval(clock, 1000);
    (e.currentTarget as HTMLButtonElement).textContent = "Pause";
  }
};
render();
clock();
