var page1 = document.querySelector("#page1")

var animatedBall = document.querySelector("#cursorBall")
var headline = document.querySelector("#headline")
var page2Headline = document.querySelector("#page2Header")

page1.addEventListener("mousemove", (event) => {
  gsap.to(animatedBall, {
    x: event.x,
    y: event.y,
  })
})

page1.addEventListener("mouseleave", (event) => {
  gsap.to(animatedBall, {
    scale: 0,
    opacity: 0,
  })
})

page1.addEventListener("mouseenter", (event) => {
  gsap.to(animatedBall, {
    scale: 1,
    opacity: 1,
  })
})

function JouiceHeading() {
  gsap.from("#headline span", {
    opacity: 0,
    y: 30,
    scrub: true,
    duration: 0.4,
    stagger: 0.1,
    yoyo: true,
  })

  gsap.to("#headline span", {
    opacity: 1,
    y: -30,
    scrub: true,
    stagger: 0.1,
    yoyo: true,
  })
}

JouiceHeading()

function TriggerLocomotive() {
  gsap.registerPlugin(ScrollTrigger)

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  })

  locoScroll.on("scroll", ScrollTrigger.update)

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  })

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update())

  ScrollTrigger.refresh()
}
TriggerLocomotive()

function Page2ParaAnimation() {
  gsap.from(".elem h1", {
    y: 170,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  })
}
Page2ParaAnimation()
