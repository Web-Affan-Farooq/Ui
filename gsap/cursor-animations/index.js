console.log("Hello world");
let cont = document.querySelector(".main");
let cursorBall =  document.querySelector(".cursor");

cont.addEventListener("mousemove", (e) => {
    // console.log(e.x);
    // console.log(e.y);
    gsap.to(".cursor", {
        x:e.x,
        y:e.y,
        duration:0.2
    })
});

let images = document.querySelectorAll(".image");
let overlays = document.querySelectorAll(".overlay");


images.forEach((image, index,) => {
    image.addEventListener("mouseenter", (e) => {
        gsap.to(".cursor", {
            scale:2,
        });
        cursorBall.style.background = "transparent";
        overlays[index].style.zIndex = "20";
    })
    image.addEventListener("mouseleave", (e) => {
        gsap.to(".cursor", {
            scale:1,
        });
        cursorBall.style.background = "white";
        overlays[index].style.zIndex = "0";
    })
})