const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
let activeImage = 0;

const slideContainerEl = document.getElementById("slide-container");
const thumbnailsContainerEl = document.getElementById("thumbnails-container");
const prevSlideArrowEl = document.getElementById("prev-arrow");
const nextSlideArrowEl = document.getElementById("next-arrow");

// genero le slide
let slideHtml = "";
for (let i = 0; i < slides.length; i++) {
  const currentSlide = slides[i];
  let activeClass = i === activeImage ? "active" : "";
  slideHtml += `<img src="./img/${currentSlide}"
class="slide ${activeClass}" />`;
}
slideContainerEl.innerHTML = slideHtml;

// genero le thumbnails
let slidePreviewHtml = "";
for (let i = 0; i < slides.length; i++) {
  const currentSlide = slides[i];
  let activeClass = i === activeImage ? "active" : "";

  slidePreviewHtml += `
  <div class="slide-preview" >
    <img src="./img/${currentSlide}" class="slide-small ${activeClass}"/>
  </div>`;
}
thumbnailsContainerEl.innerHTML = slidePreviewHtml;

// recupero le thumbnails
const allThumbs = document.getElementsByClassName("slide-small");

// click on prev button
prevSlideArrowEl.addEventListener("click", function () {
  const prevSlideIndex = activeImage - 1;
  goToSlide(prevSlideIndex);
});

// click on next button
nextSlideArrowEl.addEventListener("click", function () {
  const nextSlideIndex = activeImage + 1;
  goToSlide(nextSlideIndex);
});

// click on thumb
for (let i = 0; i < allThumbs.length; i++) {
  const thumb = allThumbs[i];
  thumb.setAttribute("data-active-image", i);

  thumb.addEventListener("click", function () {
    thumbIndex = parseInt(thumb.getAttribute("data-active-image"));
    goToSlide(thumbIndex);
  });
}

function goToSlide(slideIndex) {
  const allThumbs = document.getElementsByClassName("slide-small");
  const oldThumb = allThumbs[activeImage];
  oldThumb.classList.remove("active");
  activeClass = "active";
  activeImage = slideIndex;
  if (activeImage >= allThumbs.length) {
    activeImage = 0;
  } else if (activeImage < 0) {
    activeImage = allThumbs.length - 1;
  }

  const newThumb = allThumbs[activeImage];
  newThumb.classList.add("active");

  const currentSlide = slides[activeImage];
  slideHtml = `<img src="./img/${currentSlide}"
class="slide active" />`;
  slideContainerEl.innerHTML = slideHtml;
}
