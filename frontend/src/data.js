import manicureImg from "./assets/manicure-img.webp";
import permanentMakeupImg from "./assets/permanent-makeup-img.webp";
import educationsImg from "./assets/educations-img.webp";

import galleryManicure1 from "./assets/gallery-manicure-1.jpg";
import galleryManicure2 from "./assets/gallery-manicure-2.jpg";
import galleryManicure3 from "./assets/gallery-manicure-3.jpg";
import galleryManicure4 from "./assets/gallery-manicure-4.jpg";
import galleryManicure5 from "./assets/gallery-manicure-5.webp";
import galleryManicure6 from "./assets/gallery-manicure-6.jpg";
import galleryManicure7 from "./assets/gallery-manicure-7.jpg";
import galleryManicure8 from "./assets/gallery-manicure-8.jpg";
import galleryManicure9 from "./assets/gallery-manicure-9.jpg";

import galleryPermanent1 from "./assets/gallery-permanent-1.jpg";
import galleryPermanent2 from "./assets/gallery-permanent-2.jpg";
import galleryPermanent3 from "./assets/gallery-permanent-3.jpg";
import galleryPermanent4 from "./assets/gallery-permanent-4.jpg";
import galleryPermanent5 from "./assets/gallery-permanent-5.jpg";
import galleryPermanent6 from "./assets/gallery-permanent-6.jpg";
import galleryPermanent7 from "./assets/gallery-permanent-7.jpg";
import galleryPermanent8 from "./assets/gallery-permanent-8.jpg";
import galleryPermanent9 from "./assets/gallery-permanent-9.jpg";

import galleryeducation1 from "./assets/gallery-education-1.jpg";
import galleryeducation2 from "./assets/gallery-education-2.jpg";
import galleryeducation3 from "./assets/gallery-education-3.jpg";
import galleryeducation4 from "./assets/gallery-education-4.jpg";
import galleryeducation5 from "./assets/gallery-education-5.jpg";
import galleryeducation6 from "./assets/gallery-education-6.jpg";
import galleryeducation7 from "./assets/gallery-education-7.jpg";
import galleryeducation8 from "./assets/gallery-education-8.jpg";
import galleryeducation9 from "./assets/gallery-education-9.jpg";

import aboutImg1 from "./assets/about-img-1.webp";
import aboutImg2 from "./assets/about-img-2.webp";

import envelopeIcon from "./assets/envelope-icon.svg";
import mapMarkerIcon from "./assets/map-marker-icon.svg";
import phoneIcon from "./assets/phone-icon.svg";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export const navLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "About Us", url: "/about-us" },
  { name: "Contact", url: "/contact" },
];

export const services = [
  {
    pageUrl: "manicure",
    servicesTitle: "Manicure",
    servicesDesc:
      "Precise and gentle nail care that includes shaping according to your preference, filing to achieve a perfectly smooth finish, detailed cuticle care for a healthy and well-groomed appearance, and the application of high-quality polish in your chosen color. We use the best techniques and products to ensure your nails look flawless and last as long as possible. Beyond the aesthetic benefits, a manicure also helps maintain the health of your nails and the skin of your hands, providing a feeling of freshness and luxury.",
    servicesImg: manicureImg,
    servicesList: [
      {
        servicesListTitle: "Gel Nails",
        servicesListDesc:
          "This technique uses gel applied over natural nails or extensions. The gel is then cured using a UV or LED lamp. Gel nails are known for their durability, natural appearance, and beautiful shine.",
      },
      {
        servicesListTitle: "Acrylic Nails",
        servicesListDesc:
          "Acrylic is created by combining a liquid monomer with polymer powder, which is applied to the nails to create a strong, long-lasting surface. This technique allows for nail extensions and the creation of various shapes.",
      },
      {
        servicesListTitle: "French Manicure",
        servicesListDesc:
          "A classic technique known for its natural and elegant appearance. The nails are typically coated with a neutral or pink base, while the tips are painted white. This style is timeless, elegant, and versatile.",
      },
    ],
    servicesGallery: [
      galleryManicure1,
      galleryManicure2,
      galleryManicure3,
      galleryManicure4,
      galleryManicure5,
      galleryManicure6,
      galleryManicure7,
      galleryManicure8,
      galleryManicure9,
    ],
  },
  {
    pageUrl: "permanent-makeup",
    servicesTitle: "Permanent Makeup",
    servicesDesc:
      "Our permanent makeup service includes the precise application of pigment to define the eyebrows, eyelids, and lips, giving you a flawless look at all times without the need for daily makeup application. We use high-quality pigments and advanced techniques to achieve a natural and elegant appearance that lasts for months. With our permanent makeup, you can wake up ready for the day every morning, feeling confident and effortlessly beautiful.",
    servicesImg: permanentMakeupImg,
    servicesList: [
      {
        servicesListTitle: "Permanent Eyeliner",
        servicesListDesc:
          "This technique involves applying pigments around the eyes to create an eyeliner effect or enhance the appearance of the brows. Permanent eye makeup can include different styles, such as a thin eyeliner line or soft shading. The result is a long-lasting look that eliminates the need for daily makeup application.",
      },
      {
        servicesListTitle: "Permanent Lip Makeup",
        servicesListDesc:
          "This method uses pigments to create long-lasting color on the lips. It can provide a natural lip color, enhance the lip contour, or add definition and color to the lips. Permanent lip makeup can help balance the shape of the lips and add beautiful color without the need for constant lipstick application.",
      },
      {
        servicesListTitle: "Permanent Eyebrow Makeup",
        servicesListDesc:
          "Also known as microblading or shading, this technique uses fine needles to deposit pigment into the upper layer of the skin, creating the appearance of natural hair strokes or filling in sparse areas of the eyebrows. This technique provides a long-lasting and precise brow appearance that can be customized to each client's needs and preferences.",
      },
    ],
    servicesGallery: [
      galleryPermanent1,
      galleryPermanent2,
      galleryPermanent3,
      galleryPermanent4,
      galleryPermanent5,
      galleryPermanent6,
      galleryPermanent7,
      galleryPermanent8,
      galleryPermanent9,
    ],
  },
  {
    pageUrl: "training-education",
    servicesTitle: "Training & Education",
    servicesDesc:
      "Enhance your skills and knowledge with our professionally designed training programs, suitable for both beginners and experienced beauty professionals. Our courses cover the latest techniques and trends in the beauty industry, from manicure and pedicure to massage and facial care, as well as advanced permanent makeup courses and many other treatments. Our training programs are designed to provide practical knowledge and hands-on experience through interactive workshops led by experienced instructors with years of expertise. With us, you will gain not only theoretical knowledge but also practical skills that will help you build a successful career in the beauty industry.",
    servicesImg: educationsImg,
    servicesList: [
      {
        servicesListTitle: "Nail Technique Course",
        servicesListDesc:
          "This course covers various manicure and pedicure techniques, including working with gel, acrylic, and other relevant techniques for nail care and shaping. Participants will learn about the application, maintenance, and removal of these techniques, as well as safety measures and hygiene practices.",
      },
      {
        servicesListTitle: "Permanent Makeup Course",
        servicesListDesc:
          "This training covers all aspects of permanent makeup, including skin preparation, pigment selection, application techniques, and aftercare. The course provides practical exercises and guidance on maintaining quality, helping participants achieve long-lasting and professional results.",
      },
    ],
    servicesGallery: [
      galleryeducation1,
      galleryeducation2,
      galleryeducation3,
      galleryeducation4,
      galleryeducation5,
      galleryeducation6,
      galleryeducation7,
      galleryeducation8,
      galleryeducation9,
    ],
  },
];

