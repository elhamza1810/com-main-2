import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import MobileSidebar from "@/components/MobileNavBar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Arena",
  description: "Arena property Developpement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <MobileSidebar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
