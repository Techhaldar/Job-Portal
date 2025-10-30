const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
   sidebar.classList.remove("-translate-x-full");
   overlay.classList.remove("hidden");
   document.body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

function closeSidebar() {
   sidebar.classList.add("-translate-x-full");
   overlay.classList.add("hidden");
   document.body.classList.remove("overflow-hidden"); // enable scroll
}

const wrapper = document.querySelector('.my-custom-swiper-wrapper');
const slideWidth = wrapper.querySelector('.custom-slide').offsetWidth;
const scrollStep = slideWidth + 24; // 24px = gap-6

document.getElementById('prevBtn').addEventListener('click', () => {
   wrapper.scrollBy({
      left: -scrollStep, behavior: 'smooth'
   });
});

document.getElementById('nextBtn').addEventListener('click', () => {
   wrapper.scrollBy({
      left: scrollStep, behavior: 'smooth'
   });
});