// Initialize EmailJS (replace with your actual public key)
emailjs.init("vq1362DNesJtq8KoE"); // ⚠️ Replace with your real EmailJS public key

// Typed.js effect
new Typed("#typed", {
  strings: ["CSE Student", "Website Developer", "Full-Stack Developer"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
});

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Contact form validation + EmailJS
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const msgEl = document.getElementById("form-msg");

  if (!name || !email || !message) {
    msgEl.textContent = "❌ Please fill out all fields!";
    msgEl.style.color = "red";
    return;
  }

  // Send email using EmailJS
  emailjs.sendForm("service_xt4g6ws", "template_gd9f01m", this)
    .then(() => {
      msgEl.textContent = "✅ Message sent successfully!";
      msgEl.style.color = "lightgreen";
      this.reset();
    })
    .catch(() => {
      msgEl.textContent = "❌ Failed to send message. Please try again.";
      msgEl.style.color = "red";
    });
});

// Animate buttons/sections on load
document.querySelectorAll(".animate").forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  setTimeout(() => {
    el.style.transition = "all 0.6s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, 300 + i * 100);
});
