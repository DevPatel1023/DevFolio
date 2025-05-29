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
                {
                  icon: Github,
                  href: "https://github.com/DevPatel1023",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/patel-dev-02513b26a/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:work.devpatel19046@example.com",
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
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 mix-blend-overlay transition duration-500 ease-in-out group-hover:opacity-0 z-10"></div>

              {/* Animated image */}
              <img
                src="/myphoto.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 scroll-mt-16 bg-gray-900/50 backdrop-blur-sm">
          <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 mix-blend-overlay z-10 group-hover:from-cyan-500/40 group-hover:to-purple-500/40 transition-all duration-500"></div>
              <div className="absolute inset-0 border border-gray-700 rounded-2xl"></div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="About me" 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 ">
              <Badge text="About Me" className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300"
              />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Passionate about{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  innovation
                </span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with 1+ years of experience building cutting-edge web
                  applications. I specialize in React, Next.js, Node.js, and modern web technologies.
                </p>
                <p>
                  My journey began at 19 when I built my first website. Since then, I've collaborated with startups and
                  established companies to create intuitive, performant digital experiences that drive results.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, or
                  sharing knowledge with the developer community.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { number: "5+", label: "Projects Completed" },
                  { number: "1+", label: "Years Experience" },
                  { number: "3+", label: "Happy Clients" },
                  { number: "10+", label: "Technologies" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


    </main>
  );
};

export default Section;
