/*=========================================
    Braintask Studio
    Version 3.0
=========================================*/

/*=========================================
    Scroll Reveal
=========================================*/

const revealElements = document.querySelectorAll(`
.service-card,
.step,
.project-card,
.benefit-card,
.pricing-card,
.faq-item,
.hero-text,
.hero-visual,
.stat
`);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {

    observer.observe(element);

});
