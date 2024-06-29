document.addEventListener('DOMContentLoaded', function() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const topVisible = rect.top <= windowHeight && rect.bottom >= 250;
        return topVisible;
    }

    function handleSectionAnimations() {
        const sections = document.querySelectorAll('.section');

        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    handleSectionAnimations();

    document.addEventListener('scroll', handleSectionAnimations);
    window.addEventListener('resize', handleSectionAnimations);

    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    plusSlides(-1);
});

nextButton.addEventListener('click', () => {
    plusSlides(1);
});

    
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        contactForm.reset();
    });
});
