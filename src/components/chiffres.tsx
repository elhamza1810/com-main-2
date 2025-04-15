'use client';
import { useEffect, useState, useRef } from "react";
import React from "react";
import anis from "@/assets/Anis.jpg"
import Alogo from "@/assets/A-logo.png";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import bg from "@/assets/bg.jpg";



export default function chiffres(){

      
      interface AnimatedNumberProps {
        target: number; 
      }
      
      const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target }) => {
        const count = useMotionValue(0);
        const animationRef = useRef(false); 
      
        const formattedCount = useTransform(count, (latest) =>
          latest >= 1000 ? (latest / 1000).toFixed(1).replace(".0", "") + "k" : Math.floor(latest).toString()
        );
      
        const { ref, inView } = useInView({
          threshold: 0.1,
        });
      
        useEffect(() => {
          if (inView && !animationRef.current) {
            animationRef.current = true; 
      
            const controls = animate(count, target, { 
              duration: 2, 
              ease: "easeOut",
              onComplete: () => {
                animationRef.current = true;
              }
            });
      
            
          }
        }, [inView, count, target]);
      
        return (
          <motion.span
            ref={ref}
            className="text-[62px] xl:text-[90px] 2xl:text-[120px] mt-[20%] xl:mt-[40%] font-medium"
            style={{ fontFamily: "Romelio" }}
          >
            {formattedCount}
          </motion.span>
        );
      };
      return(
        <section
          id="vision-valeurs"
          className="marque py-16 text-white text-center flex flex-col min-h-screen justify-start items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 36, 52, 0.7), rgba(0, 36, 52, 0.7)), url(${bg.src})`,
            backgroundAttachment: 'fixed',
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <h2 className="text-2xl xl:text-2xl 2xl:text-4xl text-white">CHIFFRES CLES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 w-full max-w-6xl">
          {/* Stat 1 */}
          <div className="flex flex-col items-center mt-16">
          <AnimatedNumber target={100} />
          
            <p className="text-base text-[15px] xl:text[15px] 2xl:text-[17px] mt-[5%]  max-w-[240px]"style={{fontFamily: 'Raleway', fontWeight: '400'}}>
              Développements sur plus de 100 hectares de terrain, marquant l’empreinte d’ARENA dans
              le secteur de l’immobilier.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center mt-16">
          <AnimatedNumber target={70} />
          <p className="text-base text-[15px] xl:text[15px] 2xl:text-[17px] mt-[5%]  max-w-[240px]"style={{fontFamily: 'Raleway', fontWeight: '400'}}>
              Une équipe de 70 professionnels hautement qualifiés et dédiés à l’excellence.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center mt-16">
          <AnimatedNumber target={18000} />
          <p className="text-base text-[15px] xl:text[15px] 2xl:text-[17px] mt-[5%] max-w-[240px]"style={{fontFamily: 'Raleway', fontWeight: '400'}}>
              Construction de plus de 18&nbsp;000 unités résidentielles, contribuant à façonner des
              communautés dynamiques.
            </p>
          </div>
        </div>
      </section>
      );
    }