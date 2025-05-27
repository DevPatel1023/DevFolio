import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Badge from "./ui/Badge";

const Section = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6 z-10">
            <Badge
              text="✨ Available for hire"
              className="px-4 py-2 text-sm bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300"
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Dev
              </span>
              <br />
              <span className="text-gray-100">Full Stack</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
              I craft exceptional digital experiences with cutting-edge
              technologies and creative problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-1 border-0 flex items-center justify-center">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all hover:-translate-y-1 rounded-lg">
                View My Work
              </button>
            </div>
            <div className="flex gap-4 pt-6">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:contact@example.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-12 h-12 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </button>
                </a>
              ))}
            </div>
          </div>

          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] z-10 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-700 shadow-2xl shadow-cyan-500/20 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 mix-blend-overlay z-10"></div>

              {/* Your photo - shown by default */}
              <img
                src="/myphoto.jpg"
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out delay-75 group-hover:opacity-0 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 transition-all duration-700 ease-in-out delay-100 group-hover:opacity-100 group-hover:scale-100 bg-gradient-to-br from-gray-900/90 to-black/90">
                <div className="text-8xl animate-bounce">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
    </main>
  );
};

export default Section;
