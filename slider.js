document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    showSlides(slideIndex);

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    document.querySelector('.prev-slide').addEventListener('click', function() {
        showSlides(--slideIndex);
    });

    document.querySelector('.next-slide').addEventListener('click', function() {
        showSlides(++slideIndex);
    });
});
