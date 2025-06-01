import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Badge from "./ui/Badge";
import CardContent from "./ui/cardcontext";
import Card from "./ui/card";
import React, { useEffect } from "react";
import Image from "./ui/Image";
import Link from "./ui/Link";
import Button from "./ui/button";

const Section: React.FC = () => {
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-400 to-cyan-400' },
    { name: 'TypeScript', level: 90, color: 'from-blue-500 to-purple-500' },
    { name: 'Next.js', level: 88, color: 'from-gray-400 to-gray-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-emerald-400' },
    { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-blue-400' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-400' },
    { name: 'Python', level: 80, color: 'from-blue-400 to-yellow-400' },
    { name: 'SQL', level: 75, color: 'from-pink-400 to-purple-400' },
    { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-600' },
    { name: 'PostgreSQL', level: 78, color: 'from-blue-500 to-indigo-500' },
    { name: 'Java', level: 85, color: 'from-orange-400 to-yellow-400' },
    { name: 'c++', level: 80, color: 'from-blue-400 to-cyan-500' },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment processing, inventory management, and analytics dashboard.',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
      image: 'https://via.placeholder.com/600x400',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'AI Task Manager',
      description: 'Intelligent task management app with AI-powered suggestions and real-time collaboration features.',
      tags: ['React', 'OpenAI', 'Firebase', 'TypeScript'],
      image: 'https://via.placeholder.com/600x400',
      gradient: 'from-cyan-500 to-green-500',
    },
    {
      title: 'Crypto Trading Dashboard',
      description: 'Real-time cryptocurrency trading platform with advanced charts and portfolio management.',
      tags: ['Next.js', 'WebSocket', 'Chart.js', 'Node.js'],
      image: 'https://via.placeholder.com/600x400',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const contactLinks = [
    {
      icon: Github,
      text: 'github.com/DevPatel1023',
      href: 'https://github.com/DevPatel1023',
    },
    {
      icon: Linkedin,
      text: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/patel-dev-02513b26a/',
    },
    {
      icon: Mail,
      text: 'work.devpatel19046@example.com',
      href: 'mailto:work.devpatel19046@example.com',
    },
  ];

  // IntersectionObserver to handle animate-on-scroll
  useEffect(() => {
    console.log('Initializing IntersectionObserver');
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section ${entry.target.id} is visible`);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6 z-10">
            <Badge
              text="✨ Available for hire"
              className="px-4 py-2 text-sm bg-gray-800/50 border border-gray-600 text-cyan-300"
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm <span className="text-cyan-400">Dev</span>
              <br />
              <span className="text-gray-100">Full Stack</span>
              <br />
              <span className="text-cyan-400">Developer</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
              I craft exceptional digital experiences with cutting-edge technologies and creative problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 border-gray-600 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </Button>
            </div>
              <div className="flex gap-4 pt-6">
              {[
                { icon: Github, href: "https://github.com/DevPatel1023", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/patel-dev-02513b26a/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:work.devpatel19046@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </Button>
                </a>
              ))}
            </div>
          </div>
          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] z-10 flex-shrink-0">
            <img
              src="/myphoto.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 scroll-mt-16 bg-gray-800/50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl">
            <img
              src="/About2.jpg"
              alt="About me"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6">
            <Badge text="About Me" className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-600 text-cyan-300" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Passionate about <span className="text-cyan-400">innovation & technologies</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over a year of experience in building modern, high-performance web applications. I specialize in React, Next.js, Node.js, and other cutting-edge web technologies.
              </p>
              <p>
                I joined CVM University as a Computer Science student, where my interest in coding quickly turned into a deep passion. I started writing programs and experimenting with different technologies, always driven by curiosity and the desire to build something meaningful.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 scroll-mt-16 animate-on-scroll">
        <div className="container mx-auto px-4 space-y-12 text-center max-w-4xl">
          <div className="space-y-4">
            <Badge text="My Skills" className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-600 text-cyan-300" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Technical <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I work with cutting-edge technologies to build scalable, performant applications.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border border-gray-600 bg-gray-800/50 hover:border-cyan-500/50 hover:bg-gray-700/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/25 group"
              style={{ animationDelay: `${index * 50}ms`, transitionDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-sm text-gray-400">{skill.level}%</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 scroll-mt-16 bg-gray-800/50 animate-on-scroll">
        <div className="container mx-auto px-4 space-y-12 text-center max-w-4xl">
          <div className="space-y-4">
            <Badge text="Featured Projects" className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-600 text-cyan-300" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              My Recent <span className="text-cyan-400">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some projects that showcase my skills and passion for development.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col border border-gray-600 bg-gray-800/50 hover:border-cyan-500/50 hover:bg-gray-700/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/25 group"
              style={{ animationDelay: `${index * 100}ms`, transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      text={tag}
                      className="bg-gray-700 text-white border border-gray-600"
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Visit project</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link  href="https://github.com/DevPatel1023?tab=repositories" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 scroll-mt-16 bg-gray-800/50 animate-on-scroll">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <Badge text="Get In Touch" className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-600 text-cyan-300" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let's Create <span className="text-cyan-400">Together</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to bring your ideas to life? I'm available for freelance projects and full-time opportunities.
            </p>
            <div className="space-y-4 mt-8">
              {contactLinks.map(({ icon: Icon, text, href }, index) => (
                <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-600 hover:border-cyan-500/50 hover:bg-gray-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25 group">
                    <Icon className="h-5 w-5 text-cyan-400" />
                    <span className="text-white">{text}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Card className="border border-gray-600 bg-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-12 w-full rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-2 text-white placeholder:text-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-2 text-white placeholder:text-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-2 text-white placeholder:text-gray-500"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
          </main>
  );
};

export default Section;
