import { Link } from 'react-router-dom';
import ctaImg from '../assets/cta-img.webp';

export default function Cta() {
  return (
    <section>
      <div className="wrapper" >
        <div className="bg-accent flex items-center flex-col md:flex-row-reverse">
          <div className="md:w-1/2 p-8 md:py-0 flex lg:px-14 flex-col gap-6 items-start">
            <h2>Book Your <br /> Appointment Today</h2>
            <p>
              Whether you’re here for a manicure or enjoying one of our other treatments, you can expect exceptional service and a personalized approach. We believe your time with us should be relaxing and enjoyable, with results that truly impress. We look forward to giving you the very best in beauty and care.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Book an Appointment
            </Link>
          </div>
          <div className='aspect-square w-full md:w-1/2 md:h-[500px]'>
            <img className='object-cover' src={ctaImg || null} />
          </div>
        </div>
      </div>
    </section>
  )
}