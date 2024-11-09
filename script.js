// Fade-in animation on page load
window.addEventListener("load", () => {
    document.body.classList.add('fade-in');
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Hover animation for project cards
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseover', () => {
        project.classList.add('hover');
    });
    project.addEventListener('mouseout', () => {
        project.classList.remove('hover');
    });
});
