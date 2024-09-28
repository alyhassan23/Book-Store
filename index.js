// Function to toggle the side navigation
function toggleSideNav() {
  const sidebar = document.querySelector(".sideNav");
  sidebar.classList.toggle("show");
}

// Add event listeners for menu and close icons
document.querySelector(".menu-icon").addEventListener("click", toggleSideNav);
document
  .querySelector(".closeMenuIcon")
  .addEventListener("click", toggleSideNav);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
