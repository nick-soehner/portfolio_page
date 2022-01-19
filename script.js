//Landing
let grayClouds = document.getElementById("gray-clouds");
let rocket = document.getElementById("rocket");
let lightClouds = document.getElementById("light-clouds");
let whiteClouds = document.getElementById("white-clouds");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    rocket.style.top = value * -0.8 + "px";
    grayClouds.style.top = value * -0.1 + "px";
    lightClouds.style.top = value * -0.001 + "px";
});

// ScrollMagic
let controller = new ScrollMagic.Controller();

let skillsScene = new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: 0.4,
})
.setClassToggle(".box", "show")
.addTo(controller);

let aboutScene = new ScrollMagic.Scene({
    triggerElement: '#about-me',
    triggerHook: 0.4,
})
    .setClassToggle(".headshot, .about-text", "visable")
    .addTo(controller);

