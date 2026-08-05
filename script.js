

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.backgroundColor = "#0b1120";

    } else {

        nav.style.backgroundColor = "#111827";

    }

});