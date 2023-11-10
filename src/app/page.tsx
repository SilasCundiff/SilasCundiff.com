import TitleSVGComponent from "./components/title-svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-slate-800">
      <section
        id="home"
        className="hero w-full min-h-screen relative flex justify-center items-center flex-col p-4"
      >
        <div className="card p-8 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] max-h-[300px] lg:max-h-[510px] h-full max-w-[600px] lg:max-w-[900px] flex justify-center items-center flex-col">
          <h1 className="invisible">Silas Cundiff</h1>
          <TitleSVGComponent />
          <h2 className="lg:text-3xl md:text-2xl text-xl text-sky-700 font-semibold -mt-8 mb-8">
            Web Developer & Designer
          </h2>
        </div>
      </section>
      <div className=" container max-w-[900px]  mx-auto my-24 p-8  ">
        <section id="about" className="about flex flex-col">
          <h2 className="text-4xl text-sky-800 font-bold pb-4">
            Hey, I'm silas!
          </h2>
          <div className="flex flex-wrap">
            <div className="about-description basis-full ">
              <p className="text-xl pb-4 leading-8">
                I'm a Web developer with a passion for designing and developing
                beautiful websites and apps. My go-to stack for React is Next
                with Tailwind.
              </p>
              <p className="text-xl pb-4 leading-8">
                For 5 years, I attended Southern Crescent Technical College, and
                received 2 diplomas. One in Web Design and Development, and the
                other in Computer Programming.
              </p>
              <p className="text-xl pb-4 leading-8">
                For the past two years, I worked for a company called Polyglot.
                Providing high quality WordPress websites to clients around the
                country. With the occasional React projects, where I could truly
                flex my skills.
              </p>
            </div>
            <div className="tech-stack basis-full grid grid-cols-2 mt-6 gap-4">
              <div className=" p-4 rounded-lg bg-sky-100 shadow-lg">
                <h3 className="text-sky-600 text-2xl font-semibold">
                  My Preffered Skills & Tools
                </h3>
                <ul className="skill-list">
                  <li>JavaScript/TypeScript & React/Next.js</li>
                  <li>CSS/SCSS/Tailwind/Bootstrap</li>
                  <li>WordPress (plugin, theme, and block development)</li>
                  <li>Node.js & Express</li>
                  <li>PHP & MySQL</li>
                  <li>Figma & Adobe XD</li>
                  <li>Adobe Photoshop & Illustrator</li>
                  <li>Google (it's an important skill!)</li>
                </ul>
              </div>
              <div className=" p-4 rounded-lg bg-emerald-100 shadow-lg">
                <h3 className="text-emerald-600 text-2xl font-semibold">
                  Additional Skills & Tools
                </h3>
                <ul className="skill-list">
                  <li>Git & GitHub</li>
                  <li>VScode and WSL is my preffered environment</li>
                  <li>I like Docker for WP sites</li>
                  <li>Responsive Design</li>
                  <li>SEO/UI/UX</li>
                  <li>GSAP/Framer Motion/Lottie animations</li>
                  <li>APIs, asyncronouse requests, gRPC</li>
                </ul>
              </div>
              <div className=" p-4 rounded-lg bg-violet-100 shadow-lg">
                <h3 className="text-violet-600 text-2xl font-semibold">
                  Things I've dabbled in
                </h3>
                <ul className="skill-list">
                  <li>GoLang</li>
                  <li>Java</li>
                  <li>C#</li>
                </ul>
              </div>
              <div className=" p-4 rounded-lg bg-pink-100 shadow-lg">
                <h3 className="text-pink-600 text-2xl font-semibold">
                  Things I'd love to learn
                </h3>
                <ul className="skill-list">
                  <li>Three.JS</li>
                  <li>Svelte</li>
                  <li>Bun</li>
                  <li>Blender</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="projects h-screen">
          <h2>Projects</h2>
        </section>
      </div>
    </main>
  );
}
