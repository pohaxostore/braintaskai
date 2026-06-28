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
/*=========================================
    Animated Counters
=========================================*/

const counters = document.querySelectorAll(".stat strong");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const targetText = counter.innerText;

        const target = parseInt(targetText);

        if (isNaN(target)) return;

        let current = 0;

        const increment = Math.ceil(target / 60);

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = targetText;

            } else {

                counter.innerText = current;

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
