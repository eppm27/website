import { useState } from "react";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(0);
  const [viewMode, setViewMode] = useState("timeline");

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Capstone | CryptoChat Web App",
      location: "UNSW 🏫",
      period: "Feb 2025 - May 2025",
      type: "Internship",
      emoji: "💰",
      color: "from-green-400 to-blue-500",
      description:
        "Built full-powered crypto chatbot with React/Node.js/MongoDB, improving query latency to <500ms for 50+ users! 🚀",
      achievements: [
        "🤖 Integrated OpenAI + financial APIs with 4-member agile dream team",
        "✅ Achieved 85%+ tested code coverage with automated GitHub Actions",
        "⚡ Led development supporting 50+ concurrent users in real-time",
        "🐳 Implemented microservices architecture for next-level scalability",
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
        { label: "Query Latency", value: "<500ms", icon: "⚡" },
        { label: "Code Coverage", value: "85%+", icon: "✅" },
        { label: "Concurrent Users", value: "50+", icon: "👥" },
        { label: "Team Size", value: "4 members", icon: "🤝" },
      ],
      funFact: "Our chatbot responds faster than most humans can think! 🧠",
    },
    {
      title: "Technology Insights Program Participant",
      company: "KPMG Australia",
      location: "Australia 🌏",
      period: "April 2024",
      type: "Program",
      emoji: "🏢",
      color: "from-purple-400 to-blue-500",
      description:
        "Delivered a prototype sustainability solution during an epic design-thinking challenge! 🌱",
      achievements: [
        "☁️ Applied cloud, AI, and cybersecurity magic to simulate enterprise solutions",
        "🗣️ Leveled up communication skills through workshops and executive feedback",
        "🤝 Collaborated with amazing cross-functional teams on sustainability innovation",
        "🎤 Presented to senior consultants and wowed them with technical approach",
      ],
      technologies: [
        "Cloud Computing",
        "AI/ML",
        "Cybersecurity",
        "Design Thinking",
        "Stakeholder Management",
      ],
      highlights: [
        { label: "Prototype Success", value: "100%", icon: "✅" },
        { label: "Enterprise Sim", value: "Complete", icon: "🏢" },
        { label: "Collaboration", value: "Cross-func", icon: "🤝" },
        { label: "Presentations", value: "Executive", icon: "🎤" },
      ],
      funFact: "Helped create solutions that could save the planet! 🌍",
    },
    {
      title: "Vice President",
      company: "UTS Maths Society",
      location: "UTS 🎓",
      period: "March 2023 - December 2023",
      type: "Leadership",
      emoji: "📊",
      color: "from-yellow-400 to-red-500",
      description:
        "Led an awesome team to organize epic events and build an amazing community! 🎉",
      achievements: [
        "🎉 Organized 6+ networking events with 100+ happy attendees",
        "💰 Secured $2,000+ in sponsorships for competitions and workshops",
        "👥 Mentored 5 junior executives, boosting retention by 20%",
        "🚀 Transformed society engagement and member satisfaction",
      ],
      technologies: [
        "Leadership",
        "Event Management",
        "Fundraising",
        "Mentoring",
        "Community Building",
      ],
      highlights: [
        { label: "Events Organized", value: "6+", icon: "🎉" },
        { label: "Sponsorships", value: "$2,000+", icon: "💰" },
        { label: "Mentees", value: "5", icon: "👥" },
        { label: "Retention Boost", value: "20%", icon: "📈" },
      ],
      funFact:
        "Made math cool again and brought together an amazing community! 🧮",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-base-100 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-6xl">🚀</span>
          </div>
          <h2 className="text-5xl font-bold text-base-content mb-4">
            My Epic Journey
          </h2>
          <p className="text-xl text-base-content/70 mb-8">
            From intern to leader - here's how I've been making an impact! ⭐
          </p>
          <div className="flex justify-center gap-4">
            <div className="badge badge-primary badge-lg">Growing Professional</div>
            <div className="badge badge-secondary badge-lg">Always Learning</div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setViewMode("timeline")}
              className={`btn ${
                viewMode === "timeline"
                  ? "btn-primary"
                  : "btn-outline btn-primary"
              }`}
            >
              📅 Timeline View
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`btn ${
                viewMode === "cards"
                  ? "btn-secondary"
                  : "btn-outline btn-secondary"
              }`}
            >
              🎴 Card View
            </button>
          </div>
        </div>

        {viewMode === "timeline" ? (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-20"
                  onClick={() => setSelectedExp(index)}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-4 w-8 h-8 bg-primary rounded-full border-4 border-base-100 shadow-lg flex items-center justify-center transform hover:scale-125 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-xs">{exp.emoji}</span>
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`card bg-base-200 hover:bg-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                      selectedExp === index
                        ? "border-l-4 border-primary scale-105"
                        : "border-l-4 border-transparent"
                    }`}
                  >
                    <div className="card-body">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="card-title text-2xl text-base-content">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                          <p className="text-base-content/70">{exp.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="badge badge-primary mb-2">
                            {exp.period}
                          </div>
                          <div className="badge badge-outline">
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      <p className="text-base-content/80 mb-4">{exp.description}</p>

                      {selectedExp === index && (
                        <div className="space-y-4 animate-fadeIn">
                          <div>
                            <h4 className="text-lg font-bold text-base-content mb-2">
                              🎯 Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="text-base-content/70 text-sm"
                                >
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid md:grid-cols-4 gap-4">
                            {exp.highlights.map((highlight, hIndex) => (
                              <div
                                key={hIndex}
                                className="card bg-base-300 shadow-md"
                              >
                                <div className="card-body text-center p-3">
                                  <div className="text-2xl mb-1">
                                    {highlight.icon}
                                  </div>
                                  <div className="text-lg font-bold text-primary">
                                    {highlight.value}
                                  </div>
                                  <div className="text-xs text-base-content/70">
                                    {highlight.label}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="alert alert-warning">
                            <span className="font-bold">💡 Fun Fact:</span>
                            <span>{exp.funFact}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`card bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-primary/20`}
                onClick={() => setSelectedExp(index)}
              >
                <div className="card-body">
                  <div className="text-4xl mb-4">{exp.emoji}</div>
                  <h3 className="card-title text-xl text-base-content mb-2">{exp.title}</h3>
                  <p className="text-sm text-base-content/70 mb-4">{exp.company}</p>
                  <p className="text-sm text-base-content/80 leading-relaxed">{exp.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <div className="badge badge-primary">{exp.period}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Experience;
