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
          <p className="text-sm linear-wipe text-center md:text-left">
            © {new Date().getFullYear()} Patel Dev | $ echo "Hello, world!"
          </p>
        </div>
         <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/DevPatel1023https://github.com/DevPatel1023", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/patel-dev-02513b26a/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:work.devpatel19046@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                <button className="w-12 h-12 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </button>
              </a>
            ))}
          </div>
      </div>
    </footer>
  )
}

export default Footer
