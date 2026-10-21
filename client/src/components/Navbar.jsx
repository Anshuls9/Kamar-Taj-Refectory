import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-green-900/20 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">


        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center">
            <img
                src="/newlogo.svg"
                alt="Kamar-Taj logo"
                className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h1 className="font-['Dancing_Script'] text-3xl font-bold tracking-tight text-green-950">
            Kamar-Taj
            </h1>
            <p className="text-xs font-medium tracking-widest text-green-700">
              REFECTORY
            </p>
          </div>
        </a>


        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/home"
            className="font-semibold text-green-800 transition-colors hover:text-green-600"
          >
            Home
          </a>

          <a
            href="/menu"
            className="font-medium text-gray-600 transition-colors hover:text-green-700"
          >
            Today's Menu
          </a>

          <a
            href="/about"
            className="font-medium text-gray-600 transition-colors hover:text-green-700"
          >
            About
          </a>
        </div>

        <Link
            to="/login"
            className="rounded-full bg-green-800 px-6 py-3 text-white"
        >
           Login
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
