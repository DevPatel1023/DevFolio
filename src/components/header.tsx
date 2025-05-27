import { Download, Menu } from "lucide-react";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800/50 bg-black/80 backdrop-blur-md">
      <nav className="px-4 lg:px-6 py-2.5 shadow">
        <div className="container h-16 flex items-center justify-between">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-white">
            <a href="/">
              <span className="text-cyan-400">Dev</span>
              <span className="text-purple-400">folio</span>
            </a>
          </h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-cyan-400">
              Contact
            </a>
          </div>

          {/* Resume Button (Desktop Only) */}
          <a
            href="https://docs.google.com/document/d/1hx0PxTsSoS16UsImJnPCAu6sWmaTdo1W/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hidden md:flex bg-gradient-to-r from-cyan-500 hover:from-cyan-600 to-purple-600 hover:to-purple-600 text-white border-0 px-3 py-2 rounded items-center">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </button>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 px-2 py-2 rounded hover:bg-gray-900"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-2 px-4 pb-4 text-sm text-gray-300 bg-black border-t border-gray-800">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              About
            </a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Contact
            </a>
            <a
              href="https://docs.google.com/document/d/1hx0PxTsSoS16UsImJnPCAu6sWmaTdo1W/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded text-center"
            >
              <Download className="inline-block w-4 h-4 mr-2" />
              Resume
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
