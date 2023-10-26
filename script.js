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

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const thankYouMessage = document.getElementById("thank-you-message");
  
    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Hide the form and display the thank you message
      document.querySelector("form").style.display = "none";
      thankYouMessage.style.display = "block";
    });
});