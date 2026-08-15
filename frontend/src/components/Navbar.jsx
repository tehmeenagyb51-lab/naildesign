import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data";
import Menu from './Menu';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className={`fixed inset-x-0 bg-offWhite z-10 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}>
      <div className="wrapper py-4 flex items-center justify-between  text-black lg:py-6">
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="Nail Design Ljiljana Medović logo" />
        </Link>
        <nav>
        <div className="hidden md:flex items-center gap-6">
            {navLinks.map((navLink, index) => (
              <div key={index} className="group relative capitalize">
                <Link to={navLink.url} aria-current={location.pathname === navLink.url ? 'page' : undefined}>{navLink.name}</Link>
                {(location.pathname === navLink.url || 
                  (navLink.url === '/usluge' && location.pathname.startsWith('/usluge'))) && (
                  <div className="absolute -bottom-1 bg-black h-[1px] w-5"></div>
                )}
                <div className="absolute -bottom-1 bg-black h-[1px] w-0 group-hover:w-5 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </nav>
        <button onClick={() => setOpen(!open)} aria-label="Open menu" className="w-8 h-8 flex justify-center flex-col space-y-[7px] items-end group md:hidden">
          <div className="h-[0.1rem] w-6 bg-black group-hover:w-8 duration-500"></div>
          <div className="h-[0.1rem] w-8 bg-black group-hover:w-8 duration-500"></div>
          <div className="h-[0.1rem] w-4 bg-black group-hover:w-8 duration-500"></div>
        </button>
      </div>
    </header>
    <Menu open={open} setOpen={setOpen} />
    </>
  );
}
