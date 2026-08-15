import Accordion from '../components/Accordion';
import { useParams } from 'react-router-dom'
import Gallery from '../components/Gallery';
import BreadCrumb from "../components/BreadCrumb";
import { services } from '../data';
import Cta from "../sections/Cta";
import { HelmetProvider, Helmet } from 'react-helmet-async';

export default function ServicesPageDetails() {

  const { title } = useParams();
  const service = services.find((service) => service.pageUrl === title);

  if (!service) {
    return <div className="text-center py-16">Service not found</div>;
  }
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
        <BreadCrumb page="Usluge" />
        <section className='my-[50px] lg:my-[100px]'>
          <div className="wrapper">
            <div className='flex flex-col items-center gap-8 sm:flex-row lg:gap-16'>
              <div className='h-[400px] lg:h-[500px] w-full sm:w-1/2'>
                <img src={service.servicesImg} alt="" />
              </div>
              <div className='sm:w-1/2'>
                <h2 className="mb-8">{service.servicesTitle}</h2>
                <p>{service.servicesDesc}</p>
              </div>
            </div>
          </div>
        </section>
        <Accordion servicesList={service.servicesList} />
        <Gallery servicesGallery={service.servicesGallery} />
      </main>
      <Cta />
    </HelmetProvider>
  )
}