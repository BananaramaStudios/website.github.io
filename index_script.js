document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport with slight margin
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Check if top and bottom bounds are within the viewport with a slight margin
        const topVisible = rect.top <= windowHeight && rect.bottom >= 250;
        // Adjust the margin (currently -100) to control the fading accuracy
        return topVisible;
    }

    // Function to handle section animations
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

    // Initial check on page load
    handleSectionAnimations();

    // Check on scroll and resize
    document.addEventListener('scroll', handleSectionAnimations);
    window.addEventListener('resize', handleSectionAnimations);

    // Carousel functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("slides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    // Previous and next buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => {
        plusSlides(-1);
    });

    nextButton.addEventListener('click', () => {
        plusSlides(1);
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission here
        alert('Form submitted!');
        // Clear form fields if needed
        contactForm.reset();
    });
});