export const counter = [
  {
    counterNumber: "1000",
    counterTitle: "Happy Clients",
    counterDesc:
      "Our satisfied clients are a testament to our dedication, expertise, and the high quality of services we provide every day.",
  },
  {
    counterNumber: "500",
    counterTitle: "Training Sessions",
    counterDesc:
      "We have organized numerous training sessions and educational programs, helping beauty professionals enhance their knowledge and skills.",
  },
  {
    counterNumber: "25",
    counterTitle: "Years of Experience",
    counterDesc:
      "With many years of experience in the beauty industry, we uphold a tradition of quality and consistency, providing exceptional services.",
  },
];

export const aboutSection = [
  {
    aboutImg: aboutImg1,
    aboutTItle: "Our Story",
    aboutDesc:
      "It all began more than 25 years ago, when Ljiljana Medović, inspired by her passion for beauty and her desire to create unique experiences for her clients, opened her first salon. Ever since, we have worked every day to provide each client with an experience that leaves them feeling pampered and satisfied. Over the years, we have become synonymous with quality and professionalism. Our salon is recognized for its special focus on nail care and beauty, including professional nail services, as well as training programs for nail designers and competitors. Through continuous improvement and by keeping up with the latest trends in the beauty industry, we strive to provide services that meet the highest standards.",
    altImg:
      "Ljiljana Medović demonstrating her style and professionalism in a posed photo.",
  },
  {
    aboutImg: aboutImg2,
    aboutTItle: "Our Vision",
    aboutDesc:
      "We aspire to be more than just a beauty salon — a place where every person feels valued, inspired, and supported in embracing their beauty and individuality. We believe that beauty comes from within, but that a carefully maintained appearance can also contribute to confidence and inner peace. That is why we are committed to continuously improving our skills, following the latest trends, and using only high-quality products. We will continue to build trust through professionalism, dedication, and a warm atmosphere where everyone feels at home.",
    altImg:
      "Close-up of hands with long, intricately designed acrylic nails resting on a certificate.",
  },
];

export const contactInfo = [
  {
    type: "Phone",
    name: "+381621162977",
    info: "tel:+381621162977",
    icon: phoneIcon,
    altIcon: "Phone icon",
  },
  {
    type: "Email",
    name: "ljiljananaildesign@gmail.com",
    info: "mailto:ljiljananaildesign@gmail.com",
    icon: envelopeIcon,
    altIcon: "Envelope icon",
  },
  {
    type: "Address",
    name: "Faisalabad, City",
    info: "https://maps.app.goo.gl/FX5No1uJ7AktXbsT6",
    icon: mapMarkerIcon,
    altIcon: "Map marker icon",
  },
];

export const socialLinks = [
  {
    url: "https://www.facebook.com/ljiljana.medovicnailharmony/?locale=sr_RS",
    icon: FaFacebookF,
    ariaLabel: "Visit Facebook page",
    alt: "Facebook icon",
  },
  {
    url: "https://www.instagram.com/ljiljanamedovic/",
    icon: FaInstagram,
    ariaLabel: "Visit Instagram page",
    alt: "Instagram icon",
  },
];
