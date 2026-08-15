import Services from "../sections/Services";
import BreadCrumb from "../components/BreadCrumb";
import Cta from "../sections/Cta";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ServicesPage() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design Ljiljana Medović | Services</title>
        <meta
          name="description"
          content="Explore a wide range of professional services at our salon, including manicures, permanent makeup, and much more."
        />
        <meta
          property="og:title"
          content="Nail Design Ljiljana Medović | Services"
        />
        <meta
          property="og:description"
          content="Explore a wide range of professional services at our salon, including manicures, permanent makeup, and much more."
        />
        <meta
          property="og:url"
          content="https://naildesign-ljiljanamedovic.com/usluge"
        />
      </Helmet>
      <main>
        <BreadCrumb page="Services" />
        <Services />
      </main>
      <Cta />
    </HelmetProvider>
  );
}
