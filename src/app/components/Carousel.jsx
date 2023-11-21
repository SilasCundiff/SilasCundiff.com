"use client";
import React, {
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
  useLayoutEffect,
} from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ProjectCard from "./ProjectCard";
import { horizontalLoop } from "../utils/gsapUtils";

const testProject = {
  title: "Test Project",
  description:
    "This is a test project, this is a longer description explaining what the card contains",
  url: "https://silascundiff.com",
  githubUrl: "https://silascundiff.com",
  imgUrl:
    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
  skills: ["React", "Next", "Tailwind"],
};

// TODO: Add controls to pause/play, and to go to next/previous card
// TODO Make it so that the cards are draggable
const Carousel = () => {
  const scopeRef = useRef(null);
  const containerRef = useRef(null);
  const loop = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(Draggable);
      const container = gsap.utils.selector(containerRef.current);
      const cards = gsap.utils.toArray(container(".card"));
      console.log(cards);

      gsap.set(cards, { x: (i) => i * (container.innerWidth / 12) });

      loop.current = horizontalLoop(
        cards,
        {
          paused: true,
          draggable: true,
          center: true,
          repeat: -1,
          ease: "linear",
          dragClickables: true,
        },
        loop
      );
      return () => ctx.revert();
    }, scopeRef);
  }, []);

  return (
    <div
      className="carousel-wrapper overflow-x-scroll max-w-[1400px]"
      ref={scopeRef}
    >
      <div className="carousel-container flex" ref={containerRef}>
        <ProjectCard project={testProject} />
        <ProjectCard project={testProject} />
        <ProjectCard project={testProject} />
        <ProjectCard project={testProject} />
      </div>
    </div>
  );
};

export default Carousel;
