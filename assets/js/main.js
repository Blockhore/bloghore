// === Responsive Nav Toggle ===
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Klik di luar menu
  document.addEventListener("click", (e) => {
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
      mainNav.classList.remove("open");
    }
  });
}

// === Dark Mode Toggle ===
const toggleDark = document.getElementById("toggle-dark");
const htmlEl = document.documentElement;

if (toggleDark) {
  // Inisialisasi
  const theme = localStorage.getItem("theme");
  if (theme === "dark") htmlEl.classList.add("dark");

  toggleDark.addEventListener("click", () => {
    htmlEl.classList.toggle("dark");
    localStorage.setItem("theme", htmlEl.classList.contains("dark") ? "dark" : "light");
  });
}

// === Scroll to Top ===
const scrollBtn = document.getElementById("scroll-top");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("visible", window.scrollY > 400);
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
