import { Link } from "react-router-dom";
import { navLinks, services, contactInfo, socialLinks } from "../data";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Footer() {

  //* Current Year Method
  //* ===================
  const currentYear = new Date().getFullYear();


  //* GoTOTop Function 
  //* ================
  const GoMoveToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>
      <div className="wrapper">
        <div className="flex justify-between flex-col sm:flex-row sm:flex-wrap gap-6 py-[50px] lg:py-[100px] border-b border-gray-300">

          {/* Logo and Description Section */}
          <div className="max-w-[335px]">
            <Link className="logo" to="/" aria-label="Nail Design Ljiljana Medović Home">
              <img src="/logo.svg" alt="Nail Design Ljiljana Medović logo" />
            </Link>
            <div className="mt-4 mb-5">
              Welcome to our corner of beauty and elegance, located in the heart of Niš, where your satisfaction and care always come first.
            </div>
            <ul className="flex gap-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="group h-[50px] w-[50px] flex justify-center items-center rounded-full border border-black hover:bg-black duration-200"
                    to={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                  >
                    <link.icon className="text-xl group-hover:text-white duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links Section */}
          <nav aria-label="Brzi linkovi">
            <h2 className="mb-4 text-xl font-serif">
              Quick Links
            </h2>
            <ul className="flex flex-wrap gap-2 sm:flex-col">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link className="hover:underline"
                    to={link.url}
                    aria-label={link.name}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Section */}
          <nav aria-label="Usluge">
            <h2 className="mb-4 text-xl font-serif">
              Services
            </h2>
            <ul className="flex flex-wrap gap-2 sm:flex-col">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    className="capitalize hover:underline"
                    to={`/${service.pageUrl}`}
                    aria-label={`Pogledajte ${service.servicesTitle}`}>
                    {service.servicesTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="contact-info">
            <h2 id="contact-info" className="mb-4 text-xl font-serif">
              Contact Information
            </h2>
            <ul className="flex flex-col space-y-2">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <Link className="hover:underline"
                    to={contact.info} aria-label={`Kontaktirajte nas putem ${contact.name}`}>
                    {contact.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex items-center justify-between py-10">
          &copy; {currentYear} Nail Design Ljiljana Medović.
          {/* Developed by&nbsp; */}

          <div
            onClick={GoMoveToTop}
            className='flex items-center justify-center w-10 h-10 text-lg cursor-pointer text-pink-500 bg-pink-200 rounded-full animate-bounce hover:bg-pink-300 transition-all duration-200'>
            <FaLongArrowAltUp />
          </div>
        </div>
      </div>
    </footer>
  );
}
