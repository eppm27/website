const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Capstone | CryptoChat Web App",
      location: "UNSW",
      period: "Feb 2025 - May 2025",
      type: "Internship",
      description:
        "Built full-powered crypto chatbot with React/Node.js/MongoDB, improving query latency to <500ms for 50+ users",
      achievements: [
        "Integrated OpenAI + financial APIs, engineered Dockerized backend with 4-member agile team",
        "Contributed 85%+ tested code coverage and automated workflows with GitHub Actions",
        "Led development of real-time features supporting 50+ concurrent users",
        "Implemented microservices architecture for improved scalability",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "OpenAI API",
        "Docker",
        "GitHub Actions",
        "Agile/Scrum",
      ],
      highlights: [
        "Reduced query latency to <500ms",
        "85%+ code coverage",
        "50+ concurrent users supported",
        "4-member agile team leadership",
      ],
    },
    {
      title: "Technology Insights Program Participant",
      company: "KPMG Australia",
      location: "Australia",
      period: "April 2024 - April 2024",
      type: "Program",
      description:
        "Delivered a prototype sustainability solution during a design-thinking challenge to consultants and mentors",
      achievements: [
        "Applied cloud, AI, and cybersecurity concepts to simulate enterprise consulting solutions",
        "Strengthened communication and stakeholder engagement through workshops and executive feedback",
        "Collaborated with cross-functional teams to develop innovative sustainability solutions",
        "Presented to senior consultants and received positive feedback on technical approach",
      ],
      technologies: [
        "Cloud Computing",
        "AI/ML",
        "Cybersecurity",
        "Design Thinking",
        "Stakeholder Management",
      ],
      highlights: [
        "Prototype delivered successfully",
        "Enterprise consulting simulation",
        "Cross-functional collaboration",
        "Executive presentation experience",
      ],
    },
  ];

  const extracurriculars = [
    {
      title: "Vice President",
      organization: "UTS Maths Society",
      period: "March 2023 - December 2023",
      achievements: [
        "Organized 6+ academic-industry networking events with 100+ attendees",
        "Secured $2,000+ in sponsorships to fund competitions and workshops",
        "Mentored 5 junior executives, improving member retention by 20%",
      ],
      impact: "Leadership & Community Building",
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Internship":
        return "badge-primary";
      case "Program":
        return "badge-secondary";
      default:
        return "badge-outline";
    }
  };

  return (
    <section id="experience" className="min-h-screen bg-base-200 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            My journey in software development, from internships to leadership
            roles, demonstrating growth in technical skills and professional
            impact
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v10a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2"
              />
            </svg>
            Work Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="card-body">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="card-title text-xl text-primary">
                        {exp.title}
                      </h4>
                      <p className="text-lg font-semibold text-base-content">
                        {exp.company}
                      </p>
                      <p className="text-base-content/60">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <div
                        className={`badge ${getTypeColor(
                          exp.type
                        )} badge-lg mb-2`}
                      >
                        {exp.type}
                      </div>
                      <p className="text-sm font-medium text-base-content/80">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-base-content/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold text-base-content mb-3 flex items-center gap-2">
                        <span className="text-primary">🎯</span>
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm text-base-content/70 flex items-start gap-2"
                          >
                            <span className="text-primary text-xs mt-1 flex-shrink-0">
                              ▶
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-base-content mb-3 flex items-center gap-2">
                        <span className="text-secondary">📈</span>
                        Impact Highlights
                      </h5>
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, hlIndex) => (
                          <div
                            key={hlIndex}
                            className="badge badge-outline badge-sm"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="card-actions justify-start">
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="badge badge-ghost badge-sm"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Leadership & Extracurricular
          </h3>

          {extracurriculars.map((activity, index) => (
            <div
              key={index}
              className="card bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20"
            >
              <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="card-title text-secondary">
                      {activity.title}
                    </h4>
                    <p className="font-semibold text-base-content">
                      {activity.organization}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-base-content/80">
                      {activity.period}
                    </p>
                    <div className="badge badge-secondary badge-outline badge-sm mt-1">
                      {activity.impact}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {activity.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="text-sm text-base-content/70 flex items-start gap-2"
                    >
                      <span className="text-secondary text-xs mt-1">▶</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-lg bg-base-100 w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Professional Roles</div>
            <div className="stat-value text-primary">3</div>
            <div className="stat-desc">Internships & Leadership positions</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Team Leadership</div>
            <div className="stat-value text-secondary">100+</div>
            <div className="stat-desc">People impacted through events</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Funding Secured</div>
            <div className="stat-value text-accent">$2K+</div>
            <div className="stat-desc">For community initiatives</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
