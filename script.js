// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('active');
});

// Smooth scrolling for anchor links (optional fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile nav if open
    document.getElementById('nav-links').classList.remove('active');
  });
});
