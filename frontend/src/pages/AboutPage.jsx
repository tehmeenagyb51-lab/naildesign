import BreadCrumb from "../components/BreadCrumb"
import { aboutSection } from "../data"
import Cta from "../sections/Cta"
import { Helmet, HelmetProvider } from "react-helmet-async"

export default function AboutPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nail Design Ljiljana Medović | About Us</title>
        <meta
          name="description"
          content="Learn more about us and our dedication to nail care and beauty."
        />
        <meta
          property="og:title"
          content="Nail Design Ljiljana Medović | About Us"
        />
        <meta
          property="og:description"
          content="Learn more about us and our dedication to nail care and beauty."
        />
        <meta
          property="og:url"
          content="https://naildesign-ljiljanamedovic.com/o-nama"
        />
      </Helmet>
      <main>
        <BreadCrumb page="About Us" />
        <section>
          <div className="wrapper my-[50px] lg:my-[100px]">
            <div>
              {aboutSection.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:even:flex-row-reverse items-center gap-8 lg:gap-20 mb-[50px] lg:mb-[100px]"
                >
                  <div className="w-full sm:w-1/2 h-[500px]">
                    <img src={section.aboutImg} alt={section.altImg} />
                  </div>
                  <div className="sm:w-1/2">
                    <h2 className="mb-6">{section.aboutTItle}</h2>
                    <p>{section.aboutDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Cta />
    </HelmetProvider>
  );
}
