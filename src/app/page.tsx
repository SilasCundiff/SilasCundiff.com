import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./components/Carousel";
import IconLink from "./components/IconLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-slate-50">
      <section
        id="home"
        className="hero w-full h-[600px] mb-10 relative flex justify-center items-center flex-col p-4 pt-16 mt-24 "
      >
        <div className="container">
          <h2 className="text-4xl text-sky-300 font-bold pb-4 tracking-wider">
            Hey, I&apos;m silas!
          </h2>
          <div className="flex flex-wrap text-sky-50">
            <div className="about-description basis-full ">
              <p className="text-xl pb-2 leading-8 tracking-wide w-[50ch]">
                I&apos;m a Full-stack Web developer with a passion for designing
                and developing beautiful websites and apps!
              </p>
              <p className="text-xl pb-2 leading-8 tracking-wide w-[50ch]">
                My go-to stack is React with Next + Tailwind, and I have two
                years of experience with WordPress theme development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container-full flex ">
        <section id="projects" className="projects my-12 text-sky-50 ">
          <div className="container mx-auto pb-4">
            <h2 className="text-4xl text-sky-300 font-bold pb-4 mt-20 tracking-wider">
              Projects
            </h2>
          </div>
          <Carousel />
        </section>
      </div>
      <div className="container mx-auto my-12 rounded-lg shadow-slate-200">
        <section id="about" className="about flex flex-col">
          <div>
            <h2 className="text-4xl text-sky-300 font-bold pb-4 mt-20 tracking-wider">
              About me
            </h2>
            <p className="text-xl pb-4 leading-8 tracking-wide w-[50ch]">
              I graduated from Southern Crescent Technical College in 2019 with
              a dual diploma in Web Design/Web Development and Computer
              Programming.
            </p>
            <p className="text-xl pb-4 leading-8 tracking-wide w-[50ch]">
              For the past two years, I worked for a company called Polyglot.
              Providing high quality WordPress websites to clients around the
              country. With the occasional React projects.
            </p>
            <p className="text-xl pb-4 leading-8 tracking-wide w-[50ch]">
              My strengths are in front-end development, utilizing both CSS and
              JavaScript to breath life into designs. As a bonus, I know enough
              back-end to be dangerous 😎
            </p>
            <p className="text-xl pb-4 leading-8 tracking-wide w-[50ch]">
              I&apos;m looking for a new position, where I can work with cool
              people to build awesome things!
            </p>
          </div>
        </section>
      </div>
      <div className="container mx-auto my-12  rounded-lg shadow-slate-200">
        <section className="tools flex flex-col">
          <div className="flex flex-wrap">
            <h2 className="text-4xl text-sky-300 font-bold pb-4 mt-20 tracking-wider">
              Tech & Tools
            </h2>
            <div className="tech-stack basis-full grid grid-cols-2 mt-6 gap-4">
              <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
                <h3 className="text-sky-600 text-2xl font-semibold tracking-wide">
                  My Preffered Skills & Tools
                </h3>
                <ul className="skill-list text-sky-950 tracking-wide">
                  <li>JavaScript/TypeScript & React/Next.js</li>
                  <li>CSS/SCSS/Tailwind/Bootstrap</li>
                  <li>WordPress (plugin, theme, and block development)</li>
                  <li>Node.js & Express</li>
                  <li>PHP & MySQL</li>
                  <li>Figma & Adobe XD</li>
                  <li>Adobe Photoshop & Illustrator</li>
                  <li>Google (it&apos;s an important skill!)</li>
                </ul>
              </div>
              <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
                <h3 className="text-emerald-600 text-2xl font-semibold tracking-wide">
                  Additional tools & Skills
                </h3>
                <ul className="skill-list text-sky-950 tracking-wide">
                  <li>Git & GitHub</li>
                  <li>VScode and WSL is my preffered environment</li>
                  <li>I like Docker for WP sites</li>
                  <li>Responsive Design</li>
                  <li>SEO/UI/UX</li>
                  <li>GSAP/Framer Motion/Lottie animations</li>
                  <li>APIs, asyncronouse requests, gRPC</li>
                </ul>
              </div>
              <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
                <h3 className="text-violet-600 text-2xl font-semibold tracking-wide">
                  Things I&apos;ve dabbled in
                </h3>
                <ul className="skill-list text-sky-950 flex gap-4 tracking-wide">
                  <li>GoLang</li>
                  <li>Java</li>
                  <li>C#</li>
                </ul>
              </div>
              <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
                <h3 className="text-pink-600 text-2xl font-semibold tracking-wide">
                  Things I&apos;d love to learn
                </h3>
                <ul className="skill-list text-sky-950 flex gap-4 tracking-wide">
                  <li>Three.JS</li>
                  <li>Svelte</li>
                  <li>Bun</li>
                  <li>Blender</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </div>
      <footer className="container mx-auto mt-48 mb-12  rounded-lg shadow-slate-200">
        <section className="tools flex flex-col">
          <div className="flex flex-wrap items-center text-xl pb-4">
            This site was built with Next.js, Tailwind, and TypeScript{" "}
            <span className="ml-2">
              <IconLink href="https://github.com/SilasCundiff/SilasCundiff.com">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </IconLink>
            </span>
          </div>
        </section>
      </footer>
    </main>
  );
}
