// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when user clicks a link (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  if (!navbar) return;
  if (window.scrollY > 10) navbar.classList.add("navbar-scrolled");
  else navbar.classList.remove("navbar-scrolled");
});

// Friendly greeting (no prompt)
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  const hour = new Date().getHours();
  const greet =
    hour < 12 ? "Good morning" :
    hour < 18 ? "Good afternoon" :
    "Good evening";

  greetingEl.textContent = `${greet} — welcome to Our Miracle of Life.`;
}

// Reveal sections on scroll
const revealItems = document.querySelectorAll(".reveal-init");

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => io.observe(item));

// Fake form submit (no backend)
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks! Your request was sent. We will contact you soon.";
    contactForm.reset();
  });
}