// NAV
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navLinks").classList.toggle("open");
};

// THEME
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// ===================== MENU =====================
const menuData = [
  {
    name: "Doro Wat",
    price: "280 ETB",
    img: "/doro_wat.jpg",
  },
  {
    name: "Kitfo",
    price: "320 ETB",
    img: "/kitfo_image.jpg",
  },
  {
    name: "Chef Special",
    price: "400 ETB",
    img: "/chef_image.jpg",
  },
];

const menuGrid = document.getElementById("menuGrid");

menuData.forEach((item) => {
  menuGrid.innerHTML += `
    <div class="card">
      <img src="${item.img}" />
      <h3>${item.name}</h3>
      <p>${item.price}</p>
    </div>
  `;
});

// ===================== GALLERY =====================
const galleryData = [
  "/restaurant.jpg",
  "/doro_wat.jpg",
  "/kitfo_image.jpg",
  "/chef_image.jpg",
];

const galleryGrid = document.getElementById("galleryGrid");

galleryData.forEach((img) => {
  galleryGrid.innerHTML += `
    <div class="card">
      <img src="${img}" />
    </div>
  `;
});

// ===================== RESERVATION =====================
document.getElementById("reservationForm").onsubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: resName.value,
    phone: resPhone.value,
    date: resDate.value,
    time: resTime.value,
    guests: resGuests.value,
  };

  const res = await fetch("/reserve", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (result.success) {
    document.getElementById("formSuccess").classList.remove("hidden");
  } else {
    alert("Reservation failed");
  }
};
