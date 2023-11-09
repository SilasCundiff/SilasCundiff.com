import Image from "next/image";
import localFont from "next/font/local";

const rockyBillyFont = localFont({
  src: "./Rockybilly.ttf",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-slate-800">
      <section
        id="home"
        className="hero w-full h-screen relative flex justify-center items-center flex-col"
      >
        <h1
          className={`${rockyBillyFont.className} font-semibold text-4xl mb-16`}
        >
          Silas Cundiff
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
      <section
        id="about"
        className="about h-screen container bg-slate-100 mx-auto mt-24 p-8 rounded-t-lg"
      >
        <h2>About</h2>
      </section>
      <section
        id="projects"
        className="projects h-screen container bg-slate-100 mx-auto p-8 rounded-b-lg mb-24"
      >
        <h2>Projects</h2>
      </section>
    </main>
  );
}
