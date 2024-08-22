let currentSlide = 0;

function startSlider() {
  let imageCount = document.querySelectorAll("img").length;
  let images = document.querySelector("ul");

  images.style.transform = `translateX(-${currentSlide * 450}px)`;

  if (currentSlide === imageCount - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}

// Automatic slider interval
setInterval(() => {
  startSlider();
}, 5000);

// Handle arrow button clicks
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

function changeSlide(direction) {
  let imageCount = document.querySelectorAll("img").length;

  if (direction === "right") {
    if (currentSlide === imageCount - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
  } else if (direction === "left") {
    if (currentSlide === 0) {
      currentSlide = imageCount - 1;
    } else {
      currentSlide--;
    }
  }

  let images = document.querySelector("ul");
  images.style.transform = `translateX(-${currentSlide * 450}px)`;
}

leftArrow.addEventListener("click", () => {
  changeSlide("left");
});

rightArrow.addEventListener("click", () => {
  changeSlide("right");
});
