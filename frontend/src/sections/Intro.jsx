import introImg from '../assets/intro-img-1.webp';
import introImg2 from '../assets/intro-img-2.webp';

export default function Intro() {
  return (
    <section className="my-[50px] lg:my-[100px]">
      <div className="wrapper sm:text-center">
        <div className='max-w-2xl mx-auto mb-[50px] sm:text-center'>
          <h2 className="mb-6">
            Nail Design Beauty Salon
          </h2>
          <p className="mb-4">
            Welcome to our little corner of beauty and elegance in the heart of Niš. Treat yourself to exceptional care at our salon, where your beauty is our priority. We pay special attention to every detail of your manicure, ensuring your nails look flawless. Visit us and experience the difference that professional care can make.
          </p>
        </div>
        <div className='flex flex-col md:flex-row relative'>
          <div className="aspect-video md:flex-1 border-offWhite mr-[50px] md:-mr-[50px] border-r-[16px] border-b-[16px] xl:border-r-[24px] xl:border-b-[24px] md:mb-[74px]">
            <img src={introImg || null} alt="" className="w-full" />
          </div>
          <div className="aspect-video md:flex-1 border-offWhite ml-[50px] -mt-[74px] md:-ml-[50px] md:mt-[74px] border-l-[16px] border-t-[16px] xl:border-l-[24px] xl:border-t-[24px] -z-[1]">
            <img src={introImg2 || null} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}