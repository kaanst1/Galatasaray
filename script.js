const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let index = 0;

function nextSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(nextSlide, 3000); // Her 3 saniyede bir kaydır
