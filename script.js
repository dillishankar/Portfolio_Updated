document.addEventListener('DOMContentLoaded', () => {

    // Moodboard explosion animation
    const moodboard = document.getElementById('moodboard-trigger');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.3 });
    if (moodboard) observer.observe(moodboard);

    // Certification cards — left/right slide-in on scroll
    const certCards = document.querySelectorAll('.cert-card');
    const certObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });
    certCards.forEach(card => certObserver.observe(card));

});