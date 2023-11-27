import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
