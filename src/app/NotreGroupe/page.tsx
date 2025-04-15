'use client';
import { useEffect, useState, useRef } from "react";
import React from "react";
import { Quote } from "lucide-react";
import anis from "@/assets/MrAnis.jpeg"
import Alogo from "@/assets/A-logo.png";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import bg from "@/assets/bg.jpg";
import Chiffres from "@/components/chiffres";
import Organi from "./organi";
import Gov from "./gov";
import govimg from "@/assets/shutterstock_1935991594.jpg"
import hands from "@/assets/shutterstock_1498583432.jpg"
import handss from "@/assets/hands.jpg"
import iso from "@/assets/shutterstock_2531755875.jpg"
import thetwo from "@/assets/thetwo.png"
import quotes from "@/assets/quotes.png";
import rquot from "@/assets/revquotes.png";

export default function NotreGroupe() {

    const [isTextExpanded, setIsTextExpanded] = useState(false);
    const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

    return (
        <div className="relative w-full overflow-hidden">
            <section
                id='mot-de-president'
                className="relative min-h-screen flex flex-col justify-start items-center bg-[#ececec] px-4"
                style={{
                    position: "relative" // Ensure relative positioning for the section
                }}
            >
                <div 
                    className="absolute lg:top-24 lg:left-8  xl:bg-[length:76%] 2xl:bg-[length:67%] 2xl:top-28 2xl:left-8  right-0 w-full h-full z-0"
                    style={{
                        backgroundImage: `url(${Alogo.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        opacity: 1
                    }}
                ></div>
                 <div className="absolute inset-0 bg-[#fafafa] opacity-75"></div>
    
                <h1
                    className="overflow-hidden relative z-10 tracking-[4px] xl:tracking-[9px] ml-[5%] text-gray-800 sm:pt-[10%] mt-[24%] lg:mt-0 xl:pt-[7%] text-[35px] sm:text-[70px] xl:text-[85px] 2xl:text-[100px]"
                    style={{
                        fontFamily: "Romelio",
                        fontWeight: "100",
                        opacity: "0.1",
                    }}>
                    NOTRE GROUPE
                </h1>
                <h2 className="   text-[20px] mt-[5%] xl:text-2xl 2xl:text-4xl relative z-10 2xl:mt-[6%]  text-[#003851]">
                    MOT DU PRESIDENT
                </h2>
                <div className="relative z-10 mt-[4%] flex flex-col-reverse lg:flex-row items-start">
                <div className="w-full lg:w-full mt-[1%] order-2 lg:order-1 flex justify-center items-center">
                        <img
                            src={anis.src}
                            alt="Anis"
                            className="justify-center lg:w-auto xl:ml-[3%] w-[500px] lg:mr-[10%] xl:w-[480px] 2xl:ml-[5%] 2xl:w-[480px] 2xl:h-auto object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-auto xl:ml-[-3%] xl:mr-14 2xl:ml-[-5%] 2xl:mr-16 order-1 lg:order-2 mb-2 lg:mb-0 px-6 lg:px-4">
                        <div className="hidden lg:block">
                            <motion.p
                                className="w-auto text-justify  xl:mt-[1%] xl:ml-[3%] tracking-[1px] text-[15px] leading-[36px] xl:text-[17px] xl:leading-[45.7px] 2xl:text-[22px] 2xl:leading-[50px] 2xl:tracking-[2px] max-w-[100%] mx-8 "
                                style={{ fontFamily: "Raleway", color: "#003851" }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <Quote className="inline-block text-[#003851] w-4 h-4 mr-2 align-middle rotate-180" />
                                Arena est née en 2015 avec une mission claire : repenser l'immobilier au Maroc pour en faire un levier&nbsp;
                                d'innovation, de qualité et de durabilité. En partant du logement social jusqu'aux projets les plus&nbsp;
                                prestigieux, nous avons toujours eu à cœur de répondre aux besoins réels des clients tout en anticipant&nbsp;
                                les enjeux de demain.<br />
                                Nos projets se distinguent par leur conception audacieuse et leur engagement envers l'excellence. Qu'il&nbsp;
                                s'agisse d'introduire des innovations inédites dans le logement social ou de collaborer avec des&nbsp;
                                architectes et designers de renom pour des résidences haut de gamme, notre objectif est de créer des&nbsp;
                                espaces qui marient confort, modernité et respect de l'environnement.<br />
                                Avec cette vision, nous continuons à bâtir des projets qui inspirent, tout en plaçant les aspirations de nos&nbsp;
                                clients et la durabilité au cœur de nos actions.
                                <Quote className="inline-block text-[#003851] w-4 h-4 ml-2 align-middle " />
                                {/* Signature Section */}
                            </motion.p>
                                <div className="flex flex-col items-end ml-[-5%] pb-[2%] w-full relative">
                                    <p
                                        className="text-[30px] 2xl:text-[50px] mb-2"
                                        style={{ fontFamily: "DiamondSignature-Regular", color: "#003851" }}
                                    >
                                        M. Anis Sefrioui
                                    </p>
                                    <p
                                        className="text-[10px] text-end 2xl:text-[15px]"
                                        style={{ fontFamily: "Raleway", color: "#003851" }}
                                    >
                                        Fondateur et Président
                                    </p>
                                </div>

                        </div>

                        <div className="lg:hidden">
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <motion.p
                                        className="w-auto text-justify tracking-[1px] text-[15px] leading-[35px]"
                                        style={{ fontFamily: "Raleway", color: "#003851" }}
                                        initial={{ height: isTextExpanded ? "auto" : "150px", overflow: "hidden" }}
                                        animate={{ height: isTextExpanded ? "auto" : "150px", overflow: "hidden" }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Quote className="inline-block text-[#003851] w-4 h-4 mr-2 align-middle rotate-180" />
                                         Arena est née en 2015 avec une mission claire : repenser l'immobilier au Maroc pour en faire un levier&nbsp;
                                        d'innovation, de qualité et de durabilité. En partant du logement social jusqu'aux projets les plus&nbsp;
                                        prestigieux, nous avons toujours eu à cœur de répondre aux besoins réels des clients tout en anticipant&nbsp;
                                        les enjeux de demain.<br /><br />
                                        Nos projets se distinguent par leur conception audacieuse et leur engagement envers l'excellence. Qu'il&nbsp;
                                        s'agisse d'introduire des innovations inédites dans le logement social ou de collaborer avec des&nbsp;
                                        architectes et designers de renom pour des résidences haut de gamme, notre objectif est de créer des&nbsp;
                                        espaces qui marient confort, modernité et respect de l'environnement.<br /><br />
                                        Avec cette vision, nous continuons à bâtir des projets qui inspirent, tout en plaçant les aspirations de nos&nbsp;
                                        clients et la durabilité au cœur de nos actions.
                                        <Quote className="inline-block text-[#003851] w-4 h-4 mr-2 align-middle " /> 
                                    </motion.p>

                                    {/* Gradient fade effect at the bottom when collapsed */}
                                   {/* {!isTextExpanded && (
                                        <div className="relative h-20 w-full pointer-events-none" style={{ 
                                            background: "linear-gradient(to top, rgba(255, 255, 255, 0.944) 0%, rgba(255,255,255,0) 100%)",
                                            clipPath: "inset(0 0 15% 0)", // Coupe les 15% du bas
                                            bottom: "25px" // Ajustez cette valeur
                                          }} />
                                        )} */}
                                </motion.div>
                            </AnimatePresence>

                
                            {/* Lire plus/moins button */}
                            <div className="w-full flex justify-center">

                                <motion.button
                                    className="mt-2 px-4 py-1 text-sm border border-[#003851] text-[#003851] hover:bg-[#003851] hover:text-white rounded transition-colors"
                                    style={{ fontFamily: "Raleway" }}
                                    onClick={() => setIsTextExpanded(!isTextExpanded)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {isTextExpanded ? "Lire moins" : "Lire plus"}
                                </motion.button>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <section
                id="notre-histoire"
                className="min-h-screen min-w-screen flex flex-col justify-center items-center text-center px-6 relative"
            >
                <motion.h2
                    className="text-xl mt-16 xl:text-2xl 2xl:text-4xl font-medium text-[#212046] mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    NOTRE HISTOIRE
                </motion.h2>

                {/* Desktop version - full text with animations */}
                <div className="hidden lg:block">
                    <motion.p
                        className="text-[#141C48] xl:max-w-[1200px] text-[15px] tracking-[1px] 2xl:tracking-[2px] leading-[35px] 2xl:min-w-[1500px] xl:text-[17px] xl:leading-[45px] 2xl:text-[22px] 2xl:leading-[50px] mt-6"
                        style={{ fontFamily: "Raleway", color: "#003851" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Arena Property Development est une société marocaine de promotion immobilière qui s'impose comme un acteur clé du&nbsp;
                        secteur. Née avec une ambition claire de redéﬁnir les standards de l'immobilier, Arena combine innovation, qualité et&nbsp;
                        engagement envers la durabilité pour transformer les espaces de vie au Maroc.<br /><br />
                        Le groupe se distingue par sa capacité à conjuguer des visions locales et internationales grâce à des partenariats&nbsp;
                        stratégiques solides. Cette approche lui permet de tirer parti d'expertises diversiﬁées pour concevoir des projets qui&nbsp;
                        répondent aux besoins évolutifs du marché tout en intégrant les meilleures pratiques environnementales.<br /><br />
                        Avec une attention particulière portée à la création de valeur pour toutes les parties prenantes, Arena s'appuie sur des&nbsp;
                        actionnariats institutionnels pour garantir la pérennité et l'impact positif de ses investissements. Cette dynamique reﬂète&nbsp;
                        une stratégie à long terme, ancrée dans la conﬁance mutuelle et l'excellence opérationnelle.<br />
                        Le groupe poursuit son développement avec une ambition constante : devenir une référence incontournable en matière de&nbsp;
                        conception et de réalisation de projets immobiliers qui allient esthétisme, fonctionnalité, innovation et durabilité.<br />
                        <br />
                    </motion.p>
                    
                </div>

                {/* Mobile version - expandable text with LIRE PLUS button */}
                <div className="lg:hidden w-full">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.p
                                className="text-justify text-[#141C48] text-[15px] tracking-[1px] leading-[35px] mt-6"
                                style={{
                                    fontFamily: "Raleway",
                                    color: "#003851",
                                    height: isHistoryExpanded ? "auto" : "180px",
                                    overflow: "hidden"
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                Arena Property Development est une société marocaine de promotion immobilière qui s'impose comme un acteur clé du&nbsp;
                                secteur. Née avec une ambition claire de redéﬁnir les standards de l'immobilier, Arena combine innovation, qualité et&nbsp;
                                engagement envers la durabilité pour transformer les espaces de vie au Maroc.<br /><br />
                                Le groupe se distingue par sa capacité à conjuguer des visions locales et internationales grâce à des partenariats&nbsp;
                                stratégiques solides. Cette approche lui permet de tirer parti d'expertises diversiﬁées pour concevoir des projets qui&nbsp;
                                répondent aux besoins évolutifs du marché tout en intégrant les meilleures pratiques environnementales.<br /><br />
                                Avec une attention particulière portée à la création de valeur pour toutes les parties prenantes, Arena s'appuie sur des&nbsp;
                                actionnariats institutionnels pour garantir la pérennité et l'impact positif de ses investissements. Cette dynamique reﬂète&nbsp;
                                une stratégie à long terme, ancrée dans la conﬁance mutuelle et l'excellence opérationnelle.<br />
                                Le groupe poursuit son développement avec une ambition constante : devenir une référence incontournable en matière de&nbsp;
                                conception et de réalisation de projets immobiliers qui allient esthétisme, fonctionnalité, innovation et durabilité.<br />
                                <br />
                            </motion.p>

                            {/* Gradient fade effect at the bottom when collapsed */}
                           {/*  {!isHistoryExpanded && (
                                <motion.div
                                    className="h-24 bg-gradient-to-t from-white to-transparent w-full relative bottom-24"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}*/}
                        </motion.div>
                    </AnimatePresence>

                    <div className="w-full flex justify-center">
                        <motion.button
                            className="mt-2 px-4 py-1 text-sm border border-[#003851] text-[#003851] hover:bg-[#003851] hover:text-white rounded transition-colors"
                            style={{ fontFamily: "Raleway", fontWeight: "500" }}
                            onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
                            whileHover={{ scale: 1.05, backgroundColor: "#004b6e" }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                y: { delay: 0.3, duration: 0.5 },
                                opacity: { delay: 0.3, duration: 0.5 },
                                backgroundColor: { duration: 0.2 }
                            }}
                        >
                            {isHistoryExpanded ? "Lire moins" : "Lire plus"}
                        </motion.button>
                    </div>
                </div>
            </section>
            <Chiffres />
            <Organi />
            <section
                id="govi"
                className="h-auto min-w-screen w-screen flex flex-col justify-start items-center text-center  relative "
            >
                <img src={govimg.src} alt="govimg" className="grayscale w-full h-auto block" />
                <Gov />
            </section>


            <section id="DISPOSITIF"
                className="text-center flex flex-col justify-center items-center  bg-[#e5e5e5] h-auto">

                <p className=" text-[24px] mt-16 xl:text-2xl 2xl:text-4xl font-medium text-[#212046] mb-10 tracking-[1.1px]" style={{ fontFamily: "Romelio", color: "#003851" }}>
                    DISPOSITIF DE CONTROLE INTERNE
                </p>
                <p className="text-justify px-6 lg:px-0 lg:text-center lg:max-w-4xl 2xl:max-w-6xl mx-auto text-[15px] leading-[35px]  xl:text-[17px] xl:leading-[45px] 2xl:text-[22px] 2xl:leading-[50px] tracking-[1px] 2xl:tracking-[2px]" style={{ fontFamily: "Raleway", color: "#003851" }}>

                    Pour mieux accompagner les sujets de gouvernance et répondre de manière adéquate aux&nbsp;
                    problématiques et risques inhérents aux activités métiers, support et de pilotage, le Groupe a déployé&nbsp;
                    un dispositif de contrôle interne et de management des risques dans le but de créer et préserver la&nbsp;
                    valeur, les actifs et la réputation du Groupe. A cet eﬀet, ce dispositif basé sur les risques vise à&nbsp;
                    identiﬁer, mesurer et suivre les risques critiques auxquels le Groupe est confronté, à anticiper leur
                    évolution, et mettre en place des actions de maitrise des risques résiduels.<br />
                    Le contrôle des opérations et des procédures internes s’exerce de manière permanente ou périodique&nbsp;
                    sur trois couches de contrôle et à travers diﬀérents acteurs clés.<br />
                </p>
                <img src={thetwo.src} alt="thetwo" className="mx-auto w-[1000px] h-auto mt-20 mb-20"></img>

            </section>



            <section
                id="notre-groupe"
                className="min-h-screen flex flex-col justify-center  items-center text-center px-6 relative"
                style={{
                    backgroundImage: `url(${iso.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#003851] opacity-95"></div>
                <h2 className="text-xl relative z-10 xl:text-2xl 2xl:text-4xl font-medium mt-[25%] lg:mt-0 text-white mb-8">
                    DISPOSITIF DE MANAGEMENT DES RISQUES
                </h2>

                <p className="text-base relative z-10 text-[15px] mb-[10%] lg:mb-0 leading-[35px] text-[#141C48] tracking-[1px] 2xl:tracking-[2px] xl:text-[17px] 2xl:text-[22px]  xl:leading-[45px] 2xl:leading-[50px]  xl:max-w-4xl 2xl:max-w-6xl mt-2"
                    style={{ fontFamily: "Raleway", color: "white" }}
                >
                    Le Groupe a mis en œuvre un dispositif de management systématique et dynamique de ses risques,&nbsp;
                    en identiﬁant les risques inhérents à ses processus grâce à un exercice de cartographie des risques,&nbsp;
                    et en déﬁnissant une stratégie d’atténuation spéciﬁque pour chaque risque jugé critique. Notre&nbsp;
                    analyse des risques fait partie intégrante des processus opérationnels et décisionnels du Groupe.<br />
                    <br />
                    Le dispositif mis en place repose sur les directives de la norme ISO 31000. Un référentiel spéciﬁque a&nbsp;
                    été élaboré par le Groupe aﬁn d’uniformiser les pratiques et de fournir au Risk Manager les outils&nbsp;
                    nécessaires pour accomplir eﬃcacement ses missions.
                    <br />
                </p>
            </section>


            <section
                id='dispositif'
                className="relative flex flex-col justify-center items-center h-auto"
            >

                <h2 className="text-xl text-center mt-16 xl:text-2xl 2xl:text-4xl justify-center font-medium text-[#212046] mb-4 tracking-[1.1px]" style={{ fontFamily: "Romelio", color: "#003851" }}>
                    DISPOSITIF D’ETHIQUE ET CONFIDENTIALITE
                </h2>
                <div className="flex flex-col-reverse lg:flex-row items-center w-full">
                    <div className="w-full lg:w-1/2 flex justify-center mt-[-5%]">
                        <img
                            src={handss.src}
                            alt="hands"
                            className="xl:w-full xl:h-[520px]  2xl:w-[800px] 2xl:h-[600px] object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-6  2xl:ml-[3%]">
                        <p
                            className="w-auto mb-[8%] text-justify text-[15px] mt-[2%] leading-[35px] xl:text-[17px] xl:leading-[45px] 2xl:text-[22px] tracking-[1px] 2xl:tracking-[2px] 2xl:leading-[55px]"
                            style={{ fontFamily: "Raleway", color: "#003851" }}
                        >
                            Le Groupe veille à garantir un environnement éthique dans le cadre des
                            relations établies avec les diﬀérentes parties prenantes (collaborateurs,
                            clients, fournisseurs, partenaires, etc.)<br />
                            Cet engagement se traduit par la mise en place d’un code d’éthique visant à
                            clariﬁer les diﬀérentes situations susceptibles de générer des actions
                            contraires à l’éthique. Ce code prévoit entre autres :<br />
                            • Les règles d’éthique adoptées par le Groupe<br />
                            • Le comportement à adopter face à des informations conﬁdentielles<br />
                            • Les règles qui régissent l’acceptation des cadeaux<br />
                            • Les actions anti-corruption<br />
                            • L’engagement des uns envers les autres<br />
                            • Etc<br />
                            <br />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}