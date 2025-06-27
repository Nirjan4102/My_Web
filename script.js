// Typed.js effect
new Typed("#typed", {
  strings: ["CSE Student", "Web Developer", "Full-Stack Developer", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
});

// Theme toggle with localStorage
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const msgEl = document.getElementById("form-msg");

  if (!name || !email || !message) {
    msgEl.textContent = "❌ Please fill out all fields!";
    msgEl.style.color = "red";
    msgEl.style.opacity = "1";
    msgEl.style.transition = "opacity 0.3s";
    return;
  }

  msgEl.textContent = "✅ Message sent successfully!";
  msgEl.style.color = "lightgreen";
  msgEl.style.opacity = "1";
  msgEl.style.transition = "opacity 0.3s";
  this.reset();
});

// Animate buttons and .animate elements on load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".animate").forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300 + i * 100);
  });
});
