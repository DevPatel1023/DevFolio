const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-card/10 border-b border-gray-600 px-3 pt-4 flex justify-between h-15 ">
      {/* left side */}
      <div>
        <h1 className="font-bold text-lg hover:text-zinc-300 transition-colors duration-300 hover:underline hover:cursor-pointer">
          DevFolio
        </h1>
      </div>
      {/*  Right side */}
      <div className="flex justify-between gap-3 right-2 text-zinc-500 ease-in-out">
        <p className="hover:text-zinc-100 transition-colors duration-300 hover:cursor-pointer">
          <span className="hidden md:inline-block">proof-of-work</span>
          <span className="md:hidden
           inline-block">POW</span>
        </p>
        <p className="hover:text-zinc-100 transition-colors duration-300 hover:cursor-pointer">
          Resume
        </p>
      </div>
    </div>
  );
};

export default NavBar;
