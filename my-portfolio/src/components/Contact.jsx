import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Me!",
      value: "eppmon27@gmail.com",
      link: "mailto:eppmon27@gmail.com",
      description: "Drop me a line for opportunities or collaborations!",
      bgColor: "bg-primary/10",
      iconBg: "bg-primary/20"
    },
    {
      icon: "📱",
      title: "Call Me!",
      value: "0422095774",
      link: "tel:0422095774",
      description: "Available during business hours for a chat!",
      bgColor: "bg-secondary/10",
      iconBg: "bg-secondary/20"
    },
    {
      icon: "💼",
      title: "Connect on LinkedIn!",
      value: "Professional Network",
      link: "https://linkedin.com/in/your-profile",
      description: "Let's connect professionally and build our network!",
      bgColor: "bg-accent/10",
      iconBg: "bg-accent/20"
    },
    {
      icon: "💻",
      title: "Check My Code!",
      value: "GitHub Portfolio",
      link: "https://github.com/your-username",
      description: "Explore my repositories and coding adventures!",
      bgColor: "bg-info/10",
      iconBg: "bg-info/20"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setMessageSent(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen bg-base-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-6xl">🌟</span>
          </div>
          <h2 className="text-5xl font-bold text-base-content mb-6">
            Let's Connect!
          </h2>
          <p className="text-xl text-base-content/70 mb-8 max-w-3xl mx-auto">
            Ready to create something amazing together? Whether you're looking for a developer, 
            want to collaborate, or just want to chat about tech, I'd love to hear from you! 💬
          </p>
          <div className="flex justify-center gap-4">
            <div className="badge badge-primary badge-lg">Available for Opportunities</div>
            <div className="badge badge-secondary badge-lg">Quick Response Time</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-base-content mb-6 flex items-center gap-3">
                <span className="text-2xl">📞</span>
                Get In Touch
              </h3>
              <p className="text-base-content/70 mb-8">
                Choose your preferred way to reach out. I'm active on all these platforms!
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className={`card ${contact.bgColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="card-body p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${contact.iconBg} rounded-full flex items-center justify-center text-2xl`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-base-content mb-1">
                          {contact.title}
                        </h4>
                        <p className="font-semibold text-base-content/80 mb-2">
                          {contact.value}
                        </p>
                        <p className="text-sm text-base-content/60">
                          {contact.description}
                        </p>
                      </div>
                      <div className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                        →
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Current Status */}
            <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <div className="card-body">
                <h3 className="card-title text-primary mb-4 flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  Current Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-base-content">Available for new opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-base-content">Currently studying at USYD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-base-content">Open to full-time & internship roles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-secondary mb-6 flex items-center gap-2">
                <span className="text-xl">💌</span>
                Send a Message
              </h3>
              
              {messageSent ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 animate-bounce">🎉</div>
                  <h4 className="text-2xl font-bold text-success mb-4">Message Sent!</h4>
                  <p className="text-base-content/70 mb-6">
                    Thanks for reaching out! I'll get back to you within 24 hours. ✨
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setMessageSent(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium flex items-center gap-2">
                          <span>👋</span> Your Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="What should I call you?"
                        className="input input-bordered focus:input-primary"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium flex items-center gap-2">
                          <span>📧</span> Email Address
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="input input-bordered focus:input-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium flex items-center gap-2">
                        <span>📝</span> Subject
                      </span>
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="select select-bordered focus:select-primary"
                      required
                    >
                      <option disabled value="">Choose a topic</option>
                      <option value="job">Job Opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="freelance">Freelance Project</option>
                      <option value="networking">Networking</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium flex items-center gap-2">
                        <span>💭</span> Your Message
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="textarea textarea-bordered focus:textarea-primary h-32"
                      placeholder="Tell me about your project, opportunity, or how I can help... 😊"
                      required
                    ></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <button 
                      type="submit" 
                      className={`btn btn-primary btn-block ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          Sending...
                        </>
                      ) : (
                        <>
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
                          🚀 Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Fun Stats Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-base-content mb-4">Why Work With Me?</h3>
            <p className="text-base-content/70">Here's what you can expect when we collaborate</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: '⚡', value: '<24hrs', label: 'Response Time', desc: 'Quick replies guaranteed' },
              { emoji: '🌍', value: '3+', label: 'Time Zones', desc: 'Flexible availability' },
              { emoji: '💬', value: '100%', label: 'Response Rate', desc: 'I read every message' },
              { emoji: '🎯', value: 'Always', label: 'Ready to Help', desc: 'Passionate about projects' }
            ].map((stat, index) => (
              <div key={index} className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="card-body text-center p-6">
                  <div className="text-4xl mb-3">{stat.emoji}</div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="font-semibold text-base-content">{stat.label}</div>
                  <div className="text-sm text-base-content/60 mt-2">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl">
            <div className="card-body py-12">
              <h3 className="card-title justify-center text-3xl mb-6">
                Ready to Work Together? 🤝
              </h3>
              <p className="text-primary-content/90 mb-8 max-w-2xl mx-auto text-lg">
                Whether you're looking for a full-stack developer, need help with a specific project, 
                or want to discuss potential collaborations, I'd love to hear from you.
              </p>
              <div className="card-actions justify-center gap-4">
                <a
                  href="mailto:eppmon27@gmail.com"
                  className="btn btn-neutral btn-lg"
                >
                  <span className="mr-2">📧</span>
                  Start a Conversation
                </a>
                <a
                  href="tel:0422095774"
                  className="btn btn-outline btn-neutral btn-lg"
                >
                  <span className="mr-2">📱</span>
                  Call Me Instead
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
