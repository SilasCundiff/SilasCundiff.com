import Image from "next/image";
import localFont from "next/font/local";
import TitleSVGComponent from "./components/title-svg";

const rockyBillyFont = localFont({
  src: "./assets/Rockybilly.ttf",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-slate-800">
      <section
        id="home"
        className="hero w-full h-screen relative flex justify-center items-center flex-col"
      >
        <h1
          className={`${rockyBillyFont.className} font-semibold text-6xl mb-16`}
          title="Silas Cundiff"
        >
          <TitleSVGComponent />
        </h1>
        <h2 className="text-2xl font-normal">
          Full Stack Developer & Designer
        </h2>
        {/* hero image background */}
        <Image
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          alt="white paper background"
          src="/assets/white-background.jpg"
          width="500"
          height="500"
        />
      </section>
      <div className=" container  mx-auto my-24 p-8 rounded-lg shadow-slate-200 shadow-lg">
        <section id="about" className="about h-screen ">
          <h2>About</h2>
        </section>
        <section id="projects" className="projects h-screen">
          <h2>Projects</h2>
        </section>
      </div>
    </main>
  );
}
