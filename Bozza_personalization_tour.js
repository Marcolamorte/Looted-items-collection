document.addEventListener('DOMContentLoaded', function () {
    const tourSections = document.querySelectorAll('.tour-section');

    tourSections.forEach(section => {
        const button = section.querySelector('.expand-button');
        const content = section.querySelector('.expandable-content');

        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // First, close all other expanded sections
            tourSections.forEach(otherSection => {
                if (otherSection !== section) {
                    const otherContent = otherSection.querySelector('.expandable-content');
                    const otherButton = otherSection.querySelector('.expand-button');
                    otherContent.classList.remove('expanded');
                    otherButton.setAttribute('aria-expanded', 'false');
                }
            });

            // Then toggle the clicked section
            const expanded = button.getAttribute('aria-expanded') === 'true';
            content.classList.toggle('expanded');
            button.setAttribute('aria-expanded', !expanded);
        });
    });
});