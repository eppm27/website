import { useState, useEffect, useMemo } from "react";

const Home = () => {
  const [isOn, setIsOn] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [avatarMood, setAvatarMood] = useState("happy");

  const funTexts = useMemo(
    () => [
      "Hi! I'm Ei 👋",
      "I code things that work! 💻",
      "Full-stack magic maker ✨",
      "Coffee + Code = Life ☕",
      "Building digital dreams 🚀",
    ],
    []
  );

  const avatarMoods = useMemo(
    () => ({
      happy: "😊",
      coding: "🤓",
      excited: "🤩",
      cool: "😎",
      thinking: "🤔",
    }),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % funTexts.length);
      const moods = Object.keys(avatarMoods);
      setAvatarMood(moods[Math.floor(Math.random() * moods.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, [funTexts.length, avatarMoods]);

  return (
    <div
      id="home"
      className="min-h-screen bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Power Button */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={() => setIsOn(!isOn)}
            className={`btn btn-circle btn-lg ${
              isOn ? "btn-success" : "btn-error"
            } shadow-2xl hover:scale-110 transition-all duration-300`}
          >
            <span className="text-2xl">{isOn ? "🟢" : "🔴"}</span>
          </button>
        </div>

        {isOn && (
          <div className="animate-fadeIn">
            {/* Avatar Section */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-6xl animate-bounce shadow-2xl border-4 border-white">
                  {avatarMoods[avatarMood]}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">💻</span>
                </div>
              </div>
            </div>

            {/* Dynamic Text */}
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-base-content mb-4 animate-pulse">
                {funTexts[currentText]}
              </h1>
              <div className="text-2xl text-base-content/80 font-semibold mb-6">
                Welcome to my personal dashboard! 🎮
              </div>
            </div>

            {/* Fun Stats Dashboard */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-primary/20">
                <div className="card-body text-center p-4">
                  <div className="text-3xl mb-2">☕</div>
                  <div className="text-2xl font-bold text-base-content">999+</div>
                  <div className="text-base-content/70 text-sm">Cups of Coffee</div>
                </div>
              </div>
              <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-primary/20">
                <div className="card-body text-center p-4">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-2xl font-bold text-base-content">5+</div>
                  <div className="text-base-content/70 text-sm">Projects Launched</div>
                </div>
              </div>
              <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-primary/20">
                <div className="card-body text-center p-4">
                  <div className="text-3xl mb-2">💡</div>
                  <div className="text-2xl font-bold text-base-content">∞</div>
                  <div className="text-base-content/70 text-sm">Ideas Generated</div>
                </div>
              </div>
              <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-primary/20">
                <div className="card-body text-center p-4">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-2xl font-bold text-base-content">100%</div>
                  <div className="text-base-content/70 text-sm">Passion Level</div>
                </div>
              </div>
            </div>

            {/* Fun Navigation Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="#about" className="group">
                <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/20">
                  <div className="card-body text-center p-6">
                    <div className="text-4xl mb-3 group-hover:animate-spin">
                      🧑‍💻
                    </div>
                    <div className="font-bold text-lg text-base-content">About Me</div>
                    <div className="text-base-content/70 text-sm">Get to know me!</div>
                  </div>
                </div>
              </a>

              <a href="#skills" className="group">
                <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/20">
                  <div className="card-body text-center p-6">
                    <div className="text-4xl mb-3 group-hover:animate-pulse">
                      🛠️
                    </div>
                    <div className="font-bold text-lg text-base-content">My Arsenal</div>
                    <div className="text-base-content/70 text-sm">Tools & Tech</div>
                  </div>
                </div>
              </a>

              <a href="#projects" className="group">
                <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/20">
                  <div className="card-body text-center p-6">
                    <div className="text-4xl mb-3 group-hover:animate-bounce">
                      🎨
                    </div>
                    <div className="font-bold text-lg text-base-content">
                      My Creations
                    </div>
                    <div className="text-base-content/70 text-sm">Cool Projects</div>
                  </div>
                </div>
              </a>

              <a href="#experience" className="group">
                <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/20">
                  <div className="card-body text-center p-6">
                    <div className="text-4xl mb-3 group-hover:animate-wiggle">
                      💼
                    </div>
                    <div className="font-bold text-lg text-base-content">My Journey</div>
                    <div className="text-base-content/70 text-sm">Work & Experience</div>
                  </div>
                </div>
              </a>

              <a href="#contact" className="group">
                <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/20">
                  <div className="card-body text-center p-6">
                    <div className="text-4xl mb-3 group-hover:animate-pulse">
                      📱
                    </div>
                    <div className="font-bold text-lg text-base-content">
                      Let's Chat!
                    </div>
                    <div className="text-base-content/70 text-sm">Get in touch</div>
                  </div>
                </div>
              </a>

              <div className="card bg-base-100/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group border border-primary/20">
                <div className="card-body text-center p-6">
                  <div className="text-4xl mb-3 group-hover:animate-spin">🎲</div>
                  <div className="font-bold text-lg text-base-content">Surprise Me!</div>
                  <div className="text-base-content/70 text-sm">Random fact</div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 animate-bounce">
              <div className="text-base-content/70 text-sm mb-2">
                Scroll down to explore
              </div>
              <div className="text-2xl">⬇️</div>
            </div>
          </div>
        )}

        {!isOn && (
          <div className="text-center">
            <div className="text-6xl mb-4">😴</div>
            <div className="text-2xl font-bold mb-2 text-base-content">System is sleeping...</div>
            <div className="text-lg text-base-content/70">Click the power button to wake me up!</div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes wiggle {
          0%,
          7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%,
          100% {
            transform: rotateZ(0);
          }
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
