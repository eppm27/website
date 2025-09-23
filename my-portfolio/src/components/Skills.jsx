import { useMemo, useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import TechBadge from "./TechBadge.jsx";

const buildCategories = () => ({
  frontend: {
    title: "Frontend & UI/UX",
    description: "Modern frameworks and tools for building responsive, accessible user interfaces.",
    skills: [
      { 
        name: "React.js & Next.js", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.563-.465-.468-.92-.99-1.36-1.563z"/>
          </svg>
        )
      },
      { 
        name: "JavaScript & TypeScript", 
        icon: <img src="/svg/js.svg" alt="JavaScript" className="w-8 h-8" />
      },
      { 
        name: "Tailwind CSS", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#06B6D4">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        )
      },
      { 
        name: "Figma (Design & Prototyping)", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 400 600" fill="none">
            <path d="M0 500C0 444.772 44.772 400 100 400H200V500C200 555.228 155.228 600 100 600C44.772 600 0 555.228 0 500Z" fill="#24CB71"/>
            <path d="M200 0V200H300C355.228 200 400 155.228 400 100C400 44.772 355.228 0 300 0H200Z" fill="#FF7237"/>
            <path d="M299.167 400C354.395 400 399.167 355.228 399.167 300C399.167 244.772 354.395 200 299.167 200C243.939 200 199.167 244.772 199.167 300C199.167 355.228 243.939 400 299.167 400Z" fill="#00B6FF"/>
            <path d="M0 100C0 155.228 44.772 200 100 200H200V0H100C44.772 0 0 44.772 0 100Z" fill="#FF3737"/>
            <path d="M0 300C0 355.228 44.772 400 100 400H200V200H100C44.772 200 0 244.772 0 300Z" fill="#874FFF"/>
          </svg>
        )
      },
      { 
        name: "Responsive Design", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          </svg>
        )
      },
    ],
  },
  backend: {
    title: "Backend & APIs",
    description: "Server-side technologies for building scalable, robust applications and APIs.",
    skills: [
      { 
        name: "Node.js & Express", 
        icon: <img src="/svg/node-js.svg" alt="Node.js" className="w-8 h-8" />
      },
      { 
        name: "Python (FastAPI, Django, Flask)", 
        icon: <img src="/svg/python.svg" alt="Python" className="w-8 h-8" />
      },
      { 
        name: "RESTful API Development", 
        icon: <img src="/svg/restful-api.svg" alt="RESTful API" className="w-8 h-8" />
      },
      { 
        name: "API Integration & Testing", 
        icon: (
          <img src="/svg/api.svg" alt="API" className="w-8 h-8" />
        )
      },
      { 
        name: "Microservices Architecture", 
        icon: <img src="/svg/architecture.svg" alt="Architecture" className="w-8 h-8" />
      },
    ],
  },
  databases: {
    title: "Databases & Data",
    description: "Relational and NoSQL databases with modern ORMs for efficient data management.",
    skills: [
      { 
        name: "PostgreSQL & MySQL", 
        icon: (
          <img src="/svg/postgresql.svg" alt="PostgreSQL" className="w-8 h-8" />
        )
      },
      { 
        name: "MongoDB (NoSQL)", 
        icon: (
          <img src="/svg/mongodb.svg" alt="MongoDB" className="w-8 h-8" />
        )
      },
      { 
        name: "Django ORM & SQLAlchemy", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#092E20">
            <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.143zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z"/>
          </svg>
        )
      },
      { 
        name: "Database Design & Optimization", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
          </svg>
        )
      },
      { 
        name: "Real-time Data Processing", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
          </svg>
        )
      },
    ],
  },
  devops: {
    title: "DevOps & Tools",
    description: "Development tools and practices for efficient deployment and collaboration.",
    skills: [
      { 
        name: "Docker & Containerization", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2496ED">
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983 0 1.97-.084 2.942-.25 1.5-.25 2.97-.735 4.333-1.427a10.247 10.247 0 003.185-2.808c1.033-1.374 1.74-2.96 2.1-4.7h.185c1.336 0 2.161-.57 2.418-.866.16-.18.292-.38.39-.592l.093-.228z"/>
          </svg>
        )
      },
      { 
        name: "Git/GitHub & CI/CD Actions", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F05032">
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
          </svg>
        )
      },
      { 
        name: "Agile Development (Jira)", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 832 832" fill="none">
            <path d="M605.569 208H405.773C405.773 231.92 415.276 254.861 432.19 271.775C449.104 288.689 472.044 298.191 495.964 298.191H532.769V333.724C532.801 383.491 573.136 423.826 622.902 423.858V225.333C622.902 215.76 615.142 208 605.569 208Z" fill="#2684FF"/>
            <path d="M506.711 307.551H306.916C306.947 357.317 347.283 397.653 397.049 397.684H433.853V433.333C433.917 483.099 474.278 523.409 524.044 523.409V324.884C524.044 315.312 516.284 307.551 506.711 307.551Z" fill="url(#paint0_linear_jira)"/>
            <path d="M407.796 407.044H208C208 456.856 248.38 497.236 298.191 497.236H335.111V532.769C335.143 582.49 375.408 622.807 425.129 622.902V424.378C425.129 414.805 417.368 407.044 407.796 407.044Z" fill="url(#paint1_linear_jira)"/>
            <defs>
              <linearGradient id="paint0_linear_jira" x1="475.686" y1="265.651" x2="391.212" y2="353.796" gradientUnits="userSpaceOnUse">
                <stop offset="0.18" stopColor="#0052CC"/>
                <stop offset="1" stopColor="#2684FF"/>
              </linearGradient>
              <linearGradient id="paint1_linear_jira" x1="6531.71" y1="6065.6" x2="2902.55" y2="9657.2" gradientUnits="userSpaceOnUse">
                <stop offset="0.18" stopColor="#0052CC"/>
                <stop offset="1" stopColor="#2684FF"/>
              </linearGradient>
            </defs>
          </svg>
        )
      },
      { 
        name: "API Testing (Postman)", 
        icon: (
          <img src="/svg/postman.svg" alt="Postman" className="w-8 h-8" />
        )
      },
      { 
        name: "Cloud Services & Deployment", 
        icon: (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
        )
      },
    ],
  },
});

