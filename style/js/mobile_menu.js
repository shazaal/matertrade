
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.onclick = () => mobileMenu.classList.add("active");
closeMenu.onclick = () => mobileMenu.classList.remove("active");

mobileMenu.onclick = (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove("active");
  }
};

const productsSheet = document.getElementById("productsSheet");
const openProductsDesktop = document.getElementById("openProductsDesktop");
const openProductsMobile = document.getElementById("openProductsMobile");
const closeProducts = document.getElementById("closeProducts");

openProductsDesktop?.addEventListener("click", () => {
  productsSheet.classList.remove("translate-y-full");
});

openProductsMobile?.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  productsSheet.classList.remove("translate-y-full");
});

closeProducts.addEventListener("click", () => {
  productsSheet.classList.add("translate-y-full");
});
