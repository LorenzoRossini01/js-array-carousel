const slideContainerEl = document.getElementById("slide-container");
const prevSlideArrowEl = document.getElementById("prev-arrow");
const nextSlideArrowEl = document.getElementById("next-arrow");

const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

let slideIndex = 0;
let slideHtml = "";

for (let i = 0; i < slides.length; i++) {
  const currentSlide = slides[i];
  let activeClass = "";

  if (i == slideIndex) {
    activeClass = "active";
  } else {
    activeClass = "";
  }

  slideHtml += `<img src="./img/${currentSlide}"
    class="slide ${activeClass}" />`;
}
slideContainerEl.innerHTML = slideHtml;

prevSlideArrowEl.addEventListener("click", function () {
  const allSlide = document.getElementsByClassName("slide");

  const oldSlide = allSlide[slideIndex];
  oldSlide.classList.remove("active");

  if (slideIndex <= 0) {
    slideIndex = allSlide.length - 1;
  } else {
    slideIndex--;
  }

  const newSlide = allSlide[slideIndex];
  newSlide.classList.add("active");
});

nextSlideArrowEl.addEventListener("click", function () {
  const allSlide = document.getElementsByClassName("slide");

  const oldSlide = allSlide[slideIndex];
  oldSlide.classList.remove("active");

  if (slideIndex >= allSlide.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  const newSlide = allSlide[slideIndex];
  newSlide.classList.add("active");
});
