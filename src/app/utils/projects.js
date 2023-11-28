export const projects = [
  {
    title: "Zenify",
    description:
      'The first version of a Spotify Visualizer that I built. It uses Spotify\'s API to allow a user to listen to music and on screen particles would "dance" to the music!',
    url: "unavailable",
    githubUrl: "https://silascundiff.com",
    imgUrl:
      "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
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
