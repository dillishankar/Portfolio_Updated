document.addEventListener('DOMContentLoaded', () => {
    const moodboard = document.getElementById('moodboard-trigger');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // If you want it to "close" when you scroll away:
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.3 });

    if (moodboard) observer.observe(moodboard);
});