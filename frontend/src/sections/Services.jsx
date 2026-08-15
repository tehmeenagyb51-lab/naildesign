import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { services } from '../data';

export default function Services() {

  return (
    <section className="my-[50px] lg:my-[100px]">
      <div className="wrapper">
        <div className="max-w-xl mx-auto mb-[50px] sm:text-center">
          <h2 className="mb-6 sm:mb-8">
            Our Services
          </h2>
          <p>
            We believe that beauty comes from attentive care and a professional approach. Whether you’re looking for a manicure or one of our other services, we’re here to meet and exceed all your expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4 xl:gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <div className="aspect-square mb-6">
                <img src={service.servicesImg} alt="servicesImg" />
              </div>
              <h3>{service.servicesTitle}</h3>
              <p className="mt-3 mb-4 line-clamp-3">{service.servicesDesc}</p>
              <div className="inline-block">
                <Link to={`/usluge/${service.pageUrl}`} className="btn-tertiary">
                  <span>Read More</span>
                  <GoArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
