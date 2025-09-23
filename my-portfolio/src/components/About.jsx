const About = () => (
  <div id="about" className="min-h-screen bg-base-100 py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-base-content mb-4">About Me</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-primary">Professional Profile</h3>
              <p className="text-base-content/80 leading-relaxed">
                Computer Science graduate and current Master of Professional
                Engineering student at USYD with hands-on experience in
                full-stack web and mobile development. Skilled in React,
                Node.js, Python, and cloud platforms with a track record of
                delivering tested, scalable solutions. Recognized for leading
                teams and applying agile practices to deliver impactful
                projects.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-secondary">Current Focus</h3>
              <p className="text-base-content/80 leading-relaxed">
                Currently pursuing advanced studies in Agile Software
                Development, Advanced Systems Design, and Security Engineering.
                Passionate about applying cutting-edge technologies to solve
                real-world problems and create meaningful user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4">Education</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg">
                    Master of Professional Engineering (Software)
                  </h4>
                  <p className="text-primary font-semibold">
                    University of Sydney
                  </p>
                  <p className="text-sm text-base-content/60">
                    August 2025 - Present
                  </p>
                  <div className="mt-2">
                    <div className="badge badge-outline">
                      Agile Software Development
                    </div>
                    <div className="badge badge-outline ml-2">
                      Advanced Systems Design
                    </div>
                    <div className="badge badge-outline ml-2">
                      Security Engineering
                    </div>
                  </div>
                  <p className="text-sm mt-2 text-success">
                    USYD International Student Award (~$26,000 merit-based
                    scholarship)
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-bold text-lg">
                    Bachelor of Science (Computer Science)
                  </h4>
                  <p className="text-secondary font-semibold">
                    University of New South Wales
                  </p>
                  <p className="text-sm text-base-content/60">
                    Graduated June 2025
                  </p>
                  <p className="text-sm mt-2 text-success">
                    UNSW International Student Award (~$13,000 merit-based
                    scholarship)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200">
            <div className="stat">
              <div className="stat-title">Experience</div>
              <div className="stat-value text-primary">2+ Years</div>
              <div className="stat-desc">Full-stack Development</div>
            </div>

            <div className="stat">
              <div className="stat-title">Projects</div>
              <div className="stat-value text-secondary">5+</div>
              <div className="stat-desc">Major Applications</div>
            </div>

            <div className="stat">
              <div className="stat-title">Code Coverage</div>
              <div className="stat-value text-accent">85%+</div>
              <div className="stat-desc">Tested Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
