const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("show");
  }
});

const footerLinks = document.querySelectorAll(".footer-links");
const footerHeadings = document.querySelectorAll(".footer-heading");

function toggleFooterLink(header) {
  const links = header.nextElementSibling;
  const activeArrow = header.getElementsByClassName("footer-arrow")[0];
  if (links.style.display === "flex") {
    activeArrow.classList.remove("active");
    links.style.display = "none";
  } else {
    activeArrow.classList.add("active");

    links.style.display = "flex";
  }
}

function handleFooterAccordion() {
  if (window.innerWidth < 768) {
    footerLinks.forEach((link) => (link.style.display = "none"));
    footerHeadings.forEach((header) => {
      header.addEventListener("click", () => toggleFooterLink(header));
    });
  } else {
    footerLinks.forEach((link) => (link.style.display = "flex"));
  }
}

handleFooterAccordion();

window.addEventListener("resize", () => {
  handleFooterAccordion();
});

const productContainer = document.querySelector(".product-container");
const productCards = document.querySelectorAll(".product-card");
const prevBtn = document.querySelector(".prev-arrow");
const nextBtn = document.querySelector(".next-arrow");

let currentIndex = 0;
let cardsPerView = getCardsPerView();

function getCardsPerView() {
  return window.innerWidth >= 768 ? 3 : 1;
}

function updateCarousel() {
  const cardWidth = productCards[0].offsetWidth + 20;
  productContainer.style.transform = `translateX(-${
    currentIndex * cardWidth
  }px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < productCards.length - cardsPerView) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = productCards.length - cardsPerView;
  }
  updateCarousel();
});

window.addEventListener("resize", () => {
  cardsPerView = getCardsPerView();
  currentIndex = 0;
  updateCarousel();
});

const orderForm = document.querySelector("#order-form");
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("📨 Thank you! We’ve received your details.");
});
