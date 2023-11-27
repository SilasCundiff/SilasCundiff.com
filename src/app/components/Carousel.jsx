"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import ProjectCard from "./ProjectCard";

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
const Carousel = () => {
  const containerRef = useRef(null);
  const ctxRef = useRef();
  const loop = useRef();
  const proxy = useRef(null);

  const horizontalLoop = (items, config) => {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      populateWidths = () =>
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) * 100 +
              gsap.getProperty(el, "xPercent")
          );
        }),
      getTotalWidth = () =>
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0),
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;
    populateWidths();
    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i) => xPercents[i],
    });
    gsap.set(items, { x: 0 });
    totalWidth = getTotalWidth();
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.updateIndex = () =>
      (curIndex = Math.round(tl.progress() * (items.length - 1)));
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    if (config.draggable && typeof Draggable === "function") {
      let wrap = gsap.utils.wrap(0, 1),
        ratio,
        startProgress,
        draggable,
        dragSnap,
        roundFactor,
        align = () =>
          loop.current.progress(
            wrap(startProgress + (draggable.startX - draggable.x) * ratio)
          ),
        syncIndex = () => tl.updateIndex();
      typeof InertiaPlugin === "undefined" &&
        console.warn(
          "InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club"
        );
      draggable = Draggable.create(proxy.current, {
        trigger: containerRef.current,
        type: "x",
        onPress() {
          startProgress = loop.current.progress();
          loop.current.progress(0);
          populateWidths();
          totalWidth = getTotalWidth();
          ratio = 1 / totalWidth;
          dragSnap = totalWidth / items.length;
          roundFactor = Math.pow(
            10,
            ((dragSnap + "").split(".")[1] || "").length
          );
          loop.current.progress(startProgress);
        },
        onDrag: align,
        onThrowUpdate: align,
        inertia: false,
        snap: (value) => {
          let n =
            Math.round(parseFloat(value) / dragSnap) * dragSnap * roundFactor;
          return (n - (n % 1)) / roundFactor;
        },
        onRelease: syncIndex,
        onThrowComplete: () => gsap.set(proxy, { x: 0 }) && syncIndex(),
      })[0];
    }

    return tl;
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(Draggable);
    ctxRef.current = gsap.context((self) => {
      const container = gsap.utils.selector(containerRef.current);
      const cards = gsap.utils.toArray(container(".card"));

      gsap.set(cards, {
        x: (i) => i * (container.innerWidth / 4),
      });

      loop.current = horizontalLoop(cards, {
        paused: true,
        center: true,
        repeat: -1,
        ease: "linear",
        draggable: true,
      });

      return () => ctx.revert();
    }, containerRef);
  }, []);

  const nextBtnClickHandler = () => {
    loop.current.vars.draggable = false;
    loop.current.next({ duration: 0.5 }).then(() => {
      loop.current.vars.draggable = true;
    });
  };

  const prevBtnClickHandler = () => {
    loop.current.vars.draggable = false;
    loop.current.previous({ duration: 0.5 }).then(() => {
      loop.current.vars.draggable = true;
    });
  };

  return (
    <div className="carousel-wrapper max-w-[1200px] relative">
      <div className="carousel-controls flex gap-4 justify-between">
        <button
          className="carousel-control prev"
          onClick={() => prevBtnClickHandler()}
        >
          Previous
        </button>
        <button
          className="carousel-control next"
          onClick={() => nextBtnClickHandler()}
        >
          Next
        </button>
      </div>
      <div
        className="carousel-container flex max-w-[900px] overflow-x-scroll"
        ref={containerRef}
      >
        <div className="proxy" ref={proxy}></div>
        <ProjectCard project={testProject} num="1" />
        <ProjectCard project={testProject} num="2" />
        <ProjectCard project={testProject} num="3" />
        <ProjectCard project={testProject} num="4" />
      </div>
    </div>
  );
};

export default Carousel;
