"use client";

import React,{ useState } from 'react';
import excellence from '@/assets/Excellence.png'
import innovation from '@/assets/Excellence.png'
import integrite from '@/assets/integrite.png'
import Responsabilite from '@/assets/Responsabilite.png'
import Respectmutuel from '@/assets/Respect-mutuel.png'
import Image from 'next/image';
import fleche from '@/assets/fleche.png'



type BlockName = 'excellence' | 'responsabilite' | 'innovation' | 'integrite' | 'respect';

const valeursContent: Record<BlockName, string> = {
  excellence: "Nous nous engageons résolument vers l'excellence en nous appliquant à dépasser les attentes et à repousser les limites en vue d'atteindre des résultats exceptionnels.",
  responsabilite: "Nous assumons intégralement notre responsabilité envers nos partenaires, nos clients et la société en adoptant une conduite rigoureuse, transparente et éthique.",
  innovation: "Fortement convaincus que l'innovation constitue le moteur essentiel du progrès, nous nous employons sans relâche à explorer de nouvelles idées et à intégrer les technologies émergentes, afin de demeurer en permanence à l'avant-garde du secteur immobilier.",
  integrite: "Nous construisons des relations solides et durables basées sur la transparence, l'intégrité et le respect mutuel.",
  respect: "Placer la diversité, la créativité et la passion de nos employés au centre de notre culture est fondamental pour nous. Nous nous engageons pleinement dans leur développement, conscients que leur réussite constitue également la nôtre.",
};


