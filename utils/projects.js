export const projects = [
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
  {
    title: "Cuisine Quest",
    description:
      "A recipe search app using Spoonacular API. This site is no longer hosted, but the code is still available on GitHub.",
    challenge:
      "This app needed to store users preferences in a database to improve search results, it has the ability to blacklist ingredients, favorite recipes, and add intolerances to avoid.",
    outcome:
      "The hardest part was getting the data to sync properly between the UI and the database. I used Firebase, and after some initial setup, favoriting recipes and blacklisting ingredients would sync in real time, so you can favorite something on your phone and immediately see it pop up on your desktop browser.",
    githubUrl: "https://github.com/SilasCundiff/cuisinequest--next",
    imgUrl: "./assets/CuisineQuestV2.png",
    skills: ["React", "Next", "Tailwind", "Spoonacular API", "Firebase"],
  },
  {
    title: "Zenify V3",
    description:
      "Zenify V3 is a music visualizer that syncs with your Spotify account. Allowing you to play music in your browser and watch the visualizer react to the music.",
    challenge:
      "Syncing Spotify's audio analysis with the audio playback. Spotify doesn't provide a way to interface with the Audio API buffer, so I needed to figure out a way utilize the JSON the api provides to manipulate the particles.",
    outcome:
      "The app is fully functional, allowing you play music, to use the debug tool to change the shapes, and all while being mobile friendly.",
    githubUrl: "https://github.com/SilasCundiff/zenify-three",
    url: "https://zenify.silascundiff.com/",
    imgUrl: "./assets/Zenify-three.png",
    skills: [
      "React",
      "Spotify API",
      "Three.js",
      "Tailwind",
      "Shaders",
      "NextJS",
    ],
  },
  {
    title: "Rhonda Haran",
    description:
      "This is one of half a dozen realty websites I helped develop for Polyglot. It uses WordPress and an in-house plugin/theme combo to pull in data from the MLS and display it in a user friendly way.",
    challenge:
      "Various challenges included developing from a design, integrating new MLS listing features, updating the theme, and creating new templates.",
    outcome:
      "The results are a working website with the ability to search for listings and contact agents. It's a like a personalized Zillow for specific realtors.",
    url: "https://rhonda-haran.com/",
    imgUrl: "./assets/RhondaHaran.png",
    skills: ["React", "Next", "Tailwind", "Spoonacular API", "Firebase"],
  },
  {
    title: "Various WordPress sites",
    description:
      "Over my time at Polyglot Labs, I helped develop, update, and maintain over 50 WordPress sites. Ranging from small local sites such as ingriffin.com, to large scale eCommerce sites such as Anna Griffin.",
    challenge:
      "Various challenges included developing from a design, porting legacy sites to newer versions of WordPress/PHP, updating themes, and creating new templates/blocks, debugging, cleaning hacked sites, moving sites from one server to another, etc. I also helped update our in house theme to use webpack instead of gulp.",
    url: "https://ingriffin.com/",
    imgUrl: "./assets/ingriffin.png",
    skills: ["WordPress", "SCSS", "WooCommerce", "PHP", "Docker"],
  },
  {
    title: "Zelena Cidx importer - Real Estate",
    description:
      "I was given the task to create a frontend tool our developers could use to reimport MLS data for listing that were out of sync on our various MLS websites. Unfortunately, I can't show the full working site because it requires VPN access.",
    challenge:
      "We wanted something fast that could remotely call backend functions if needed. We also wanted to be able to see the status of each listing as it was being imported.",
    outcome:
      "I designed and developed the frontend UI completely from scratch in React and Tailwind, and used gRPC to communicate with a go backend that I helped create.",
    imgUrl: "./assets/Zelena.png",
    skills: ["React", "Tailwind", "gRPC", "Go", "Docker", "mongoDB"],
  },
];
