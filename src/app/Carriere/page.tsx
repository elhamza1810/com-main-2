"use client"
import Image from "next/image"
import { useState } from "react"
import img from "@/assets/A-logob.png"
import img2 from "@/assets/wearehiring.png"
import { Upload, X } from "lucide-react"

const Carriere = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative min-h-screen w-full flex flex-col items-center bg-cover bg-center px-4">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            opacity: 0.03
          }}
        ></div>

        <h1
          className="relative z-10 mt-[80px] md:mt-[100px] tracking-[4px] text-gray-800 text-[35px] sm:text-[70px] xl:text-[85px]"
          style={{
            fontFamily: "Romelio",
            fontWeight: "100",
            opacity: "0.1",
          }}
        >
          CARRIÈRE
        </h1>

        <div className="relative z-10 mt-20 text-center max-w-6xl  text-[#1a2041]">
          <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-light leading-snug mb-6">
            REJOIGNEZ UNE AVENTURE HUMAINE ET AMBITIEUSE
          </h2>

          <p
            className="mt-20 text-[17px] tracking-[1px] font-[400] leading-[1.6] text-[#1a2041]"
            style={{ fontFamily: "Raleway" }}
          >
            Chez <strong>Arena</strong>, nous pensons que chaque projet naît d'une vision, mais qu’il se réalise grâce à des femmes et des hommes engagés, créatifs et passionnés.<br /><br />
            Même en l’absence de postes à pourvoir, nous sommes toujours ouverts aux candidatures spontanées. <br /><br />
            Que vous soyez architecte, ingénieur, commercial, financier ou passionné(e) par l’univers de la promotion immobilière, nous serions ravis de découvrir votre profil.<br /><br />
            Rejoindre <strong>Arena</strong>, c’est contribuer à imaginer et façonner les espaces de vie de demain.
          </p>

          {!showForm && (
            <div className="mt-20 flex justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#1a2041] hover:bg-[#293267] text-white px-6 py-3 rounded-md text-sm tracking-wide transition duration-300"
              >
                Postulez ou envoyez votre candidature spontanée
              </button>
            </div>
          )}
        </div>

        {/* Image en bas */}
        <div className="relative w-full mt-10">
          <Image
            src={img2}
            alt="Bottom Image"
            className="w-full object-cover"
            layout="responsive"
          />
        </div>

        {/* Formulaire Popup */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center px-4">
            <div className="relative bg-white border border-gray-300 rounded-xl p-6 w-full max-w-3xl shadow-xl">
              {/* Bouton Fermer */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nom*</label>
                    <input type="text" className="w-full border-b border-gray-300 outline-none focus:border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Prénom*</label>
                    <input type="text" className="w-full border-b border-gray-300 outline-none focus:border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail*</label>
                    <input type="email" className="w-full border-b border-gray-300 outline-none focus:border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Téléphone*</label>
                    <input type="text" className="w-full border-b border-gray-300 outline-none focus:border-gray-600" />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows={4} className="w-full border-b border-gray-300 outline-none focus:border-gray-600" />
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                  <label className="flex items-center gap-2 border px-4 py-2 rounded-md cursor-pointer">
                    <Upload size={16} />
                    <span>Soumettez votre CV</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms" className="text-sm">J’accepte les termes et conditions.</label>
                </div>

                <button
                  type="submit"
                  className="mt-6 bg-[#003333] hover:bg-[#005555] text-white px-6 py-3 text-sm rounded-md"
                >
                  Soumettre votre candidature
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Carriere
