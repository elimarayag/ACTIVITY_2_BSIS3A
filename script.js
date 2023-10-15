function toggleMenu() {
    const menuLinks = document.querySelector(".menu-links");
    menuLinks.classList.toggle("open");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    hamburgerIcon.classList.toggle("open");
}

let currentSlide = 0;

function showSlide(n) {
    const slides = document.getElementsByClassName("genre-slide");
    if (n < 0) {
        currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
        currentSlide = 0;
    }

    const slideWidth = slides[0].clientWidth;
    const offset = -currentSlide * slideWidth;

    document.querySelector(".genre-slides").style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
    showSlide(--currentSlide);
}

function nextSlide() {
    showSlide(++currentSlide);
}

showSlide(currentSlide);