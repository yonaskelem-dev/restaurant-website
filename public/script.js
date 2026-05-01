// NAV
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navLinks").classList.toggle("open");
};

// THEME
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// MENU DATA
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

// MENU RENDER
const menuGrid = document.getElementById("menuGrid");

menuData.forEach((item) => {
  menuGrid.innerHTML += `
    <div class="card">
      <img src="${item.img}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
    </div>
  `;
});

// GALLERY
const galleryData = [
  "restaurant.jpg",
  "doro_wat.jpg",
  "kitfo_image.jpg",
  "chef_image.jpg",
];

const galleryGrid = document.getElementById("galleryGrid");

galleryData.forEach((img) => {
  galleryGrid.innerHTML += `
    <div class="card">
      <img src="${img}">
    </div>
  `;
});
