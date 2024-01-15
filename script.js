var page1 = document.querySelector("#page1");

var animatedBall = document.querySelector("#cursorBall");

page1.addEventListener("mousemove", (event) => {
  gsap.to(animatedBall, {
    x: event.x,
    y: event.y,
  });
});

page1.addEventListener("mouseleave", (event) => {
  gsap.to(animatedBall, {
    scale: 0,
    opacity: 0,
  });
});

page1.addEventListener("mouseenter", (event) => {
  gsap.to(animatedBall, {
    scale: 1,
    opacity: 1,
  });
});

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
