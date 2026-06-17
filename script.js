const projects = [
  {
    name: "netrealpulse-ai",
    type: "AI network dashboard",
    description:
      "Real-time network congestion prediction dashboard that helps operators and first responders understand connectivity risks.",
    role: "Built the React dashboard flow, deployed with AWS Amplify, and connected Bedrock-generated recommendations to plain-English alerts.",
    tags: ["AWS Amplify", "Bedrock", "Claude", "Next.js"],
    filters: ["ai", "fullstack"],
    link: "https://github.com/JayEsquivelSavage/netrealpulse-ai",
    tone: "tone-ai",
  },
  {
    name: "rehab-exercise-monitor",
    type: "Computer vision rehab tool",
    description:
      "MediaPipe and OpenCV application that tracks rehab exercises, calculates joint angles, counts reps, and gives form feedback.",
    role: "Focused on translating pose-estimation output into understandable feedback for users practicing movement patterns.",
    tags: ["Python", "MediaPipe", "OpenCV", "Health"],
    filters: ["ai", "health"],
    link: "https://github.com/JayEsquivelSavage/rehab-exercise-monitor",
    tone: "tone-health",
  },
  {
    name: "notes4jay",
    type: "Private local AI notes app",
    description:
      "macOS menu bar app for recording, transcribing, and summarizing meetings locally with whisper.cpp and Ollama.",
    role: "Designed around privacy-first local processing so meeting notes can stay on-device instead of relying on a remote service.",
    tags: ["Electron", "whisper.cpp", "Ollama", "Privacy"],
    filters: ["ai", "fullstack"],
    link: "https://github.com/JayEsquivelSavage/notes4jay",
    tone: "tone-product",
  },
  {
    name: "SkillDuel",
    type: "SkillDuel learning platform",
    description:
      "AI-generated short-form learning platform with personalized lesson paths, video lessons, quizzes, peer challenges, XP, and streaks.",
    role: "Helped shape a fast-moving hackathon product with structured lessons, challenge flow, and full-stack UI delivery.",
    tags: ["Next.js", "LangGraph", "Gemini", "Veo"],
    filters: ["ai", "fullstack"],
    link: "https://github.com/Nsujatno/hack-ai-2026",
    tone: "tone-ai",
  },
  {
    name: "kanban-sync",
    type: "Datacenter workflow validation",
    description:
      "AI-powered Kanban workflow assistant that validates natural-language maintenance tasks against datacenter manuals using a dual-RAG pipeline.",
    role: "Built toward a practical operations workflow where AI output has to be checked against source material before action.",
    tags: ["FastAPI", "Supabase", "RAG", "OpenAI"],
    filters: ["ai", "fullstack"],
    link: "https://github.com/Nsujatno/kanban-sync",
    tone: "tone-workflow",
  },
  {
    name: "SafeSpeak",
    type: "Safety documentation app",
    description:
      "Confidential app concept for documenting harmful interactions, analyzing text patterns, and connecting users with support resources.",
    role: "Served as full-stack lead on a team of three, assisting with model work and building a polished, supportive interface.",
    tags: ["Node.js", "Express", "MongoDB", "Toxic BERT"],
    filters: ["ai", "fullstack", "mobile"],
    link: "https://github.com/Nsujatno/safespeak",
    tone: "tone-product",
  },
  {
    name: "flexforce",
    type: "AI sports recovery app",
    description:
      "Mobile recovery, diet, and injury-prevention app that personalizes plans around sport type and workout intensity.",
    role: "Worked on a team of five as the primary frontend lead and integrated AI-assisted personalization into the recovery flow.",
    tags: ["Expo", "React Native", "TypeScript", "Health"],
    filters: ["ai", "health", "mobile"],
    link: "",
    tone: "tone-health",
  },
  {
    name: "Suverity",
    type: "Hackathon product build",
    description:
      "Hackathon application built with a frontend product interface and team-driven delivery around the Axxess challenge.",
    role: "Practiced fast product scoping, interface delivery, and team collaboration under competition constraints.",
    tags: ["React", "Hackathon", "Product", "Team Build"],
    filters: ["fullstack"],
    link: "https://github.com/Nsujatno/Axxess-app",
    tone: "tone-workflow",
  },
];

const grid = document.querySelector("#project-grid");
const buttons = document.querySelectorAll(".filter-button");

function initials(name) {
  return name
    .split(/[-\s]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => filter === "all" || project.filters.includes(filter));

  grid.innerHTML = visible
    .map(
      (project) => `
        <article class="project-card" data-filters="${project.filters.join(" ")}">
          <header>
            <div class="project-visual ${project.tone}" aria-hidden="true">${initials(project.name)}</div>
            <p class="section-kicker">${project.type}</p>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p class="project-role">${project.role}</p>
            <ul class="project-tags">
              ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
          </header>
          <footer>
            ${
              project.link
                ? `<a class="project-link" href="${project.link}">View repository</a>`
                : `<span class="project-link is-muted">Local project</span>`
            }
          </footer>
        </article>
      `,
    )
    .join("");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    renderProjects(button.dataset.filter);
  });
});

buttons.forEach((button) => {
  button.setAttribute("aria-pressed", button.classList.contains("is-active") ? "true" : "false");
});

renderProjects();
