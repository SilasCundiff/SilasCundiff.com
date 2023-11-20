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
      <body
        className={`${poppinsFont.className} text-sky-100  bg-gradient-to-br from-blue-900 to-indigo-800`}
      >
        <header className="container flex justify-center items-center w-full py-4 fixed top-0 left-1/2 translate-x-[-50%] z-10">
          <a className="mr-auto -ml-2 flex" href="#home">
            <Image
              alt="Silas Cundiff Logo"
              src="/assets/logo.svg"
              width="50"
              height="50"
            />
            <span className="text-4xl font-semibold">Silvanus Designs</span>
          </a>
          <nav className="flex items-center space-x-8">
            <a className="font-light text-xl" href="#projects">
              Work
            </a>
            <a className="font-light text-xl" href="#about">
              About
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
