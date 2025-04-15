"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import large from "@/assets/large.png"
const positions = [
  {
    id: 1,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 0,
    children: [2, 3, 4, 5, 6],
  },
  {
    id: 2,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [7],
  },
  {
    id: 3,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [8],
  },
  {
    id: 4,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [9],
  },
  {
    id: 5,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [10],
  },
  {
    id: 6,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 1,
    children: [11],
  },
  {
    id: 7,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
  },
  {
    id: 8,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
  },
  {
    id: 9,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
  },
  {
    id: 10,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
    children: [12, 13, 14],
  },
  {
    id: 11,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 2,
  },
  {
    id: 12,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 3,
  },
  {
    id: 13,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 3,
  },
  {
    id: 14,
    title: "PRÉSIDENT-DIRECTEUR GÉNÉRAL",
    level: 3,
  },
];

export default function organi() {
  const [lines, setLines] = useState<Array<{ from: DOMRect; to: DOMRect }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLines = () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.getElementsByClassName('org-box');
      const newLines: Array<{ from: DOMRect; to: DOMRect }> = [];

      positions.forEach(position => {
        if (position.children) {
          const parentElement = document.getElementById(`box-${position.id}`);
          position.children.forEach(childId => {
            const childElement = document.getElementById(`box-${childId}`);
            if (parentElement && childElement) {
              const parentRect = parentElement.getBoundingClientRect();
              const childRect = childElement.getBoundingClientRect();
              const containerRect = containerRef.current!.getBoundingClientRect();

              const from = new DOMRect(
                parentRect.x - containerRect.x,
                parentRect.y - containerRect.y,
                parentRect.width,
                parentRect.height
              );
              const to = new DOMRect(
                childRect.x - containerRect.x,
                childRect.y - containerRect.y,
                childRect.width,
                childRect.height
              );
              newLines.push({ from, to });
            }
          });
        }
      });

      setLines(newLines);
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    return () => window.removeEventListener('resize', updateLines);
  }, []);

  return (
    <main className="min-h-screen bg-[#e5e5e5] py-12 px-4">
      <div className="max-screen mx-auto space-y-16">
        {/* Organisation Section */}
        <section className="text-center space-y-6">
          <h1 className=" text-xl mt-4 xl:text-2xl 2xl:text-4xl  text-white"style={{fontFamily: "Romelio", color: "#003851"}}>
            ORGANISATION
          </h1>
          <p className="max-w-4xl mx-auto text-[15px] leading-[35px] tracking-[1px] 2xl:tracking-[2px] lg:text-[20px]  xl:text-[17px] xl:leading-[45px] text-white 2xl:leading-[50px] 2xl:text-[22px]" style={{fontFamily: "Raleway", color: "#003851"}}>
            La force du Groupe Arena Property Development repose sur l'agilité de son organisation et l'expertise&nbsp;  
            pluridisciplinaire de ses collaborateurs. Sous la direction de notre CEO, chaque direction s'efforce à&nbsp;  
            atteindre l'excellence tout en garantissant un leadership efficace. Cette configuration permet au Groupe&nbsp; 
             d'adresser de manière adéquate les attentes de ses clients et partenaires.
          </p>
        </section>

        {/* Organigramme Section */}
        <section className="text-center  space-y-6">
        <h1 className=" text-xl xl:text-2xl 2xl:text-4xl mt-[6%] mb-[3%] text-white"style={{fontFamily: "Romelio", color: "#003851"}}>
            ORGANIGRAMME
          </h1>
          <img src={large.src} alt="large" className="2xl:w-screen 2xl:h-auto xl:px-24 2xl:px-12"></img>
          
        </section>
        <section className="flex justify-center items-center">
        <h1 className=" text-xl mt-8 xl:text-2xl 2xl:text-4xl    text-white"style={{fontFamily: "Romelio", color: "#003851"}}>
            GOUVERNANCE
        </h1>
        </section>
      </div>
    </main>
  );
}