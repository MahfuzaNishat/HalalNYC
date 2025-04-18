

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});




const carousel = document.getElementById('restaurant-carousel');
const leftBtn = document.querySelector('.carousel-arrow.left');
const rightBtn = document.querySelector('.carousel-arrow.right');

leftBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});


  document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    const carousel = document.getElementById('restaurant-carousel');
    let activeCardIndex = 1; // Start from the second card (index 1, as per your code)

    const cards = Array.from(carousel.children); // Get all the card elements

    leftArrow.addEventListener('click', () => {
      if (activeCardIndex > 0) {
        activeCardIndex--;
        updateCarousel();
      }
    });

    rightArrow.addEventListener('click', () => {
      if (activeCardIndex < cards.length - 1) {
        activeCardIndex++;
        updateCarousel();
      }
    });

    function updateCarousel() {
      cards.forEach((card, index) => {
        if (index === activeCardIndex) {
          card.classList.add('active-card');
        } else {
          card.classList.remove('active-card');
        }
      });
    }

    // Initial update
    updateCarousel();
  });


  