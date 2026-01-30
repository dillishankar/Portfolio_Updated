// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    const moodboard = document.getElementById('moodboard-trigger');
    
    const observerOptions = {
        // 0.4 means the animation starts when 40% of the section is visible
        threshold: 0.4 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When in view, add the 'active' class to trigger the CSS transition
                entry.target.classList.add('active');
            } else {
                // When you scroll away, it removes the class so it can animate again
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Start watching the moodboard
    if (moodboard) {
        observer.observe(moodboard);
    }
});