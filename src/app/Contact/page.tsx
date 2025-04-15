"use client"
import Image from "next/image"
import { useState } from "react"
import img from "@/assets/A-logob.png"
import img2 from "@/assets/shutterstock_2482950157.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <section
        className="relative min-h-[1800px]  w-full h-[260vh] sm:h-[300vh] xl:h-[260vh] flex flex-col items-center bg-cover bg-center px-4"
        >        
        {/* Grayscale background image div */}
        <div 
            className="absolute lg:-top-6 lg:left-0 xl:bg-[length:120%] 2xl:bg-[length:130%] 2xl:-top-20 2xl:left-4  right-0 w-full h-full z-0"
            style={{
                backgroundImage: `url(${img.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top", 
                opacity:0.03
            }}
        ></div>
        
        <h1
          className="overflow-hidden relative z-10 tracking-[4px] xl:tracking-[9px] text-gray-800 pt-[25%] sm:pt-[10%] xl:pt-[7%] text-[35px] sm:text-[70px] xl:text-[85px] 2xl:text-[100px]"
          style={{
            fontFamily: "Romelio",
            fontWeight: "100",
            opacity: "0.1",
          }}>
          CONTACT
        </h1>

        <div className="w-full max-w-6xl mx-auto mt-56 flex flex-col lg:flex-row">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 pr-8 mt-4">
            <p className="2xl:ml-[-35%] text-[30px] xl:text-[40px] tracking-[2px] font-[200] leading-[1.4] 2xl:text-[57px] 2xl:font-[200] xl:tracking-[4px] xl:leading-[1.4] text-[#1a2041]">
              CONTACTEZ <br />
              NOS EXPERTS <br />
              DÈS AUJOURD&apos;HUI
            </p>

            <p
              className="2xl:ml-[-35%] mt-4 text-[17px] tracking-[1px] font-[400] leading-[1.2] 2xl:text-[22px] xl:leading-[2.4] text-[#1a2041]"
              style={{ fontFamily: "Raleway" }}
            >
              N&apos;hésitez pas à nous contacter pour toute demande&nbsp; 
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              ou assistance. Que ce soit pour des questions sur&nbsp; 
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              nos services ou un besoin de support, nous&nbsp; 
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              sommes là pour vous aider.
            </p>

            <p
              className="2xl:ml-[-35%] mt-3 tracking-[1px] text-[10px] font-[400] leading-[1.4] 2xl:text-[12px] xl:leading-[2.1] text-[#1a2041]"
              style={{ fontFamily: "Raleway" }}
            >
              La Société collecte vos données personnelles pour la gestion des clients. Ce traitement&nbsp; 
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              a fait l'objet d'une déclaration / demande d'autorisation auprès de la CNDP sous le&nbsp; 
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              numéro D-GC-724/2020.
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              Vous pouvez vous adresser à la Société pour exercer vos droits d&apos;accès, de rectiﬁcation&nbsp; 
              <span className="hidden xl:block" style={{lineHeight: '1px'}}><br/></span>
              et d&apos;opposition conformément aux dispositions de la loi 09-08
            </p>
          </div>

          {/* Right column - Form */}
          <div className="lg:w-xl pl-0 lg:pl-28 mt-24 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <input
                  type="text"
                  placeholder="Nom*"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full 2xl:text-[27px] pt-[1rem] pb-[1rem] xl:pt-[3rem] xl:pb-[1rem] bg-transparent border-b mb-6 border-black rounded-none focus:outline-none focus:border-black transition-colors placeholder:text-black" 
                  style={{ fontFamily: "Raleway", fontWeight: "250", letterSpacing: "2px"}}
                />
                <input
                  type="text"
                  placeholder="Prénom*"
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className="w-full 2xl:text-[27px] pt-[-1rem] pb-[1rem] xl:pt-[3rem] xl:pb-[1rem] bg-transparent border-b mb-6 border-black rounded-none focus:outline-none focus:border-black transition-colors placeholder:text-black" 
                  style={{ fontFamily: "Raleway", fontWeight: "250", letterSpacing: "2px"}}
                />
              </div>

              <input
                type="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full 2xl:text-[27px] pt-[1rem] pb-[1rem] xl:pt-[1rem] xl:pb-[1rem] bg-transparent border-b mb-6 border-black rounded-none focus:outline-none focus:border-black transition-colors placeholder:text-black" 
                style={{ fontFamily: "Raleway", fontWeight: "250", letterSpacing: "2px"}}
              />

              <input
                type="email"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full 2xl:text-[27px] pt-[1rem] pb-[1rem] xl:pt-[2.7rem] xl:pb-[1rem] bg-transparent border-b mb-6 border-black rounded-none focus:outline-none focus:border-black transition-colors placeholder:text-black" 
                style={{ fontFamily: "Raleway", fontWeight: "250", letterSpacing: "2px"}}
              />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="w-8 h-8 border border-black bg-transparent appearance-none checked:bg-black checked:border-black"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm pt-[2rem] pb-[2rem] 2xl:text-[25px] font-[100] text-black"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "250",
                    letterSpacing: "2px",
                  }}
                >
                  Oui, abonnez-moi à votre newsletter
                </label>
              </div>

              <button
                type="submit"
                className="bg-transparent 2xl:text-[25px] font-[250] hover:bg-black text-black border border-black rounded-none px-8 py-2"
                style={{ fontFamily: "Raleway", fontWeight: "250", letterSpacing: "2px" }}
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <Image 
            src={img2} 
            alt="Bottom Image" 
            className="w-full object-cover" 
            layout="responsive"
          />
        </div>
      </section>
    </div>
  )
}

export default Contact