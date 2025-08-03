// Optional: Add fade-in animation on scroll (modern UI enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, {
    threshold: 0.2
  });

  serviceCards.forEach(card => {
    card.classList.add('hidden');
    observer.observe(card);
  });
});
