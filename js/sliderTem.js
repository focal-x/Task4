const slides = document.querySelectorAll(".slide");
const dots = document.querySelector(".dots");
const slider = document.querySelector(".temCardSlider");
const arrowL = document.querySelector(".arrowL");
const arrowR = document.querySelector(".arrowR");
let currentSlide = 0;
const slideLen = slides.length;

const goToSlide = function (current) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${-(41.94 + 5.85) * current}vw)`)
  );
};
//*******DOTS**********/
const bull1 = function (cSlider) {
  dot.forEach((d) => {
    d.style.backgroundColor = "#D9D9D9";
  });
  dot[cSlider].style.backgroundColor = "#282828";
};
slides.forEach((s, i) => (dots.innerHTML += `<div class="dot"></div>`));
const dot = document.querySelectorAll(".dot");
//default
bull1(0);

for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", () => {
    bull1(i);
    goToSlide(i);
    currentSlide = i;
  });
}

//nextslide***********/
const nextSlide = function () {
  if (currentSlide === slideLen - 1) currentSlide = 0;
  else currentSlide++;
  bull1(currentSlide);
  goToSlide(currentSlide);
};
arrowR.addEventListener("click", nextSlide);
// prevslide************
const prevSlide = function () {
  if (currentSlide === 0) currentSlide = slideLen - 1;
  else currentSlide--;
  bull1(currentSlide);
  goToSlide(currentSlide);
};
arrowL.addEventListener("click", prevSlide);
