import { useState, useEffect } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section id="about" className="min-h-screen bg-base-200 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-6xl">👨‍💻</span>
          </div>
          <h2 className="text-5xl font-bold text-base-content mb-4">
            About This Developer
          </h2>
          <p className="text-xl text-base-content/70 mb-8">
            Get to know the person behind the code! 🚀
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="tabs tabs-boxed bg-base-300">
            {[
              { id: "profile", label: "👤 Profile" },
              { id: "education", label: "🎓 Education" },
              { id: "stats", label: "📊 Stats" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab tab-lg ${activeTab === tab.id ? "tab-active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          {activeTab === "profile" && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="card-body">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="card-title text-2xl text-primary mb-4">
                    Professional Profile
                  </h3>
                  <p className="text-base-content/80 leading-relaxed">
                    Computer Science graduate and current Master of Professional
                    Engineering student at USYD! I'm a full-stack wizard 🧙‍♂️
                    specializing in React, Node.js, Python, and cloud platforms.
                    Love building scalable solutions and leading awesome teams! 💪
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="card-body">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="card-title text-2xl text-secondary mb-4">
                    Current Mission
                  </h3>
                  <p className="text-base-content/80 leading-relaxed">
                    Currently diving deep into Agile Software Development,
                    Advanced Systems Design, and Security Engineering! Always
                    excited to tackle new challenges and create amazing user
                    experiences! 🌟
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6">
              <div className="card bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-lg shadow-xl border border-primary/30">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🎓</div>
                    <div>
                      <h4 className="text-2xl font-bold text-base-content mb-2">
                        Master of Professional Engineering (Software)
                      </h4>
                      <p className="text-primary font-semibold text-lg">
                        University of Sydney 🏛️
                      </p>
                      <p className="text-base-content/70 mb-4">August 2025 - Present</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Agile Software Development", "Advanced Systems Design", "Security Engineering"].map((subject) => (
                          <span key={subject} className="badge badge-primary">
                            {subject}
                          </span>
                        ))}
                      </div>
                      <div className="alert alert-success">
                        <span>🏆 USYD International Student Award (~$26,000 merit-based scholarship)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-lg shadow-xl border border-secondary/30">
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🎯</div>
                    <div>
                      <h4 className="text-2xl font-bold text-base-content mb-2">
                        Bachelor of Science (Computer Science)
                      </h4>
                      <p className="text-secondary font-semibold text-lg">
                        University of New South Wales 🏛️
                      </p>
                      <p className="text-base-content/70 mb-4">Graduated June 2025</p>
                      <div className="alert alert-success">
                        <span>🏆 UNSW International Student Award (~$13,000 merit-based scholarship)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "stats" && (
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚡",
                  value: "2+",
                  label: "Years Experience",
                  desc: "Full-stack Development",
                  bgColor: "bg-warning",
                },
                {
                  icon: "🚀",
                  value: "5+",
                  label: "Major Projects",
                  desc: "Applications Built",
                  bgColor: "bg-success",
                },
                {
                  icon: "🎯",
                  value: "85%+",
                  label: "Code Coverage",
                  desc: "Tested Solutions",
                  bgColor: "bg-secondary",
                },
              ].map((stat, index) => (
                <div key={index} className={`card ${stat.bgColor} text-base-100 shadow-xl hover:scale-105 transition-all duration-300`}>
                  <div className="card-body text-center">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm opacity-90">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
