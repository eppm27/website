const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "eppmon27@gmail.com",
      link: "mailto:eppmon27@gmail.com",
      description: "Feel free to reach out for opportunities or collaborations",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "0422095774",
      link: "tel:0422095774",
      description: "Available for calls during business hours",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://linkedin.com/in/your-profile",
      description: "Connect with me professionally",
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "GitHub Portfolio",
      link: "https://github.com/your-username",
      description: "Check out my code repositories",
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-base-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and
            interesting projects. Let's connect and discuss how we can work
            together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.link}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-base-300 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base-content group-hover:text-primary transition-colors">
                          {contact.title}
                        </h4>
                        <p className="text-primary font-medium">
                          {contact.value}
                        </p>
                        <p className="text-sm text-base-content/60">
                          {contact.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <div className="card-body">
                <h3 className="card-title text-primary mb-4">Current Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-base-content">
                      Available for new opportunities
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-base-content">
                      Currently studying at USYD
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-base-content">
                      Open to full-time & internship roles
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-secondary mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="input input-bordered focus:input-primary"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="input input-bordered focus:input-primary"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Subject</span>
                  </label>
                  <select className="select select-bordered focus:select-primary">
                    <option disabled selected>
                      Choose a topic
                    </option>
                    <option>Job Opportunity</option>
                    <option>Collaboration</option>
                    <option>Freelance Project</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered focus:textarea-primary h-32"
                    placeholder="Tell me about your project, opportunity, or how I can help..."
                    required
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary btn-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl">
            <div className="card-body">
              <h3 className="card-title justify-center text-2xl mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-primary-content/90 mb-6 max-w-2xl mx-auto">
                Whether you're looking for a full-stack developer, need help
                with a specific project, or want to discuss potential
                collaborations, I'd love to hear from you.
              </p>
              <div className="card-actions justify-center">
                <a
                  href="mailto:eppmon27@gmail.com"
                  className="btn btn-neutral btn-lg"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
