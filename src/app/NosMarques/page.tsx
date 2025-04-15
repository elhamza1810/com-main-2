"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import "../globals.css";
import AOL from "@/assets/AOL.jpg";
import PA from "@/assets/PA.jpg";
import WI from "@/assets/WC.jpg";
import AL from "@/assets/AL.jpg";
import AOLLOGO from "@/assets/Artof2.png"
import PALOGO from "@/assets/Nos-marques-logos-Palms.png"
import WILOGO from "@/assets/Nos-marques-logos-Workin.png"
import ALLOGO from "@/assets/Nos-marques-logos-al-alia.png"
import ALOGO from "@/assets/A-logo.png"

const NosMarques = () => {
  
  return (
    <>
      <div className="mt-32 lg:mt-0 bg-white min-h-screen">
        {/* Main title */}
        <h1 className="text-center text-gray-300 mt-36 text-4xl sm:text-5xl md:text-7xl font-light tracking-wider opacity-60">
          NOS MARQUES
        </h1>
        {/* Section 1 - Art Of Living */}
        <section id="art">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Image Section with Overlay */}
            <div className="w-full lg:w-2/5 relative">
                <Image
                  src={AOL.src}
                  alt="Workin Center"
                  width={550}
                  height={500}
                  className="w-full h-[600px] xl:h-[600px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-950/40 bg-opacity-80 flex flex-col items-center justify-center">
                  <Image
                    src={AOLLOGO.src}
                    alt="Workin Center"
                    width={300}
                    height={150}
                    className="w-auto h-auto max-w-[90%] max-h-[80%] object-contain"
                    priority
                  />
                  <div className="mt-6 flex justify-center">
                    <a href="/"  target="_blank" rel="noopener noreferrer" className="border border-white text-black py-2 px-6 bg-white hover:bg-[#003851] hover:text-white transition">
                      Visiter le site
                    </a>
                  </div>
                </div>
              </div>

            {/* Text Section - Right aligned with image */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 mx-16 ml-[-2%] pt-6 lg:pt-0 mt-[-0.4%]">
              <p className="text-[#003851] raleway  text-justify leading-[34px] 2xl:leading-[46px] xl:text-[17px] 2xl:text-[18px]">
                ART OF LIVING, créé par le Groupe ARENA Property Développement, incarne une vision raﬃnée du luxe et de l'élégance et a pour vocation de créer de nouvelles références d'excellence dans le développement immobilier au Maroc.
              </p>
              <p className="text-[#003851] raleway text-justify leading-[34px] 2xl:leading-[45px] xl:text-[17px] 2xl:text-[18px]">
                ART OF LIVING a été fondée avec la vision de construire des actifs extraordinaires et de créer des expériences de vie immersives qui redéﬁnissent le concept de vie de luxe.
              </p>
              <p className="text-[#003851] raleway text-justify leading-[36px] 2xl:leading-[46px] xl:text-[17px] 2xl:text-[18px]">
                Une combinaison de qualité, de créativité et de rareté pour créer des destinations uniques. En privilégiant des expériences sur mesure et des services exceptionnels, ART OF LIVING établit une nouvelle norme en matière de haut standing et de luxury living au Maroc, oﬀrant un style de vie qui dépasse les attentes.
              </p>
              <p className="text-[#003851] raleway text-justify leading-[35px] 2xl:leading-[46px] xl:text-[17px] 2xl:text-[18px]">
                Notre engagement est d'allier design, confort, innovation et expérience de vie pour oﬀrir des espaces où le luxe se réinvente.
              </p>
            </div>
          </div>
        </div>
        </section>





        {/* Section 2 - Palms Avenue - With A-logo background */}
        <section id="palms">
        <div className="bg-[#003851] text-white py-20 relative">
          {/* A-logo background */}
          <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url(${ALOGO.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "69%",
              backgroundPosition: "center",
            }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-start gap-16">
              {/* Text Content - Left */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 pt-4 mt-[-0.5%] lg:pt-0">
                <p className="raleway text-justify leading-[38px] 2xl:leading-[41px] xl:text-[17px] 2xl:text-[18px]"style={{fontWeight: "300"}}>
                  Palms Avenue est la marque de standing d'Arena qui propose une nouvelle vision du développement immobilier.
                </p>
                <p className="raleway text-justify leading-[37px] 2xl:leading-[40px] xl:text-[17px] 2xl:text-[18px]" style={{fontWeight: "300"}}>
                  Engagée pour l'excellence et la qualité, Palms Avenue répond aux besoins
                  du marché immobilier en proposant des logements de standing supérieur à
                  des prix accessibles.
                </p>
                <p className="raleway text-justify leading-[37px] 2xl:leading-[41px] xl:text-[17px] 2xl:text-[18px]"style={{fontWeight: "300"}}>
                  Avec des projets comme Palms Avenue Rocade et Palms Avenue Bouskoura, idéalement situés à Bouskoura et sur la Rocade Sud, Palms Avenue oﬀre des cadres de vie exceptionnels.
                </p>
                <p className="raleway text-justify leading-[37px] 2xl:leading-[40px] xl:text-[17px] 2xl:text-[18px]"style={{fontWeight: "300"}}>
                  L'architecture moderne et les ﬁnitions haut de gamme se conjuguent pour créer des espaces de vie fonctionnels et élégants. Les résidents proﬁtent d'espaces de loisirs pensés pour favoriser la convivialité et l'épanouissement.
                </p>
                <p className="raleway text-justify leading-[36px] 2xl:leading-[40px] xl:text-[17px] 2xl:text-[18px]"style={{fontWeight: "300"}}>
                  Engagée pour l'excellence, Palms Avenue redessine le paysage urbain avec des résidences modernes et des espaces commerciaux intégrés, reﬂétant un mode de vie où bonheur et sérénité sont au cœur de chaque projet.
                </p>
              </div>

              {/* Image - Right */}
              <div className="w-full lg:w-2/5 relative">
                <Image
                  src={PA.src}
                  alt="Palms Avenue"
                  width={550}
                  height={500}
                  className="w-full h-[600px] xl:h-[600px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-950 bg-opacity-60 flex flex-col items-center justify-center ">
                  <Image
                    src={PALOGO.src}
                    alt="Palms Avenue"
                    width={300}
                    height={150}
                    className="w-auto h-auto max-w-[90%] max-h-[80%] object-contain"
                    priority
                  />
                  <div className="mt-6  flex justify-center">
                    <a href="https://palmsavenue.ma"  target="_blank" rel="noopener noreferrer" className=" border border-white text-black py-2 px-6 bg-white hover:bg-[#003851] hover:text-white transition">
                      Visiter le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>




        {/* Section 3 - Workin Center */}
        <section id="working" >
        <div className="text-[#003851] bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start gap-16">
              {/* Image - Left */}
              <div className="w-full lg:w-2/5 relative">
                <Image
                  src={WI.src}
                  alt="Workin Center"
                  width={550}
                  height={500}
                  className="w-full h-[600px] xl:h-[600px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-950 bg-opacity-60 flex flex-col items-center justify-center">
                  <Image
                    src={WILOGO.src}
                    alt="Workin Center"
                    width={300}
                    height={150}
                    className="w-auto h-auto max-w-[90%] max-h-[80%] object-contain"
                    priority
                  />
                  <div className="mt-6 flex justify-center">
                    <a href="https://workincenter.ma/"  target="_blank" rel="noopener noreferrer" className="border border-white text-black py-2 px-6 bg-white hover:bg-[#003851] hover:text-white transition">
                      Visiter le site
                    </a>
                  </div>
                </div>
              </div>

              {/* Text - Right */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center  xl:space-y-6 2xl:space-y-6 pt-6 mt-[-0.4%] lg:pt-0">
                <p className=" raleway text-justify leading-[36px] 2xl:leading-[45px] xl:text-[17px] 2xl:text-[18px]">
                  Workin Center est la marque tertiaire d'Arena qui propose des centres d'affaires innovants et fonctionnels avec un design contemporain.
                </p>
                <p className="raleway text-justify leading-[36px] 2xl:leading-[45px] xl:text-[17px] 2xl:text-[18px]">
                  Situés à Casa Sud et Bouskoura, les centres d'affaires Workin Center offrent un environnement de travail moderne, flexible et stimulant. Chaque détail a été soigneusement conçu pour créer des espaces à la fois performants et esthétiques.
                </p>
                <p className="raleway text-justify leading-[36px] 2xl:leading-[45px] xl:text-[17px] 2xl:text-[18px]">
                  Des espaces de coworking dynamiques aux bureaux privatifs modulables, Workin Center s'adapte aux besoins spécifiques de chaque entreprise, favorisant la collaboration et la productivité.
                </p>
                <p className="raleway text-justify leading-[36px] 2xl:leading-[45px] xl:text-[17px] 2xl:text-[18px]">
                  La marque vise à accompagner les entreprises en créant des écosystèmes professionnels qui favorisent l'innovation, la créativité et les échanges. Avec un engagement constant envers l'excellence, Workin Center redéfinit les normes des espaces de travail au Maroc et offre un cadre propice à la réussite des entreprises.
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>




        {/* Section 4 - Al Alia - With A-logo background */}
        <section id="alalia">
        <div className="py-20  bg-[#003851] mb-2 relative">
          {/* A-logo background */}
          <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url(${ALOGO.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "69%",
              backgroundPosition: "center",
              maxWidth: "100%",
              margin: "0 auto" 
          }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-start gap-16">
              {/* Text - Left */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center  xl:space-y-8 2xl:space-y-6  pt-6 xl:mt-[0%] 2xl:mt-[-0.4%] lg:pt-0 text-white">
                <p className="raleway text-justify xl:text-[17px] 2xl:text-[18px]" 
                    style={{fontWeight: "300", textAlignLast: "right" }}>
                  Al Alia est une marque de promotion immobilière spécialisée dans le développement de logements sociaux accessibles et de qualité à Casablanca.
                </p>
                <p className="raleway text-justify leading-[33px] 2xl:leading-[39px] xl:text-[17px] 2xl:text-[18px]" 
                    style={{fontWeight: "300", textAlignLast: "right" }}>
                  Animée par la conviction que chacun mérite un chez-soi de qualité, Al Alia s'attache à redéfinir les standards du logement social en conjuguant conception innovante, réalisation soignée et durabilité.
                </p>
                <p className="raleway text-justify leading-[34px] 2xl:leading-[39px] xl:text-[17px] 2xl:text-[18px]" 
                    style={{fontWeight: "300", textAlignLast: "right" }}>
                  Le succès de l'entreprise se reflète dans ses projets emblématiques implantés dans des quartiers stratégiques de Casablanca, tels que Tamaris, Arrahma, Al Oulfa, Lisassfa, Ahl Loghlam et Sidi Moumen.
                </p>
                <p className="raleway text-justify leading-[34px] 2xl:leading-[39px] xl:text-[17px] 2xl:text-[18px]" 
                    style={{fontWeight: "300", textAlignLast: "right" }}>
                  Avec la livraison de plus 20.000 unités, Al Alia Immobilier suscite un vif intérêt pour ses équipements privés, ses commerces et ses terrains, reflétant ainsi l'attrait indéniable de la marque dans la région.
                </p>
                <p className="raleway text-justify leading-[34px] 2xl:leading-[39px] xl:text-[17px] 2xl:text-[18px]" 
                    style={{fontWeight: "300", textAlignLast: "right" }}>
                  Al Alia Immobilier incarne une réalisation remarquable dans le domaine du développement urbain, matérialisant la vision et l'engagement d'Arena envers la création de communautés durables et prospères.
                </p>
              </div>

              {/* Image - Right */}
              <div className="w-full lg:w-2/5 relative">
                <Image
                  src={AL.src}
                  alt="Al Alia"
                  width={550}
                  height={500}
                  className="w-full h-[600px] xl:h-[600px] object-cover object-center"
                />
                <div className=" absolute inset-0 bg-blue-950 bg-opacity-60 flex flex-col items-center justify-center">
                  <Image
                    src={ALLOGO.src}
                    alt="Al Alia"
                    width={300}
                    height={150}
                    className="w-auto h-auto max-w-[90%] max-h-[80%] object-contain"
                    priority
                  />
                  <div className=" mb-6">
                    <a href="https://alalia.ma/"  target="_blank" rel="noopener noreferrer" className="border border-white bg-white text-black py-2 px-6 hover:bg-[#003851] hover:text-white transition">
                      Visiter le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  );
};

export default NosMarques;