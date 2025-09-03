import Link from "next/link";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-card/10 border-b border-gray-600 px-3 pt-4 flex justify-between h-15 ">
      {/* left side */}
      <div>
        <h1 className="font-normal text-xl hover:text-zinc-300 transition-colors duration-300 hover:underline hover:cursor-pointer">
          <Link href="/">DevFolio</Link>
        </h1>
      </div>
      {/*  Right side */}
      <div className="flex justify-between gap-3 right-2 text-zinc-500 ease-in-out">
        <p className="hover:text-zinc-100 transition-colors duration-300 hover:cursor-pointer">
          <span className="hidden md:inline-block">proof-of-work</span>
          <span
            className="md:hidden
           inline-block"
          >
            <Link href="/pow">
            POW
            </Link>
          </span>
        </p>
        <p className="hover:text-zinc-100 transition-colors duration-300 hover:cursor-pointer">
          <a
            href="https://docs.google.com/document/d/1hx0PxTsSoS16UsImJnPCAu6sWmaTdo1W/edit?usp=drive_link&ouid=114180167688581962900&rtpof=true&sd=true"
            target="_blank"
          >
            Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
