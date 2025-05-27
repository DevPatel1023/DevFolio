import React from 'react'

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
      </div>
    </footer>
  )
}

export default Footer
