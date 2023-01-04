const cards = document.querySelectorAll(".z--card");
const cardsImg = document.querySelectorAll(".z--card--img");
const cardsDesc = document.querySelectorAll(".z--card--desc");
const cardIcon = document.querySelectorAll(".z--icon");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", (e) => {
    cardsDesc[i].classList.add("z--card--desc--after");
    // cardsDesc[i].append(zIcon);
    cardIcon[i].classList.remove("rr");
  });
  cards[i].addEventListener("mouseout", () => {
    cardsDesc[i].classList.remove("z--card--desc--after");
    cardIcon[i].classList.add("rr");
  });
}
