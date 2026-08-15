import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { contactInfo } from "../data";
import ContactForm from "../sections/ContactForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ContactPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design Ljiljana Medović | Contact</title>
        <meta
          name="description"
          content="Whether you have questions about our services or want to book your next appointment, we are here to help."
        />
        <meta
          property="og:title"
          content="Nail Design Ljiljana Medović | Contact"
        />
        <meta
          property="og:description"
          content="Whether you have questions about our services or want to book your next appointment, we are here to help."
        />
        <meta
          property="og:url"
          content="https://naildesign-ljiljanamedovic.com/kontakt"
        />
      </Helmet>
      <main>
        <BreadCrumb page="Contact Us" />
        <section className="my-[50px] lg:my-[100px]">
          <div className="wrapper">
            <div className="max-w-xl mx-auto mb-[50px] sm:text-center">
              <h2 className="mb-6">
                Get In Touch
              </h2>
              <p>
                Whether you have questions about our services, want to learn more about our salon, or would like to book your next appointment, we’re here to help.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  to={item.info}
                  className="h-[200px] flex items-center justify-center flex-col gap-2 border border-gray-300 cursor-pointer hover:bg-[#FFF1F6] duration-200">
                  <img className="w-[40px] h-[40px]" src={item.icon} alt={item.altIcon} />
                  <h3>{item.type}</h3>
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
}
