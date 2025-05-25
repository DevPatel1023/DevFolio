import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-8 bg-black/80 backdrop-blur-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <a href="/" className="font-bold text-xl">
            <span className="text-cyan-400">Patel</span>
            <span className="text-purple-400">Dev</span>
          </a>
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Patel Dev. Created with love ❤️
          </p>
        </div>

        <div className="flex gap-4">
          {[
            {
              icon: Github,
              href: "https://github.com/DevPatel1023",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/devpatel1023",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:devp4143@gmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all p-2"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
