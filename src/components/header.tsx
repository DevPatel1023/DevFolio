import { Download, Menu } from "lucide-react";

const header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800/50 bg-black/80 backdrop-blur-md ">
      <div className="container h-16 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-black">
          <a href="/">
            <span className="text-cyan-400">Dev</span>
            <span className="text-purple-400">Portfolio</span> 
          </a>
        </h2>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">projects</a>
          <a href="#contact" className="text-sm  font-medium text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
        </nav>
        <button className="hidden md:flex bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-0">
            <Download className="mr-2 h-4 w-4" />
            Resume
        </button>
        <button className="md:hidden text-gray-300 hover:text-cyan-400">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
    </header>
  );
};

export default header;
