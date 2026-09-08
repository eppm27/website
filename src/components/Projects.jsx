import { MotionItem, Reveal, Stagger } from "./MotionPrimitives";
import { Annotation, SectionLabel, Sticker, TechTag } from "./ScrapbookBits";

const projects = [
  {
    number: "01",
    short: "cell annotation",
    title: "Interactive Cell Annotation Platform",
    caption: "annotation tools for whole-slide imagery",
    image: "/projects/cell-annotation.png",
    link: "https://github.com/eppm27/CellAnnotation",
    tags: ["React", "Vite", "FastAPI", "SQLite", "OpenSlide", "Docker"],
    notes: [
      ["viewer", "SVS tiles"],
      ["backend", "FastAPI + SQLite"],
      ["annotation", "masks + export"],
      ["users", "admin tools"],
    ],
    sticker: "FULL STACK ✦",
    layout: "feature",
  },
  {
    number: "02",
    short: "spend wise",
    title: "Spend Wise",
    caption: "budgeting, transactions and finance workflows",
    image: "/projects/spendwise.png",
    tags: ["React", "Spring Boot", "PostgreSQL", "Gemini"],
    notes: [
      ["money", "budgets"],
      ["data", "transactions"],
      ["AI", "Gemini"],
    ],
    sticker: "budgeting ✦",
    layout: "receipt",
  },
  {
    number: "03",
    short: "cryptochat",
    title: "CryptoChat",
    caption: "crypto chat, market data and portfolio features",
    image: "/projects/cryptochat.png",
    link: "https://github.com/eppm27/cryptochat",
    tags: ["React", "Node.js", "MongoDB", "JWT", "OpenAI", "REST APIs"],
    notes: [
      ["chat", "OpenAI"],
      ["API", "Node/Express"],
      ["data", "MongoDB"],
      ["markets", "Alpha Vantage + Twelve Data"],
    ],
    sticker: "AI TOOL ☆",
    layout: "chat",
  },
];

const ProjectPage = ({ project, index }) => (
  <article className={`project-page project-${project.layout}`}>
    <Sticker
      tone={index === 1 ? "honey" : index === 2 ? "sky" : "mint"}
      rotate={index === 1 ? "2deg" : "-2deg"}
      className="project-sticker"
    >
      {project.sticker}
    </Sticker>

    <div className="project-heading">
      <p>{project.number} / {project.short}</p>
      <h3>{project.title}</h3>
      <span>{project.caption}</span>
    </div>

    <div className="project-board">
      <div className="screenshot-tape" aria-hidden="true"></div>
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading={index === 0 ? "eager" : "lazy"}
      />
    </div>

    <div className="project-notes" aria-label={`${project.title} technical notes`}>
      {project.notes.map(([label, value]) => (
        <Annotation key={`${label}-${value}`}>
          <span>{label} →</span>
          <strong>{value}</strong>
        </Annotation>
      ))}
    </div>

    <div className="project-tags">
      {project.tags.map((tag) => (
        <TechTag key={tag}>{tag}</TechTag>
      ))}
    </div>

    {project.link && (
      <a
        href={project.link}
        className="project-link focus-ring"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
    )}
  </article>
);

const Projects = () => {
  return (
    <Reveal id="projects" className="scrap-section">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionLabel number="02">selected work ↓</SectionLabel>
        <h2 className="sr-only">Selected projects</h2>

        <Stagger className="mt-7 grid gap-8">
          {projects.map((project, index) => (
            <MotionItem key={project.title}>
              <ProjectPage project={project} index={index} />
            </MotionItem>
          ))}
        </Stagger>
      </div>
    </Reveal>
  );
};

export default Projects;
