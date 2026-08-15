import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Services from "../sections/Services";
import Cta from "../sections/Cta";
import Counter from "../sections/Benefits";

export default function HomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design Ljiljana Medović | Home</title>
        <meta
          name="description"
          content="Welcome to our little corner of beauty and elegance in the heart of Niš. Treat yourself to exceptional care at our salon, where your beauty is our priority."
        />
        <meta
          property="og:title"
          content="Nail Design Ljiljana Medović | Home"
        />
        <meta
          property="og:description"
          content="Welcome to our little corner of beauty and elegance in the heart of Niš. Treat yourself to exceptional care at our salon, where your beauty is our priority."
        />
        <meta
          property="og:url"
          content="https://naildesign-ljiljanamedovic.com/pocetna"
        />
      </Helmet>
      <main>
        <Hero />
        <Intro />
        <Counter />
        <Services />
      </main>
      <Cta />
    </HelmetProvider>
  );
}
