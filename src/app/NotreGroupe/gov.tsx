import React from "react";
import orgov from "@/assets/orgov.png"
const gov = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 min-w-screen min-h-auto mx-auto">
      {/* Text Section */}
      <div className=" text-justify  leading-relaxed">
        <p className="xl:max-w-2xl 2xl:max-w-3xl xl:leading-[43px] text-[15px] leading-[35px] xl:text-[17px] xl:leading-[40px] 2xl:text-[22px] tracking-[1px] 2xl:tracking-[2px] 2xl:leading-[50px]" style={{fontFamily: "Raleway", color: "#003851", fontWeight: "400"}}>
          Le Groupe dispose d'une structure de gouvernance solide, soutenue par un&nbsp; 
          dialogue constant et dynamique avec ses actionnaires. Cette approche témoigne de&nbsp; 
          la transparence et de l'engagement des différentes parties, tout en favorisant&nbsp; 
          des décisions justes qui contribuent à la création de valeur durable pour les&nbsp; 
          actionnaires et toutes les parties prenantes.<br/>
          La gouvernance du Groupe repose sur une composition d'organes pilotée par un&nbsp; 
          Conseil d'Administration. Dans le cadre de l'exercice de ses fonctions, le&nbsp; 
          Conseil d'Administration est soutenu par quatre comités spécialisés qui&nbsp; 
          surveillent de près les performances de l’entreprise ainsi que la bonne&nbsp; 
          exécution des différentes politiques et processus déployés en interne.&nbsp; 
        </p>
      </div>
      
      {/* Organigram Section */}
      <img src={orgov.src} alt="orgov" className="xl:h-[450px] 2xl:h-[600px] mt-[10%] xl:mt-[2%] 2xl:mt-0 w-auto xl:ml-[5%] xl:mr-[-6%] mb-[2%]"></img>
    </div>
  );
};

export default gov;
