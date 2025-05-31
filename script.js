document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");

    let currentIndex = 0;
    let autoSlide;

    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    nextButton?.addEventListener("click", () => {
        console.log("Next clicked")
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    })

    prevButton?.addEventListener("click", () => {
        console.log("prev clicked")
        currentIndex = (currentIndex - 1) % slides.length;
        updateCarousel();
    })

    function startAutoSlide() {
        autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);


})