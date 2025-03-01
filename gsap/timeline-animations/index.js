let flag = false;

const menuIcon = document.querySelector(".menu-open");
const closeIcon = document.querySelector(".menu-close");
const full = document.querySelector(".full");
let navLinks = document.querySelectorAll(".nav-links");

menuIcon.addEventListener("click", (e) => {
    full.style.right = "0";
    flag = true;
})
closeIcon.addEventListener("click", (e) => {
    full.style.right = "-40vw";
});

const timeline = gsap.timeline();
if(flag) {
    // navLinks.forEach((link) => {
    //     console.log(link);
    // })    
}