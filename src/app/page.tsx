import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../../components/Carousel";
import IconLink from "../../components/IconLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between text-slate-50">
      <section
        id="home"
        className="hero w-full h-[600px] mb-10 relative flex justify-center items-center flex-col p-4 pt-16 mt-24"
      >
        <div className="container">
          <h2 className="text-4xl text-sky-300 font-bold pb-4 tracking-wider">
            Hey, I&apos;m silas!
          </h2>
          <div className="flex flex-wrap text-sky-50">
            <div className="about-description ">
              <p className="text-xl pb-2 leading-8 tracking-wide max-w-[50ch]">
                I&apos;m a Full-stack Web developer with a passion for designing
                and developing beautiful websites and apps!
              </p>
              <p className="text-xl pb-2 leading-8 tracking-wide max-w-[50ch]">
                My go-to stack is React with Next + Tailwind, and I have two
                years of experience with WordPress theme development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container-full flex ">
        <section id="projects" className="projects my-12 text-sky-50 w-full">
          <div className="container mx-auto pb-4">
            <h2 className="text-4xl text-sky-300 font-bold pb-4 mt-20 tracking-wider">
              Projects
            </h2>
          </div>
          <div
            className="container
          mx-auto pb-4"
          >
            <div className="">
              <div>
                <h3 className="text-3xl text-sky-300 font-bold pb-4 mt-4 tracking-wider">
                  Zenify Three
                </h3>
                <p className="max-w-[50ch] pb-4">
                  An online audio visualizer that uses the Spotify API and
                  Three.js to allow users to zen out to their favorite songs.
                </p>
                <p className="pb-4 max-w-[50ch]">
                  Zenify 3 is a complete rewrite of the{" "}
                  <Link
                    className="text-sky-400"
                    href={"https://github.com/SilasCundiff/zenify"}
                  >
                    React app
                  </Link>{" "}
                  I made over 4 years ago.
                </p>
                <p className="mb-4 max-w-[50ch]">
                  Now, armed with years of experience, and a dream of my perfect
                  audio visualizer, I present Zenify Three.
                </p>
              </div>
              <div className="relative h-0 pb-[56.25%] rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ACyLbmm4WdM?si=DLMrnz2ViPDRRZG5"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="mt-4 pb-4">
              And, the video is less visually impressive due to framerate
              limitations and color de-saturation!
            </p>
            <div className="text-2xl flex space-x-4">
              <IconLink href="https://zenify.silascundiff.com">
                <span className="mr-2">GitHub </span>
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </IconLink>
              <IconLink href="https://github.com/SilasCundiff/zenify-three">
                <span className="mr-2">Live Site </span>
                <FontAwesomeIcon icon={faLaptop} size="1x" />
              </IconLink>
            </div>
            <p className="text-xs">
              The site requires a Spotify premium subscription due to API
              limitations.
            </p>

            <div className="bg-sky-50 p-4 rounded-lg mt-4 text-sky-950">
              <h2 className="text-sky-600 text-2xl font-semibold tracking-wide">
                The details
              </h2>
              <p className="pb-4">
                TL;DR - Spotify makes it very difficult to create a real-time
                audio visualizer.
              </p>
              <p className="pb-2">The challenge to overcome</p>
              <p className="pb-2">
                Spotify does not allow you to interface their playback with the
                Web Audio API used by most browser based visualizers. This
                presents a very difficult problem, because the Web Audio API
                does the heavy lifting for real time song analysis.
              </p>
              <p className="pb-2">
                Instead, they provide an API endpoint to retrieve song analysis
                for a track, which just returns a JSON object with data. This
                data by itself is essentially useless for real time
                visualization, as its meant to be used for more static
                visualizations, such as graphs or comparisons for different
                songs.
              </p>
              <p className="pb-2">
                So, I needed to find a way to get the track analysis provided by
                the API can loop through it in real time as the audio plays.
              </p>
              <p className="pb-2 mt-4">The solution</p>
              <p className="pb-2">
                I discovered a repo called{" "}
                <Link
                  className="text-sky-700"
                  href={"https://github.com/zachwinter/spotify-viz"}
                >
                  spotify-viz
                </Link>{" "}
                that achieves what I want, but with a small delay, and in
                vanilla JavaScript.
              </p>
              <p className="pb-2">
                I reimplemented their functionality in a way that would allow me
                to use it with React, as well as reducing the delay by listening
                to the Spotify Web SDK&apos;s state changes to know when to
                quickly re-fetch/re-sync the audio.
              </p>
              <p className="pb-2">
                The result was a class I could pass around my app to use within
                React Three Fiber&apos;s hooks to perform real time updates to
                the materials particles.
              </p>
            </div>
          </div>
          <h2 className="text-sky-300 text-2xl font-semibold tracking-wide mt-20">
            Additional Projects
          </h2>
          <Carousel />
        </section>
      </div>
      <div className="container mx-auto my-12 rounded-lg shadow-slate-200">
        <section id="about" className="about flex flex-col">
          <div>
            <h2 className="text-4xl text-sky-300 font-bold pb-4 mt-20 tracking-wider">
              About me
            </h2>
            <p className="text-xl pb-4 leading-8 tracking-wide max-w-[50ch]">
              I graduated from Southern Crescent Technical College in 2019 with
              a dual diploma in Web Design/Web Development and Computer
              Programming.
            </p>
            <p className="text-xl pb-4 leading-8 tracking-wide max-w-[50ch]">
              For the past two years, I worked for a company called Polyglot.
              Providing high quality WordPress websites to clients around the
              country. With the occasional React projects.
            </p>
            <p className="text-xl pb-4 leading-8 tracking-wide max-w-[50ch]">
              My strengths are in front-end development, utilizing both CSS and
              JavaScript to breath life into designs. As a bonus, I know enough
              back-end to be dangerous 😎
            </p>
            <p className="text-xl pb-4 leading-8 tracking-wide max-w-[50ch]">
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
            <div className="tech-stack basis-full grid md:grid-cols-2 grid-cols-1 mt-6 gap-4">
              <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
                <h3 className="text-sky-600 text-2xl font-semibold tracking-wide">
                  My Preffered Skills & Tools
                </h3>
                <ul className="skill-list text-sky-950 tracking-wide">
                  <li>JavaScript/TypeScript & React/Next.js</li>
                  <li>Three.JS/Shaders</li>
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
              {/* <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
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
                  <li>Svelte</li>
                  <li>Bun</li>
                  <li>Blender</li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>
        <section></section>
      </div>
      <footer className="container mx-auto mt-48 mb-12 px-4  rounded-lg shadow-slate-200">
        <section className="tools flex flex-col">
          <div className="flex flex-wrap items-center text-xl p-4">
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
