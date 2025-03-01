let heading = document.querySelector(".section-1-heading");

let clutter = ``;
heading.innerText.split("").forEach((e, index) => {
    if(index >=5) {
        clutter += `<span class="a">${e}</span>`
    }else {
        clutter += `<span class="a">${e}</span>`
    }
});

heading.innerHTML = clutter;
 
// gsap.from(".b", {
//     y:100,
//     opacity:0,
//     stagger:0.1,
//     duration:0.5,
// });

// gsap.from(".a", {
//     y:100,
//     opacity:0,
//     stagger:0.1,
//     duration:0.5,
//     yoyo:true,
//     scrolTrigger: {
//         scroller:"body",
//         scrub:true
//     }
// })
    gsap.from(".section-1-heading span", {
        y: -100,
        opacity: 0,
        duration: 3,
        stagger: 0.05,
        ease: "bounce",
    });
