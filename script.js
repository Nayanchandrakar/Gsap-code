var page1 = document.querySelector("#page1");

var animatedBall = document.querySelector("#cursorBall");

page1.addEventListener("mousemove", (event) => {
  gsap.to(animatedBall, {
    x: event.x,
    y: event.y,
  });
});
