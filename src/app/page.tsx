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
        className="hero w-full min-h-screen relative flex justify-center items-center flex-col p-4"
      >
        <div className="card shadow-lg p-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] max-h-[300px] lg:max-h-[510px] h-full max-w-[600px] lg:max-w-[900px] flex justify-center items-center flex-col">
          <h1 className="invisible">Silas Cundiff</h1>
          <TitleSVGComponent />
          <h2 className="lg:text-3xl md:text-2xl text-xl font-normal -mt-8">
            Full Stack Developer & Designer
          </h2>
        </div>
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
