const progress = document.querySelector('.progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = height > 0 ? `${(scrollTop / height) * 100}%` : '0%';
});

/* Reveal animation that never hides content.
   This keeps the page fully readable in normal browsing and full-page screenshots. */
const revealItems = document.querySelectorAll(
  '.metric, .timeline-item, .project, .award, .lead-card, .education-strip > div'
);

revealItems.forEach((el, index) => {
  el.classList.add('reveal-ready');
  el.style.setProperty('--reveal-delay', `${Math.min(index * 35, 280)}ms`);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealItems.forEach(el => observer.observe(el));