const recentHighlights = [
  "Building full-stack FinTech apps with real-time crypto data integration",
  "Developing AI-powered features using OpenAI API for enhanced UX",
  "Creating scalable microservices architecture with Docker and CI/CD",
  "Implementing data-driven analytics for financial and biomedical applications",
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const categoryConfig = useMemo(buildCategories, []);
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="section-eyebrow">Skills</span>
          <h2 className={`section-title mt-4 text-3xl sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}>
            Full-Stack Engineering & Data-Driven Solutions
          </h2>
          <p className={`mx-auto mt-6 max-w-3xl text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            Comprehensive tech stack spanning frontend development, backend APIs, databases, and DevOps tools
            for building scalable applications in FinTech, AI, and biomedical domains.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {Object.entries(categoryConfig).map(([key, category]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedCategory(key)}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === key
                  ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/30"
                  : isDark
                  ? "bg-slate-900/60 text-slate-300 border border-slate-700/60"
                  : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className={`card-base ${isDark ? "card-layer-dark" : "card-layer-light"} p-6 sm:p-8`}>
            <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
              {categoryConfig[selectedCategory].title}
            </h3>
            <p className={`mt-3 text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {categoryConfig[selectedCategory].description}
            </p>

            <div className="mt-8 grid gap-4">
              {categoryConfig[selectedCategory].skills.map((skill) => (
                <div key={skill.name} className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/70">
                  <div className="flex-shrink-0 mr-4 text-blue-400">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-100 text-sm">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className={`card-base ${isDark ? "card-layer-dark" : "card-layer-light"} p-6 sm:p-8`}>
              <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                Collaboration highlights
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Design systems", "API architecture", "Inclusive teamwork", "Continuous learning", "Agile methodologies"].map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </div>

            <div className={`card-base ${isDark ? "card-layer-dark" : "card-layer-light"} p-6 sm:p-8`}>
              <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                Recent focus
              </h3>
              <ul className={`mt-4 space-y-3 text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {recentHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#2563eb]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
