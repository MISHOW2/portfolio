 function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Close mobile menu on outside click
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.querySelector('.nav-toggle');
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));