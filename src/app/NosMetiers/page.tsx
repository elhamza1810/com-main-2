import React from "react";
import Image from "next/image";
import Head from "next/head";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import Alogo from "@/assets/A-logo.png";
import "../globals.css"
const NosMetiers = () => {
  return (
    <>

      <div className="bg-white min-h-screen">
        {/* Main title */}
        <h1 className="text-center text-gray-300 mt-36  text-4xl sm:text-5xl md:text-7xl font-light tracking-wider opacity-60">
          NOS MÉTIERS
        </h1>


        {/* Section 1 - Promotion Immobilière */}
        <section id="Promotion">
        <div className="container mx-auto my-6 px-4 mt-16 flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/3  relative">
            <Image
              src={img1.src}
              alt="Promotion Immobilière"
              width={500}
              height={400}
              className="lg:w-[437px] lg:h-[720px] 2xl:w-[437px] 2xl:h-[780px]  object-cover object-left"
              priority
            />

            {/* Overlay on image */}
            <div className="absolute top-1/2 left-0  right-0 transform -translate-y-1/2 w-4/6 lg:w-2/2  bg-white py-12">
              <div className="text-left ml-6">
                <h2 className="text-2xl md:text-3xl lg:text-xl text-[#003851] romelio"style={{letterSpacing: "1px"}}>
                  PROMOTION
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-xl text-[#003851] romelio"style={{letterSpacing: "1px"}}>
                  IMMOBILIERE
                </h2>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-3/5 lg:mb-2 lg:space-y-3 px-8 xl:mt-4 lg:px-0 xl:text-justify max-w-none">
            <p className=" text-[#003851] leading-[43px] 2xl:leading-[47px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway ">
              À l'intersection de la vision architecturale et de la stratégie urbaine, notre cœur de métier, la promotion immobilière, joue un rôle clé dans le développement économique et social de notre pays en créant des espaces qui répondent aux besoins d'aujourd'hui tout en anticipant ceux de demain.
            </p>
            <p className=" text-[#003851] leading-[42px] 2xl:leading-[46px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway">
              De la sélection des emplacements à la conception des projets, chaque étape de notre réflexion est guidée par une attention minutieuse au détail et par une volonté de dépasser les attentes de nos utilisateurs.
            </p>
            <p className=" text-[#003851] leading-[43px] 2xl:leading-[47px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway">
              Notre expertise s'étend à différents segments : du résidentiel social au plus luxueux, espaces mixtes, équipements de loisirs, nos projets s'inscrivent tous dans une vision durable et inclusive du futur.
            </p>
            <p className=" text-[#003851] leading-[42px] 2xl:leading-[46px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway">
              En tant que promoteur immobilier sérieux et responsable, nous nous engageons à développer des environnements qui allient durabilité, fonctionnalité et impact positif sur nos communautés.
            </p>
            <p className=" text-[#003851] leading-[43px] 2xl:leading-[47px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway">
              Chaque réalisation incarne notre ambition de bâtir un avenir harmonieux, où innovation et qualité de vie se rencontrent pour répondre aux aspirations des générations actuelles et futures.
            </p>
          </div>
        </div>
    </section>




                {/* Section 2 - Maîtrise d'ouvrage (Text Left, Alogo Background, img2 Right) */}
            <section id="Maîtrise">
                <div className="lg:mb-10 relative bg-[#15354F] text-white overflow-hidden">
          {/* Background Image (Alogo) - Semi-transparent overlay */}
          <div className="absolute inset-0 z-0 opacity-5 mt-10"
            style={{
              backgroundImage: `url(${Alogo.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "85%",
              backgroundPosition: "center",
              maxWidth: "100%",
              margin: "0 auto" 
            }}>
          </div>

          <div className="container  mx-auto px-2 mt-14 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center">
              {/* Text Content (Left) - Takes full width on mobile, 2/3 on desktop */}
              <div className="w-full lg:w-2/3 lg:pr-0 text-justify lg:p-6 lg:mb-12">
                <h2 className="mt-14 xl:-translate-x-12 2xl:-translate-x-24 lg:text-right font-bold mb-4 xl:text-[19px] 2xl:text-[20px] raleway ">
                  VOTRE VISION, NOTRE EXPERTISE.
                </h2>

                <div className="space-y-8 2xl:space-y-10 max-w-3xl 2xl:max-w-4xl lg:mb-2">
                  <p className="text-justify leading-[39px]  2xl:leading-[45px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway "style={{textAlignLast: "right" }}>
                    La maîtrise d'ouvrage déléguée est bien plus qu'une prestation technique : c'est un partenariat stratégique qui transforme vos ambitions en réalisations concrètes. Forts de plus de 10 ans d'expérience dans le secteur, nous mettons à votre disposition les meilleurs talents et équipes, dédiés au pilotage et à la réalisation de grands projets.
                  </p>

                  <p className="text-justify leading-[39px]  2xl:leading-[45px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway "style={{textAlignLast: "right" }}>
                    En nous confiant la gestion complète de vos projets, vous bénéficiez d'une expertise pointue et d'un accompagnement sur mesure, garantissant le respect des délais, des budgets et des standards de qualité les plus élevés.
                  </p>

                  <p className="text-justify leading-[39px]  2xl:leading-[45px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway "style={{textAlignLast: "right" }}>
                    De la planification initiale à la livraison finale, nous orchestrons chaque étape avec rigueur et transparence, tout en veillant à préserver l'intégrité de votre vision. Qu'il s'agisse de projets résidentiels, commerciaux ou d'infrastructures complexes, nous mobilisons les meilleurs talents et outils pour maximiser la valeur de vos investissements.
                  </p>

                  <p className="text-justify leading-[39px]  2xl:leading-[45px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway "style={{textAlignLast: "right" }}>
                    Parce que chaque projet mérite un pilotage d'exception, nous nous engageons à transformer vos idées en succès durables et impactants.
                  </p>
                </div>
              </div>

              {/* Image (Right) - Hidden on mobile, shown on desktop */}
              <div className="w-full lg:w-1/3  relative">
                <Image
                  src={img2.src}
                  alt="Maîtrise d'ouvrage déléguée"
                  width={500}
                  height={400}
                  className="lg:w-[437px] lg:h-[720px] 2xl:w-[437px] 2xl:h-[780px]  mt0-[10%] object-cover object-left"
                />

                {/* Overlay starts from variable left position and ends at right edge */}
                <div className="absolute top-1/2 left-[15%] xl:left-[25%] xl:right-[-1%] 2xl:right-[-4%] xl:right-16 transform -translate-y-1/2 bg-[#15354F] py-12">
                  <div className="text-left ml-6">
                    <h2 className="text-2xl md:text-3xl text-center 2xl:mr-6 xl:mr-2 lg:text-xl text-white romelio"style={{letterSpacing: "1px"}}>
                      MAITRISE D'OUVRAGE
                    </h2>
                    <h2 className="text-2xl md:text-3xl text-center 2xl:mr-6 xl:mr-2 lg:text-xl text-white romelio"style={{letterSpacing: "1px"}}>
                      DELEGUE
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </section>



        {/* Section 3 - Conseil en Investissement */}
    <section id="Conseil">
        <div className="lg:mt-14 my-6 container mx-auto px-4 lg:mb-14">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image (Left) - Full width on mobile, 2/5 on desktop */}
            <div className="w-full lg:w-1/3 relative  ">
              <Image
                src={img3.src}
                alt="Conseil en Investissement"
                width={500}
                height={400}
                className="lg:w-[437px] lg:h-[720px] 2xl:w-[437px] 2xl:h-[780px]  object-cover object-left"
              />
              <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 w-4/6 lg:w-3/5 bg-white py-12">
                <div className="text-left ml-6">
                  <h2 className="text-2xl md:text-3xl lg:text-xl text-[#003851]  uppercase romelio ">
                    CONSEIL
                  </h2>
                  <h2 className="text-2xl md:text-3xl lg:text-xl text-[#003851]  uppercase romelio">
                    EN INVESTISSEMENT
                  </h2>
                </div>
              </div>
            </div>

            {/* Text Content (Right) - Full width on mobile, 3/5 on desktop */}
            <div className="w-full lg:w-3/5">

              {/* Text content with proper spacing */}
              <div className="space-y-4 text-[#15354F] text-lg text-justify mt-[4%] xl:mt-[-2%] 2xl:mt-[-2%] lg:mb-8 ">
                <p className="text-justify leading-[43px] 2xl:leading-[45px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway ">
                  Constituant un levier stratégique pour transformer vos ambitions en réussites durables, le conseil en investissement est un levier important dans toute démarche financière.
                </p>
                <p className="text-justify leading-[43px] 2xl:leading-[45px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway ">
                  Chez Arena, et en partenariat avec des acteurs financiers de premier plan, nous avons érigé une assise financière solide. Ces investissements constituent le moteur de notre croissance continue, nous propulsant vers de nouvelles opportunités pour la concrétisation de projets emblématiques.
                </p>
                <p className="text-justify leading-[43px] 2xl:leading-[45px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway ">
                  Grâce à une compréhension approfondie du marché marocain et des dynamiques économiques, nous offrons des solutions sur mesure qui optimisent vos investissements, minimisent les risques et maximisent vos rendements.
                  De l'analyse des opportunités à la structuration des projets, notre approche est marquée par la rigueur, l'anticipation et l'innovation.
                </p>
                <p className="text-justify leading-[43px] 2xl:leading-[45px] tracking-[1px] xl:text-[18px] 2xl:text-[20px] raleway ">
                  En tant que partenaires de confiance, nous plaçons vos objectifs au cœur de nos priorités et nous nous engageons à proposer des stratégies qui allient performance, durabilité et impact positif.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
      </div>
    </>
  );
};

export default NosMetiers;