export const projects = [
  {
    title: "Zenify V2",
    description:
      "Zenify V2 is a complete recreation (Heavily WIP) of my first Spotify Particle Visualizer app. It uses Spotify API and OAuth, and Particle JS. The Particles in the background will change based on the music.",
    challenge:
      "The hard part isn't the OAuth, or the Spotify API. It's getting the visualizer to sync with the song.",
    outcome:
      "The outcome is still a work in progress. I know exactly what needs to be done to finish it, since I've already done it in the past with the previous Zenify. I just need to find the time to finish it.",
    url: "unavailable",
    githubUrl: "https://silascundiff.com",
    imgUrl: "./assets/ZenifyV2.png",
    skills: ["React", "Spotify API", "Particle.js", "Styled Components"],
  },
  {
    title: "My Previous Portfolio",
    description:
      "This is a portfolio I designed and developed over two years ago. I'm still proud of what I created, but I've learned a lot since then and I wanted to create something that better represented my current skillset.",
    challenge:
      "I wanted to create a portfolio that was unique and showcased my skills as a developer and designer.",
    outcome:
      "I used various techniques to create a artistic site with a fancy lottie darkmode/lightmode toggle and several other animations. I feel less like I need to prove myself now, so I've opted for a more minimalistic approach with my current portfolio.",
    url: "https://silvanusdesign.com/",
    githubUrl: "https://github.com/SilasCundiff/silascundiff",
    imgUrl: "./assets/SilasCundiffOld.png",
    skills: ["React", "Next", "Styled Components", "Lottie"],
  },
  {
    title: "Anna Griffin",
    description:
      "A site I helped maintain and update during my time at Polyglot Labs. It was a large scale WordPress eCommerce site that sells craft supplies, with tens of thousands of customer each month.",
    challenge:
      "We inherited this site from another agency. It was over 70GB in size, and had 100+ plugins. Load times suffered and plugin conflicts were common.",
    outcome:
      "I individually audited each plugin, and removed over 20 of them. I also implemented K6 load testing and removed unnecessary http requests to CSS and JS files. This resulted in a 30% decrease in load times.",
    url: "https://AnnaGriffin.com",
    imgUrl: "./assets/AnnaGriffin.png",
    skills: ["WordPress", "SCSS", "WooCommerce", "PHP", "K6", "Grafana"],
  },
];
