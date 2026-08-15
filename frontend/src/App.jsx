import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ServicesPageDetails from "./pages/ServicesPageDetails";
import { AnimatePresence } from 'framer-motion';
import PageAnimation from "./components/PageAnimations";
import PageNotFound from "./pages/PageNotFound";

function App() {

  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageAnimation><HomePage /></PageAnimation>} />
          <Route path="/services" element={<PageAnimation><ServicesPage /></PageAnimation>} />
          <Route path="/about-us" element={<PageAnimation><AboutPage /></PageAnimation>} />
          <Route path="/contact" element={<PageAnimation><ContactPage /></PageAnimation>} />
          <Route path="/services/:title" element={<PageAnimation><ServicesPageDetails /></PageAnimation>} />
          <Route path="/*" element={<PageAnimation><PageNotFound /></PageAnimation>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
