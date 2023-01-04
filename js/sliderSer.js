const slidesSer = document.querySelectorAll(".serSlide");

const dotsSer = document.querySelector(".dotsSer");
const sliderSer = document.querySelector(".serSlider");
const arrowLSer = document.querySelector(".arrowLSer");
const arrowRSer = document.querySelector(".arrowRSer");
let currentSlideSer = 0;
const slideLenSer = slidesSer.length;

// go to slider function
const goToSlideSer = function (current) {
  slidesSer.forEach(
    (s, i) => (s.style.transform = `translateX(${-(27.32 + 4) * current}vw)`)
  );
};
goToSlideSer(0);
// add / remove hover
const addHover = function (cSlider) {
  cards0[cSlider].classList.add("serCard--after");
  white[cSlider].classList.add("ffffff");
  serCardDescZ[cSlider].classList.add("ffffff");
  serCardDescZ[cSlider].classList.add("serCardDesc");
  price[cSlider].classList.remove("rr");
  rMore[cSlider].classList.remove("rr");
};
const removeHover = function (cSlider) {
  cards0[cSlider].classList.remove("serCard--after");
  white[cSlider].classList.remove("ffffff");
  serCardDescZ[cSlider].classList.remove("ffffff");
  serCardDescZ[cSlider].classList.remove("serCardDesc");
  price[cSlider].classList.add("rr");
  rMore[cSlider].classList.add("rr");
};

//*******DOTS**********/
// bullet function
const bull = function (cSlider) {
  dotSerZ.forEach((d) => {
    d.style.backgroundColor = "#D9D9D9";
  });
  dotSerZ[cSlider].style.backgroundColor = "#282828";
};

//add bullet to dotsSer
slidesSer.forEach(
  (s, i) => (dotsSer.innerHTML += `<div class="dotSer"></div>`)
);
dotsSer.innerHTML += `<div class="dotSer"></div>`;
dotsSer.innerHTML += `<div class="dotSer"></div>`;

const dotSerZ = document.querySelectorAll(".dotSer");
//default
bull(0);
addHover(0);
// bullet onClick
for (let i = 0; i < dotSerZ.length; i++) {
  dotSerZ[i].addEventListener("click", () => {
    for (let x = 0; x <= 5; x++) {
      removeHover(x);
    }
    if (i === 4) {
      goToSlideSer(3);
    } else if (i === 5) {
      goToSlideSer(3);
    } else {
      goToSlideSer(i);
    }
    bull(i);
    addHover(i);
    currentSlideSer = i;
  });
}
// //nextslide***********/
const nextSlideSer = function () {
  for (let i = 0; i <= 5; i++) {
    removeHover(i);
  }
  if (currentSlideSer === 3) {
    goToSlideSer(3);

    currentSlideSer++;
  } else if (currentSlideSer === 4) {
    goToSlideSer(3);
    currentSlideSer++;
    console.log(currentSlideSer);
  } else if (currentSlideSer === 5) {
    goToSlideSer(0);
    currentSlideSer = 0;
  } else {
    currentSlideSer++;
    goToSlideSer(currentSlideSer);
  }

  bull(currentSlideSer);
  addHover(currentSlideSer);
};
arrowRSer.addEventListener("click", nextSlideSer);
// prevslide************
const prevSlideSer = function () {
  for (let i = 0; i <= 5; i++) {
    removeHover(i);
  }
  if (currentSlideSer === 5) {
    goToSlideSer(3);

    currentSlideSer--;
  } else if (currentSlideSer === 4) {
    goToSlideSer(3);
    currentSlideSer--;
    console.log(currentSlideSer);
  } else if (currentSlideSer === 0) {
    goToSlideSer(3);
    currentSlideSer = 5;
  } else {
    currentSlideSer--;
    goToSlideSer(currentSlideSer);
  }

  bull(currentSlideSer);
  addHover(currentSlideSer);
};
arrowLSer.addEventListener("click", prevSlideSer);
