'use client';
import backgroundImage from "@/assets/background.jpg";
import { useEffect, useState, useRef } from "react";
import React from "react";
import logo from "@/assets/Arena-logo.png";
import Alogo from "@/assets/A-logo.png";
import bg from "@/assets/bg.jpg";
import img2 from "@/assets/footrimg.png"



import Chiffres from "@/components/chiffres";

import card from "@/assets/img1.jpg";
import card2 from "@/assets/img2.jpg";
import card3 from "@/assets/img33.jpg";

import cardx from "@/assets/card.jpg";
import card2x from "@/assets/card2.jpg";
import card3x from "@/assets/card3.jpg";

import alalia from "@/assets/Al-Alia.jpg";
import palms from "@/assets/Palms.jpg";
import workin from "@/assets/workin.jpg";

import newalia from "@/assets/new-alia.png";
import newpalms from "@/assets/new-palms.png";
import newart from "@/assets/new-art.png";
import newwork from "@/assets/new-work.png";

import {InfiniteLogoCarousel} from "@/components/carou";
import aeco from "@/assets/ÉCO.ma_.png";
import a360 from "@/assets/le360.png";
import am24 from "@/assets/logo.m24.png";

import contactus from "@/assets/contactus.png";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Sanam from "@/assets/Sanam holding.png";
import alaliamaak from "@/assets/Al-Alia-maak.jpg";
import "@/app/globals.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const slides = [
    {
      images: [alalia.src, palms.src, workin.src],
      title: "Immobilier : Arena lance un programme durable de 5 milliards de dirhams à Casablanca",
      date: "29/10/2024",
      press: aeco.src,
      link: "https://leseco.ma/business/immobilier-arena-lance-un-programme-durable-de-5-milliards-de-dirhams-a-casablanca.html",
    },
    {
      image: Sanam.src,
      title: "Immobilier: le groupe Sanam s'associe avec Aevitas, le gestionnaire néerlandais de fonds de pension américains",
      date: "11/06/2020",
      press: a360.src,
      link: "https://fr.le360.ma/economie/immobilier-le-groupe-sanam-sassocie-avec-aevitas-le-gestionnaire-neerlandais-de-fonds-de-pension-217011/",
      hi: "160px",
      wi: "75%",
    },
    {
      image: alaliamaak.src,
      title: "Covid-19 : Al Alia immobilier se mobilise pour aider financièrement ses acquéreurs",
      date: "22/07/2020",
      press: am24.src,
      link: "https://medias24.com/2020/04/13/al-alia-immobilier-15-mdh-pour-soutenir-les-residents-les-plus-fragilises/",
      hi: "170px",
      wi: "auto",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);





  const [isMobilem, setIsMobilem] = useState(false);
  const [isInViewm, setIsInViewm] = useState(false);
  const sectionRefm = useRef(null);

