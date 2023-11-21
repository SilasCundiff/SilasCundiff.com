import Carousel from "./components/Carousel";
import ProjectCard from "./components/ProjectCard";

const testProject = {
  title: "Test Project",
  description: "This is a test project",
  url: "https://silascundiff.com",
  githubUrl: "https://silascundiff.com",
  imgUrl:
    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  skills: ["React", "Next", "Tailwind"],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-slate-50">
      <section
        id="home"
        className="hero w-full min-h-[900px] relative flex justify-center items-center flex-col p-4"
      >
        <div className="container">
          <h2 className="text-4xl text-sky-200 font-bold pb-4">
            Hey, I'm silas!
          </h2>
          <div className="flex flex-wrap text-sky-50">
            <div className="about-description basis-full ">
              <p className="text-xl pb-4 leading-8">
                I'm a Full-stack Web developer with a passion for designing and
                developing beautiful websites and apps! My strengths are in
                front-end development, utilizing CSS and JavaScript to breath
                life into design.
              </p>
              <p className="text-xl pb-4 leading-8">
                My go-to stacks is React with Next + Tailwind.
              </p>
              <p className="text-xl pb-4 leading-8">
                For the past two years, I worked for a company called Polyglot.
                Providing high quality WordPress websites to clients around the
                country. With the occasional React projects.
              </p>
              <p className="text-xl pb-4 leading-8">
                Now I'm looking for a new position, where I can work with cool
                people to build awesome things!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container-full flex">
        <section id="projects" className="projects my-24 text-sky-50 ">
          <div className="container mx-auto pb-4">
            <h2 className="text-4xl text-sky-200 font-bold pb-4 mt-20">
              Projects
            </h2>
          </div>
          <Carousel>
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
            <ProjectCard project={testProject} />
          </Carousel>
        </section>
      </div>
      <div className="container mx-auto my-24 p-8 rounded-lg shadow-slate-200">
        <section id="about" className="about flex flex-col">
          <div className="flex flex-wrap">
            <h2 className="text-4xl text-sky-200 font-bold pb-4 mt-20">
              Tech & Tools
            </h2>
            <div className="tech-stack basis-full grid grid-cols-2 mt-6 gap-4">
              <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
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
              <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
                <h3 className="text-emerald-600 text-2xl font-semibold">
                  Additional tools & Skills
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
              <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
                <h3 className="text-violet-600 text-2xl font-semibold">
                  Things I've dabbled in
                </h3>
                <ul className="skill-list flex gap-4">
                  <li>GoLang</li>
                  <li>Java</li>
                  <li>C#</li>
                </ul>
              </div>
              <div className=" p-4 rounded-lg  shadow-lg bg-sky-50">
                <h3 className="text-pink-600 text-2xl font-semibold">
                  Things I'd love to learn
                </h3>
                <ul className="skill-list flex gap-4">
                  <li>Three.JS</li>
                  <li>Svelte</li>
                  <li>Bun</li>
                  <li>Blender</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
