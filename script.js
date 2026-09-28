const progress = document.querySelector('.progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(scrollTop / height) * 100}%`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.metric, .timeline-item, .project, .award, .lead-card, .education-strip > div').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = `.is-visible{opacity:1!important;transform:translateY(0)!important}`;
document.head.appendChild(style);
