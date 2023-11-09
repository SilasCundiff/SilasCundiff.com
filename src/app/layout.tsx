import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Silas Cundiff",
  description: "A portfolio of my work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} text-slate-900`}>
        <header className="flex justify-center items-center w-full p-4 fixed top-0 left-1/2 translate-x-[-50%] z-10">
          <nav className="flex items-center space-x-4 ">
            <a className="font-light text-xl" href="#about">
              About
            </a>
            <a className="px-8" href="#home">
              <Image
                alt="Silas Cundiff Logo"
                src="/assets/logo.svg"
                width="50"
                height="50"
              />
            </a>
            <a className="font-light text-xl" href="#projects">
              Projects
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
