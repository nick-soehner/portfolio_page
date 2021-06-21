let grayClouds = document.getElementById('gray-clouds');
let rocket = document.getElementById('rocket');
let lightClouds = document.getElementById('light-clouds');
let whiteClouds = document.getElementById('white-clouds');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    rocket.style.top = value * -.8 + 'px';
    grayClouds.style.top = value * -.14 + 'px';
    lightClouds.style.top = value * -.02 + 'px';
})