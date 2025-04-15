import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30 bg-[#003851] shadow-sm w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-8 md:space-x-12" style={{fontFamily: "Raleway"}}>
            {/* Left Links */}
            <Link href="NotreGroupe" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
              NOTRE GROUPE
            </Link>
            <Link href="V&V" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
              VISION&VALEURS
            </Link>
            <Link href="NosMetiers" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
              NOS METIERS
            </Link>
            
            {/* Logo as Center Link */}
            <Link href="/" className=" flex items-center ">
              <Image
                src={logo}
                alt="Logo"
                width={130}
                height={50}
                className="h-auto w-[200px] mt-[-6%] ml-[7%]"
                priority
              />
            </Link>
            
            {/* Right Links */}
            <Link href="NosMarques" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
              NOS MARQUES
            </Link>
            <Link href="/#actualites" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
              ACTUALITES
            </Link>
            <Link href="Carriere" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
              CARRIERE
            </Link>
            <Link href="Contact" className="text-white hover:text-gray-200 xl:text-[12px] 2xl:text-[14px] xl:tracking-[2px] 2xl:tracking-[4px]" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}