const brandImages = [
    { src: newalia.src, alt: 'im1', isFirst: true ,link:'/NosMarques' },
    { src: newpalms.src, alt: 'im2', isFirst: false ,link:'/NosMarques' },
    { src: newart.src, alt: 'im3', isFirst: false  ,link:'/NosMarques' },
    { src: newwork.src, alt: 'im4', isFirst: false , link:'/NosMarques' }
  ];


  // Check mobile screen size
  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobilem(window.innerWidth < 1024); // Tailwind's lg breakpoint
    };

    // Check initial screen size
    checkMobileScreen();

    // Add event listener for screen resize
    window.addEventListener('resize', checkMobileScreen);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobileScreen);
  }, []);

  // Intersection Observer to check if section is in view
  useEffect(() => {
    if (!isMobilem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("entry.isIntersecting",entry.isIntersecting)
        setIsInViewm(entry.isIntersecting);
      },
      { 
        threshold: 0.1 // Trigger when at least 10% of the section is visible
      }
    );

    if (sectionRefm.current) {
      observer.observe(sectionRefm.current);
    }

    // Cleanup observer
    return () => {
      if (sectionRefm.current) {
        observer.unobserve(sectionRefm.current);
      }
    };
  }, [isMobilem]);


  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    const section = document.getElementById('actualites');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (isMobile && inView) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3200);

      return () => clearInterval(interval);
    }
  }, [isMobile, inView]); 


  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getDesktopVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      const slideIndex = (currentSlide + i) % slides.length;
      visibleSlides.push(slides[slideIndex]);
    }
    return visibleSlides;
  };
  
  const handleContactClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
 
      {/* Section : Home */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage.src})`,
        }}
      >
        <p className="hero-content text-[16-px] xl:text-[24px] 2xl:text-[31px] tracking-[4px] xl:tracking-[3px] 2xl:tracking-[4px]">
          ARENA, CATALYSEUR DE CROISSANCE
          <br />
          URBAINE ET ECONOMIQUE AU MAROC.
        </p>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img src={logo.src} alt="Logo" className="w-36 xl:w-48 2xl:w-60 items-center opacity-70" />
        </div>
      </section>

      <section
        id="notre-groupe"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-[#edede5]"
        style={{
          backgroundImage: `url(${Alogo.src})`,
          backgroundColor: "#fafafa",
          backgroundRepeat: "no-repeat",
          backgroundSize: "69%",
          backgroundPositionX: "50%",
          backgroundPositionY: "47%"
        }}
      >
        
        <h2 className="text-xl  xl:text-2xl 2xl:text-4xl font-medium text-[#212046] mb-4">
          QUI SOMMES NOUS?
        </h2>

  <motion.p 
    className="text-base md:text-lg xl:text-[18px] 2xl:text-[22px] text-[#141C48] xl:max-w-4xl 2xl:max-w-6xl leading-relaxed lg:font-[350] lg:tracking-[1.5px] lg:leading-[46px] mt-6"
    style={{ fontFamily: "Raleway" }}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    Arena Property Development est une société marocaine de promotion immobilière qui s'impose
    comme un acteur clé du secteur. Née avec une ambition claire de redéﬁnir les standards de
    l'immobilier, Arena combine innovation, qualité et engagement envers la durabilité pour
    transformer les espaces de vie au Maroc.
  </motion.p>
  <br />
  <motion.p 
    className="text-base md:text-lg xl:text-[18px] 2xl:text-[22px] text-[#141C48] xl:max-w-4xl 2xl:max-w-6xl leading-relaxed lg:font-[350] lg:tracking-[1.5px] lg:leading-[46px] 2xl:mt-6"
    style={{ fontFamily: "Raleway" }}
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.4 }}
  >
    Le groupe se distingue par sa capacité à conjuguer des visions locales et internationales
    grâce à des partenariats stratégiques solides.
  </motion.p>

  <motion.button
    className="mt-6 px-6 py-2 text-lg border border-[#141C48] text-[#141C48] hover:text-white hover:bg-[#141C48] transition"
    style={{
      fontFamily: "Raleway",
      fontSize: typeof window !== "undefined" && window.innerWidth >= 1024 ? "24px" : "",
      fontWeight: typeof window !== "undefined" && window.innerWidth >= 1024 ? "350" : "",
      letterSpacing: typeof window !== "undefined" && window.innerWidth >= 1024 ? "1.5px" : "",
    }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.6 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    En savoir plus
  </motion.button>
</section>

      {/* Section : Vision & Valeurs */}
      <Chiffres/>
      
{/* Section : Nos Métiers */}
<section id="nos-metiers" className="py-16 min-h-screen text-center px-4">
  <h2 className="text-2xl xl:text-3xl 2xl:text-4xl text-gray-900 mb-12"  style={{ color: '#003851', fontFamily: 'Romelio' }}>NOS METIERS</h2>
  <div className="flex flex-col lg:flex-row gap-4 ">
    {/* Card 1 */}
    <div
      className="relative bg-cover flex-grow h-[400px] md:h-[750px] bg-no-repeat overflow-hidden xl:bg-[90%] 2xl:bg-[100%] lg:w-1/3"
      style={{ backgroundImage: `url(${card.src})`, }}
    >
      <div className="absolute inset-0 bg-white flex w-[270px] h-[130px] xl:h-[170px] xl:w-[350px] 2xl:w-[400px] top-[40%]  shadow-lg flex-col items-start justify-center p-6 text-left">
      <button
      onClick={() => (window.location.href = "/NosMetiers#Promotion")}
       className="text-left"
         >
        <h3 className="text-l xl:text-xl 2xl:text-2xl font-bold text-purple-950"style={{letterSpacing: '2px', fontWeight: 'lighter'}}>
          PROMOTION IMMOBILIERE
        </h3>
        </button>
        <button
          className="mt-2 text-[12px] xl:text-[15px] 2xl:text-[17px] text-left text-black hover:text-blue-600 transition duration-300" style={{fontFamily: 'Raleway', fontWeight: '500'}}
          onClick={() => (window.location.href = "/NosMetiers#Promotion")}
        >
          Voir détails
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="relative bg-cover flex-grow h-[400px] md:h-[750px] bg-no-repeat overflow-hidden xl:bg-[90%] 2xl:bg-[100%] lg:w-1/3"
      style={{ backgroundImage: `url(${card2.src})`}}
       >
      <div className="absolute inset-0 bg-white flex w-[270px] h-[130px] xl:h-[170px] xl:w-[350px] 2xl:w-[400px] top-[40%]  shadow-lg flex-col items-start justify-center p-6 text-left">
      <button
        onClick={() => (window.location.href = "/NosMetiers#Maîtrise")}
        className="text-left"
         >
      <h3 className="text-l xl:text-xl 2xl:text-2xl font-bold text-purple-950"style={{letterSpacing: '2px', fontWeight: 'lighter'}}>
      MAITRISE D’OUVRAGE DELEGUEE
        </h3>
        </button>
        <button
          className="mt-2 text-[12px] xl:text-[15px] 2xl:text-[17px] text-left text-black hover:text-blue-600 transition duration-300" style={{fontFamily: 'Raleway', fontWeight: '500'}}
          onClick={() => (window.location.href = "/NosMetiers#Maîtrise")}
        >
          Voir détails
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div
      className="relative bg-cover flex-grow h-[400px] md:h-[750px] bg-no-repeat overflow-hidden xl:bg-[90%] 2xl:bg-[100%] lg:w-1/3"
      style={{ backgroundImage: `url(${card3.src})`}}
    >
      <div className="absolute inset-0 bg-white flex w-[270px] h-[130px] xl:h-[170px] xl:w-[350px] 2xl:w-[400px] top-[40%]  shadow-lg flex-col items-start justify-center p-6 text-left">
      <button
      onClick={() => (window.location.href = "/NosMetiers#Conseil")}
      className="text-left">
      <h3 className="text-l xl:text-xl 2xl:text-2xl font-bold text-purple-950"style={{letterSpacing: '2px', fontWeight: 'lighter'}}>
      CONSEIL EN INVESTISSEMENT
        </h3>
        </button>
        <button
          className="mt-2 text-[12px] xl:text-[15px] 2xl:text-[17px] text-left text-black hover:text-blue-600 transition duration-300" style={{fontFamily: 'Raleway', fontWeight: '500'}}
          onClick={() => (window.location.href = "/NosMetiers#Conseil")}
        >
          Voir détails
        </button>
      </div>
    </div>
  </div>
</section>
      
      {/* Desktop View */}
      <section 
      ref={sectionRefm}
      id="nos-marques" 
      className="marque py-16 text-center bg-[#e5e5e4] flex flex-col min-h-screen justify-start items-center"
      style={{ 
        "--bg-image-url": `url(${Alogo.src})`
      } as React.CSSProperties}
    >
      <h2 className="text-2xl xl:text-3xl 2xl:text-4xl" style={{ color: '#003851', fontFamily: 'Romelio' }}>NOS MARQUES</h2>
      
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center mt-10 2xl:mt-36 gap-4 xl:gap-20">
        <div className="w-full overflow-hidden rounded-lg p-4">
          <InfiniteLogoCarousel logos={brandImages} speed={140} pauseOnHover={true} />
        </div>
      </div>
      
      {/* Mobile Carousel View */}
      {isMobilem && (
        <div className="lg:hidden w-full px-4 mt-32 lg:mt-52">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            autoplay={{
              delay: 100,
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            speed={4000}
            loop={true}
            className="brands-swiper"
          >
            {brandImages.map((image, index) => (
             <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="w-full max-w-xs flex justify-center">
                
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="h-auto w-full max-h-[280px] object-contain ml-6 lg:ml-[23%]" 
                    style={{width: "343px", height: "280px"}}
                  />                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>

      {/* Section : Actualites */}
<h2 className="text-2xl xl:text-3xl 2xl:text-4xl text-center m-8 md:mt-[5%]" style={{ color: '#003851', fontFamily: 'Romelio' }}>ACTUALITES</h2>
<section id="actualites" className="py-8 md:py-16 w-full  relative min-h-[400px] md:min-h-[600px]">
  {/* Desktop Arrow Buttons - Only visible on large screens (above 1024px) */}
  <button onClick={handlePrevClick} className="hidden lg:block absolute m-5 left-0 top-1/2 transform -translate-y-1/2 p-4">
    <IoIosArrowDropleft className="w-16 h-24 text-[#034e58]" />
  </button>
  <button onClick={handleNextClick} className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 p-4">
    <IoIosArrowDropright className="w-16 h-24 text-[#034e58]" />
  </button>

  <div className="w-full max-w-8xl mx-auto px-6 ml-2">
    {/* Desktop view - only shown on large screens (above 1024px) */}
    <div className="hidden xl:flex xl:flex-row transition-transform duration-500 gap-0 ml-[5%]">
      {/* Desktop view - show all visible slides */}
      {getDesktopVisibleSlides().map((slide, index) => (
        <div key={index} className="lg:w-1/3 px-1 ">
          <div className="bg-[#ececec] p-7 shadow-lg xl:h-[400px] xl:w-[350px] 2xl:h-[500px] 2xl:w-[470px] flex flex-col h-full justify-between cursor-pointer">
              {slide.images ? (
                <div className="flex space-x-2 mt-2">
                  {slide.images.map((src, idx) => (
                    <img 
                      key={idx} 
                      src={src} 
                      alt={`Slide ${index} Image ${idx}`} 
                      className="xl:w-[92px] xl:h-36 2xl:w-36 2xl:h-44 object-cover mb-10 2xl:mb-12 mt-2" 
                    />
                  ))}
                </div>
              ) : (
                <div className="flex justify-start">
                  
                  <img 
                    src={slide.image} 
                    alt={`Slide ${index} Image`} 
                    className="2xl:h-44 2xl:w-auto object-contain mb-[22px] 2xl:mb-16 mt-0"
                    style={{ width: slide.wi, height: slide.hi }}
                  />
                </div>
              )}

              <h3 
                className="xl:text-[14px] xl:tracking-[20px] 2xl:tracking-[50px] leading-6 2xl:leading-8 2xl:text-[16px]  mt-0 mb-auto" 
                style={{
                  fontFamily: 'Raleway', 
                  letterSpacing: '2px', 
                  fontWeight: 'bold'
                }}
              >
                {slide.title}
              </h3>

              {/* Wrap p inside a flex-col container to push it down */}
              <div className="item-end mb-[-5%]">

              <div className="flex items-start justify-start flex-col h-full">
                <p 
                  className="text-gray xl:text-[16px] xl:tracking-[20px] 2xl:tracking-[40px] 2xl:text-[20px] mt-auto mt-16 mb-2 flex items-end" 
                  style={{ 
                    fontFamily: 'Raleway', 
                    letterSpacing: '2px', 
                    fontWeight: '400' 
                  }}
                  >
                  <img className="xl:w-[50px] 2xl:w-[80px] mr-2" src={slide.press} alt="Slide Press" /> - {slide.date}
                </p>
                  </div>
              </div>
            
          </div>
        </div>
      ))}
    </div>

    {/* Mobile and Tablet view - show on screens up to 1024px */}
    <div className="xl:hidden transition-transform duration-500 overflow-hidden">
      {/* Current slide with transition effect */}
      <div 
        className="w-full flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 px-2">
            <div className="bg-[#ececec] p-5 shadow-lg h-[500px] flex flex-col justify-between cursor-pointer">
              <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
                {slide.images ? (
                  <div className="grid grid-cols-2 gap-2">
                    {slide.images.map((src, idx) => (
                      <img
                        key={idx} 
                        src={src} 
                        alt={`Slide ${index} Image ${idx}`} 
                        className="w-full h-32 md:h-40 object-cover" 
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-start md:justify-start">
                    <img 
                      src={slide.image} 
                      alt={`Slide ${index} Image`} 
                      className="object-contain mt-4 mb-4"
                      style={{ width: slide.wi, height: slide.hi }}
                    />
                  </div>
                )}
                <h3 
                  className="text-base text-gray-900 mt-10 md:mt-4" 
                  style={{
                    fontFamily: 'Raleway', 
                    letterSpacing: '1px', 
                    fontSize: '14px', 
                    lineHeight: '1.8', 
                    fontWeight: 'bold'
                  }}
                >
                  {slide.title}
                </h3>
                <div 
                  className="text-gray-700 mt-4 flex items-center flex-wrap h-full flex flex-col items-center md:items-start" 
                  style={{ 
                    fontFamily: 'Raleway', 
                    letterSpacing: '1px', 
                    fontSize: '16px', 
                    lineHeight: '1.3', 
                    fontWeight: '400' 
                  }}
                >
                  <p className="flex items-end text-gray mt-auto">
                    <img className="w-[60px] md:w-[120px] mr-2" src={slide.press} alt="Slide Press" />-{slide.date}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Slide indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  </div>
</section> 

      {/* Section : Contact */}
      <section
        id="contact"
        className="relative flex justify-center items-start min-h-screen h-200vh bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${img2.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "80%"
        }}
      >
        {!showForm ? (
          <button
            className="px-6 py-2 hover:bg-[#003851] hover:text-white text-lg xl:text-xl 2xl:text-2xl text-custom-blue border-2 border-custom-blue transform  mt-44 xl:mt-40 2xl:mt-48 translate-y-[8vh]  lg:translate-y-[5vh] lg-translate-x-48"
            onClick={handleContactClick}
          >
            CONTACTEZ-NOUS
          </button>
        ) : (
          <form
            className="mt-80 bg-white p-8 rounded shadow-md w-full max-w-md"
            onSubmit={handleFormSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#003851] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Envoyer
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}