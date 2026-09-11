import { MotionItem, Reveal, Stagger } from "./MotionPrimitives";
import { Annotation, SectionLabel, Sticker, TechTag } from "./ScrapbookBits";

const projects = [
  {
    number: "01",
    short: "cell annotation",
    title: "Interactive Cell Annotation Platform",
    caption: "annotation tools for whole-slide imagery",
    image: "/projects/cell-annotation.png",
    actions: [{ label: "GitHub", href: "https://github.com/eppm27/CellAnnotation" }],
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
    actions: [{ label: "GitHub", href: "https://github.com/eppm27/cryptochat" }],
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
  {
    number: "04",
    short: "connection analyzer",
    title: "Instagram Connection Analyzer",
    caption: "local analysis for Instagram export files",
    image: "/projects/WhoUnfollowed.png",
    actions: [
      { label: "Live", href: "https://connection-analyzer.vercel.app/" },
      { label: "GitHub", href: "https://github.com/eppm27/WhoUnfollowed" },
    ],
    tags: ["JavaScript", "Web Workers", "File API", "CSV", "Testing"],
    notes: [
      ["privacy", "local processing"],
      ["parser", "Instagram JSON"],
      ["results", "filters + CSV"],
      ["ui", "accessible tabs"],
    ],
    sticker: "LOCAL FIRST ✦",
    layout: "analyzer",
  },
  {
    number: "05",
    short: "ats game",
    title: "Can You Pass the ATS?",
    caption: "resume scoring game for early-career candidates",
    visual: "ats",
    actions: [
      { label: "Live", href: "https://ats-game-xi.vercel.app/" },
      { label: "GitHub", href: "https://github.com/eppm27/ats-game" },
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript"],
    notes: [
      ["scoring", "rule-based"],
      ["roles", "SWE + data"],
      ["feedback", "7 concise items"],
      ["storage", "local state"],
    ],
    sticker: "PLAYABLE ☆",
    layout: "ats",
  },
];

const AtsVisual = () => (
  <div className="ats-visual" aria-label="ATS game preview">
    <div className="ats-card ats-card-left">
      <span>resume.txt</span>
      <strong>72</strong>
      <p>score</p>
    </div>
    <div className="ats-card ats-card-right">
      <span>feedback</span>
      <p>keywords</p>
      <p>results</p>
      <p>sections</p>
    </div>
    <div className="ats-pill">try again →</div>
  </div>
);

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
      {project.visual === "ats" ? (
        <AtsVisual />
      ) : (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading={index === 0 ? "eager" : "lazy"}
        />
      )}
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

    {project.actions?.length > 0 && (
      <div className="project-actions">
        {project.actions.map((action) => (
          <a
            key={action.href}
            href={action.href}
            className="project-link focus-ring"
            target="_blank"
            rel="noopener noreferrer"
          >
            {action.label} ↗
          </a>
        ))}
      </div>
    )}
  </article>
);

const Projects = () => {
  return (
    <Reveal id="projects" className="scrap-section">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionLabel number="02">selected work ↓</SectionLabel>
        <h2 className="sr-only">Selected projects</h2>
        <p className="project-scroll-hint">scroll sideways to see more →</p>

        <Stagger className="project-rail mt-7">
          {projects.map((project, index) => (
            <MotionItem key={project.title} className="project-slide">
              <ProjectPage project={project} index={index} />
            </MotionItem>
          ))}
        </Stagger>
      </div>
    </Reveal>
  );
};

export default Projects;
