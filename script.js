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

// Modal functionality for certificate images
// Open Bento Popup Function
function openBentoPop(imageSrc) {
    const overlay = document.getElementById('bentoPopOverlay');
    const targetImg = document.getElementById('bentoPopTarget');
    
    // Set clicked image target source URL
    targetImg.src = imageSrc;
    
    // Show overlay structural block
    overlay.style.display = 'flex';
    
    // Smooth opacity fade in entry
    setTimeout(() => {
        overlay.classList.add('show');
    }, 20);
    
    // Lock background scroll interaction states
    document.body.style.overflow = 'hidden';
}

// Close Bento Popup Function
function closeBentoPop() {
    const overlay = document.getElementById('bentoPopOverlay');
    
    overlay.classList.remove('show');
    
    // Wait for the opacity fade animation transition duration to end before display none
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Unblock page scroll behavior
    }, 250);
}

// Allow closing with standard hardware escape key press actions
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBentoPop();
});