const Page = () => {

  const [activeBlock, setActiveBlock] = useState<BlockName | null>(null);

  const toggleBlock = (block: BlockName) => {
    setActiveBlock(prev => (prev === block ? null : block));
  };

  const blocks: { label: string; key: BlockName }[] = [
    { label: 'EXCELLENCE', key: 'excellence' },
    { label: 'RESPONSABILITÉ', key: 'responsabilite' },
    { label: 'INNOVATION', key: 'innovation' },
    { label: 'INTÉGRITÉ', key: 'integrite' },
    { label: 'RESPECT MUTUEL', key: 'respect' },
  ];
  

 

  
    return (
        <div className="font-sans antialiased">
            {/* Title Section */}
            <div className="pt-24 pb-3 lg:pb-6 lg:pt-12 text-center bg-[#E5E5E4]">
            <h1
                    className="overflow-hidden relative z-10 tracking-[4px] xl:tracking-[9px] text-gray-800 sm:pt-[10%]  xl:pt-[3%] text-[30px] sm:text-[60px] xl:text-[75px] 2xl:text-90px]"
                    style={{
                        fontFamily: "Romelio",
                        fontWeight: "100",
                        opacity: "0.1",
                    }}>
                    VISIONS&VALEURS
                </h1>
            </div>

            {/* Vision Section */}
            <div className="bg-[#15354F] text-white py-12 px-6 md:px-16 lg:px-32 relative ">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={fleche.src}
                        alt="fleche Background"
                        layout="fill"
                        objectFit="cover"
                        className="w-[50px] h-[50px]"
                    />
                </div>

                <div className="max-w-6xl lg:max-w-9xl mx-auto relative z-10">
                    <h2 className="text-center text-3xl md:text-4xl  mb-10 uppercase">NOTRE VISION</h2>
                    <div className="space-y-6 mt-6 text-justify">
    <p className="text-[15px] leading-[35px] xl:text-[17px] xl:leading-[45px] 2xl:text-[20px] 2xl:leading-[50px] tracking-[1px]"
       style={{fontFamily: "Raleway", color: "#fbfbfb"}}>
      Animés par la conviction que le succès naît d'une vision stratégique à long terme, d'un engagement envers l'excellence,
      et d'une responsabilité sincère envers nos communautés et notre environnement, nous redéfinissons le paysage urbain.
    </p>
    
    <p className="text-[15px] leading-[35px] xl:text-[17px] xl:leading-[45px] 2xl:text-[20px] 2xl:leading-[50px] tracking-[1px]"
       style={{fontFamily: "Raleway", color: "#fbfbfb"}}>
      Notre vision est de réinventer les espaces de vie, de travail et de loisirs, en créant des environnements qui enrichissent
      la vie des usagers et engendrent un impact positif et durable sur les villes.
    </p>

    <p className="text-[15px] leading-[35px] xl:text-[17px] xl:leading-[45px] 2xl:text-[20px] 2xl:leading-[50px] tracking-[1px]"
       style={{fontFamily: "Raleway", color: "#fbfbfb"}}>
      En tant que pionniers dans la réinvention des métropoles, ARENA s'investit pour excéder les attentes en excellence et
      durabilité. Nous prenons des décisions éclairées pour générer une valeur à long terme et contribuer positivement au tissu
      urbain.
    </p>

    <p className="text-[15px] leading-[35px] xl:text-[17px] xl:leading-[45px] 2xl:text-[20px] 2xl:leading-[50px] tracking-[1px]"
       style={{fontFamily: "Raleway", color: "#fbfbfb"}}>
      ARENA innove au-delà des normes de l'investissement immobilier, en établissant des partenariats stratégiques, y
      compris des initiatives de partenariat public-privé, pour sculpter l'avenir des espaces urbains. Notre objectif est
      d'identifier et réaliser des projets d'investissement bénéfiques pour nos clients tout en favorisant le développement
      durable et l'amélioration de la vie communautaire.
    </p>
                    </div>
                </div>
            </div>


            {/* Values Section */}
            <div className="py-16  bg-[#E5E4E2] px-6 md:px-8">
                <div
                    className="max-w-5xl mx-auto">
                    <h2 className="text-center text-3xl md:text-4xl font-medium text-gray-800 mb-10 lg:mb-10 uppercase">NOS VALEURS</h2>

                    <p className="text-center text-[#003851] text-base md:text-base text-[16px] xl:text-[18px] font-medium mb-12 md:mb-16 px-4 raleway-light">
                        NOUS SOMMES GUIDÉS PAR DES VALEURS FONDAMENTALES QUI DÉFINISSENT NOTRE APPROCHE DU TRAVAIL.
                    </p>

                             {/* Desktop Blocks */}
          <div className="hidden md:flex flex-col gap-0">
            {blocks.map((block, index) => (
              <div
                key={block.key}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse lg:ml-11 lg:rounded-r-[80px]' : 'lg:mr-28 lg:rounded-l-[80px]'} w-full rounded-lg overflow-hidden lg:shadow-[0px_32px_15px_-15px_rgba(0,_0,_0,_0.3)]`}>
                <div className="relative w-full md:w-[250px] bg-[#003851] text-white p-4 sm:p-6 flex flex-col items-center justify-center min-h-[180px]">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/4 h-2/4 bg-white rounded-full opacity-20 blur-xl"></div>
                  <h3 className="text-xl font-bold text-center">{block.label}</h3>
                </div>
                <div className="md:flex-1 p-6 md:p-8 flex items-center">
                  <p className={`text-[#4B6375] text-base raleway text-justify ${index % 2 === 0 ? 'lg:ml-52' : 'lg:mr-52'}`}>
                    {valeursContent[block.key]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-4">
            {blocks.map((block) => (
              <div key={block.key} className="border  rounded-lg overflow-hidden">
                <button
                  className="w-full bg-[#003851] text-white text-center text-xl font-bold py-4"
                  onClick={() => toggleBlock(block.key)}>
                  {block.label}
                </button>
                {activeBlock === block.key && (
                  <div className="p-4 bg-[#E5E4E2] text-[#4B6375] text-sm text-justify font-[Raleway] leading-[28px] tracking-wide">
                    {valeursContent[block.key]}
                  </div>
                )}
              </div>
            ))}
          </div>

                    </div>
                </div>
            </div>
        
    );
};

export default Page;