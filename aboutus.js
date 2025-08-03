// Fade-in on scroll for mission and vision sections
document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".content > div");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, {
    threshold: 0.2
  });

  blocks.forEach(block => {
    block.classList.add("hidden");
    observer.observe(block);
  });
});
