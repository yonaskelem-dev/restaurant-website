// =============================================
// SISHU RESTAURANT — script.js (FINAL)
// =============================================

// ---------- NAVBAR SCROLL ----------
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ---------- HAMBURGER ----------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// ---------- THEME ----------
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});

// ---------- MENU ----------
const menuData = {
  traditional: [
    {
      name: "Doro Wat",
      price: "280 ETB",
      desc: "Spicy chicken stew",
      emoji: "🥘",
    },
    { name: "Kitfo", price: "320 ETB", desc: "Minced beef", emoji: "🥩" },
    { name: "Tibs", price: "300 ETB", desc: "Beef cubes", emoji: "🍖" },
  ],
  specials: [
    {
      name: "Chef Special",
      price: "400 ETB",
      desc: "Mixed platter",
      emoji: "🍽",
    },
  ],
  drinks: [
    { name: "Buna", price: "120 ETB", desc: "Coffee", emoji: "☕" },
    { name: "Tej", price: "150 ETB", desc: "Honey wine", emoji: "🍯" },
  ],
  vegetarian: [
    { name: "Shiro", price: "180 ETB", desc: "Chickpea stew", emoji: "🌿" },
  ],
};

const menuGrid = document.getElementById("menuGrid");

function renderMenu(category) {
  menuGrid.innerHTML = "";

  menuData[category].forEach((item) => {
    const div = document.createElement("div");
    div.className = "menu-item";

    div.innerHTML = `
      <div class="menu-item-emoji">${item.emoji}</div>
      <div class="menu-item-body">
        <div class="menu-item-header">
          <h4>${item.name}</h4>
          <span>${item.price}</span>
        </div>
        <p>${item.desc}</p>
      </div>
    `;

    menuGrid.appendChild(div);
  });
}

renderMenu("traditional");

// tabs
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderMenu(btn.dataset.tab);
  });
});

// ---------- GALLERY ----------
const galleryGrid = document.getElementById("galleryGrid");

const galleryData = [
  { type: "food", label: "Doro Wat" },
  { type: "food", label: "Kitfo" },
  { type: "interior", label: "Restaurant" },
  { type: "events", label: "Live Music" },
];

function renderGallery(filter = "all") {
  galleryGrid.innerHTML = "";

  galleryData
    .filter((i) => filter === "all" || i.type === filter)
    .forEach((item) => {
      const div = document.createElement("div");
      div.className = "gallery-item";

      div.innerHTML = `
        <div class="gallery-placeholder">
          <span>📷</span>
          <p>${item.label}</p>
        </div>
      `;

      galleryGrid.appendChild(div);
    });
}

renderGallery();

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
});

// ---------- REVIEWS ----------
const reviewsCarousel = document.getElementById("reviewsCarousel");

const reviews = [
  { name: "Abel", text: "Amazing food!" },
  { name: "Sara", text: "Best Ethiopian food!" },
  { name: "John", text: "Highly recommend!" },
];

function renderReviews() {
  reviewsCarousel.innerHTML = "";

  reviews.forEach((r) => {
    const div = document.createElement("div");
    div.className = "review-card";

    div.innerHTML = `
      <div class="review-stars">★★★★★</div>
      <p>${r.text}</p>
      <div class="review-author">
        <div class="review-avatar">👤</div>
        <div>${r.name}</div>
      </div>
    `;

    reviewsCarousel.appendChild(div);
  });
}

renderReviews();

// ---------- FORM (CONNECTED TO BACKEND) ----------
const form = document.getElementById("reservationForm");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const reservationData = {
    name: document.getElementById("resName").value.trim(),
    phone: document.getElementById("resPhone").value.trim(),
    date: document.getElementById("resDate").value,
    time: document.getElementById("resTime").value,
    guests: document.getElementById("resGuests").value,
    occasion: document.getElementById("resOccasion").value,
    notes: document.getElementById("resNotes").value,
  };

  // validation
  if (
    !reservationData.name ||
    !reservationData.phone ||
    !reservationData.date ||
    !reservationData.time ||
    !reservationData.guests
  ) {
    alert("Please fill all required fields");
    return;
  }

  try {
    const res = await fetch("/reserve", {
      // IMPORTANT: no localhost here
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    });

    const result = await res.json();

    if (result.success) {
      form.classList.add("hidden");
      success.classList.add("visible");
    } else {
      alert(result.message);
    }
  } catch (err) {
    console.error(err);
    alert("Server error. Is backend running?");
  }
});

// ---------- RESET ----------
document.getElementById("newReservation").addEventListener("click", () => {
  form.reset();
  form.classList.remove("hidden");
  success.classList.remove("visible");
});
