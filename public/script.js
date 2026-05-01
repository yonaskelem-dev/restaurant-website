// =========================
// NAVIGATION
// =========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.onclick = () => {
    navLinks.classList.toggle("open");
  };
}

// =========================
// THEME TOGGLE
// =========================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.onclick = () => {
    document.body.classList.toggle("light");
  };
}

// =========================
// MENU DATA
// =========================
const menuData = [
  {
    name: "Doro Wat",
    price: "280 ETB",
    img: "doro_wat.jpg",
  },
  {
    name: "Kitfo",
    price: "320 ETB",
    img: "kitfo_image.jpg",
  },
  {
    name: "Chef Special",
    price: "400 ETB",
    img: "chef_image.jpg",
  },
];

// =========================
// MENU RENDER (FIXED)
// =========================
const menuGrid = document.getElementById("menuGrid");

if (menuGrid) {
  menuGrid.innerHTML = menuData
    .map(
      (item) => `
      <div class="card menu-card">
        <div class="img-wrapper">
          <img src="${item.img}" alt="${item.name}">
        </div>
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
    `,
    )
    .join("");
}

// =========================
// GALLERY DATA
// =========================
const galleryData = [
  "restaurant.jpg",
  "doro_wat.jpg",
  "kitfo_image.jpg",
  "chef_image.jpg",
];

// =========================
// GALLERY RENDER (FIXED)
// =========================
const galleryGrid = document.getElementById("galleryGrid");

if (galleryGrid) {
  galleryGrid.innerHTML = galleryData
    .map(
      (img) => `
      <div class="card gallery-card">
        <div class="img-wrapper">
          <img src="${img}" alt="gallery image">
        </div>
      </div>
    `,
    )
    .join("");
}

// =========================
// OPTIONAL: PREVENT IMAGE STRETCHING CLASS ADDER
// =========================
document.querySelectorAll("img").forEach((img) => {
  img.style.width = "100%";
  img.style.height = "220px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "12px";
});
