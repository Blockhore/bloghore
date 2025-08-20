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
(function() {
  // Add 'dark' or 'light' class to <body> based on saved preference or system preference
  function setTheme(theme) {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  // Detect initial theme
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    // Use system preference as fallback
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  // Set initial theme on page load
  document.addEventListener('DOMContentLoaded', function() {
    setTheme(getInitialTheme());
    const btn = document.getElementById('toggle-theme');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });
})();

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

// search.js
(() => {
  const searchForm = document.getElementById("search-form");
  const searchToggle = document.getElementById("search-toggle");
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("search-results");
  const STORAGE_KEY = "bloghore-search-query";

  // Toggle show/hide search form
  if (searchToggle && searchForm) {
    searchToggle.addEventListener("click", (e) => {
      e.preventDefault();
      searchForm.classList.toggle("hidden");
      
      if (!searchForm.classList.contains("hidden")) {
        searchInput.focus();
      } else {
        searchInput.blur();
      }
    });
  }

  // Load previous query from localStorage
  const savedQuery = localStorage.getItem(STORAGE_KEY);
  if (savedQuery) {
    searchInput.value = savedQuery;
    performSearch(savedQuery);
  }

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) {
      clearResults();
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    localStorage.setItem(STORAGE_KEY, query);
    performSearch(query);
  });

  function performSearch(query) {
    clearResults();
    resultsContainer.innerHTML = "<p>Mencari...</p>";
    resultsContainer.style.display = "block";
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((posts) => {
        const results = posts.filter(post =>
          post.title.toLowerCase().includes(query.toLowerCase())
        );
        if (results.length === 0) {
          renderNoResults();
          return;
        }
        renderResults(results, query);
      })
      .catch(() => {
        renderNoResults();
      });
  }

  function renderResults(results, query) {
    const fragment = document.createDocumentFragment();
    results.forEach(post => {
      const card = document.createElement("article");
      card.className = "post-card";

      const titleHTML = highlightQuery(post.title, query);

      card.innerHTML = `
        <a href="${post.url}">
          <h3>${titleHTML}</h3>
        </a>
        <p class="meta">
          <time datetime="${post.date}">${formatDate(post.date)}</time>
          ${post.category ? `• Kategori: ${post.category}` : ""}
        </p>
        <p>${post.excerpt}</p>
      `;
      fragment.appendChild(card);
    });
    resultsContainer.appendChild(fragment);
    resultsContainer.style.display = "block";
    // Fade in animation
    resultsContainer.style.opacity = 0;
    setTimeout(() => (resultsContainer.style.opacity = 1), 10);
  }

  function renderNoResults() {
    resultsContainer.innerHTML = `
      <p class="no-results">
        Tidak ada artikel yang cocok. <a href="/404.html">Kembali ke Beranda</a>
      </p>`;
    resultsContainer.style.display = "block";
  }

  function clearResults() {
    resultsContainer.innerHTML = "";
    resultsContainer.style.display = "none";
  }

  function highlightQuery(text, query) {
    const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, "gi");
    return text.replace(regex, '<mark>$1</mark>');
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return d.toLocaleDateString("id-ID", options);
  }
})();

// === MODAL === //
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const openBtn = document.querySelector('[data-modal-open]');
  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');
  const form = modal.querySelector('form');
  const formMessage = modal.querySelector('.form-message');

  // Fungsi buka modal
  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // disable scroll body
  }

  // Fungsi tutup modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    resetForm();
  }

  // Reset form & pesan
  function resetForm() {
    form.reset();
    formMessage.textContent = '';
    formMessage.classList.remove('visible');
  }

  // Validasi sederhana sebelum submit
  function validateForm() {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const file = form['upload-file'].files[0];

    if (!name) {
      alert('Nama wajib diisi.');
      return false;
    }
    if (!email || !email.includes('@')) {
      alert('Email tidak valid.');
      return false;
    }
    if (!file) {
      alert('File wajib diupload.');
      return false;
    }
    const allowedTypes = ['application/pdf', 
                          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      alert('File harus berupa PDF atau DOCX.');
      return false;
    }
    return true;
  }

  // Submit form ke Google Form via POST (redirect manual)
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Jika valid, submit form via POST
    formMessage.textContent = 'Mengirim...';
    formMessage.classList.add('visible');

    // Untuk Google Form, submit langsung dengan form.submit()
    form.submit();
  });

  // Event open modal
  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }

  // Event close modal
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Tutup modal dengan ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});

