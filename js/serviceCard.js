const cards0 = document.querySelectorAll(".serCard");
const white = document.querySelectorAll(".ffffffZ");

const price = document.querySelectorAll(".price");
const rMore = document.querySelectorAll(".rMore");

const serCardDescZ = document.querySelectorAll(".serCardDescZ");

for (let i = 0; i < cards0.length; i++) {
  cards0[i].addEventListener("mouseover", (e) => {
    cards0[i].classList.add("serCard--after");
    white[i].classList.add("ffffff");
    serCardDescZ[i].classList.add("ffffff");
    serCardDescZ[i].classList.add("serCardDesc");

    price[i].classList.remove("rr");
    rMore[i].classList.remove("rr");
  });
  cards0[i].addEventListener("mouseout", () => {
    cards0[i].classList.remove("serCard--after");
    white[i].classList.remove("ffffff");
    serCardDescZ[i].classList.remove("ffffff");
    serCardDescZ[i].classList.remove("serCardDesc");

    price[i].classList.add("rr");
    rMore[i].classList.add("rr");
  });
}
