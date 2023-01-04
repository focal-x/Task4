/* navbar */
const home = document.getElementById("HomeNav");
const AboutUs = document.getElementById("AboutUsNav");
const Services = document.getElementById("ServicesNav");
const ContactUs = document.getElementById("ContactUsNav");
const Doctors = document.getElementById("DoctorsNav");
const scroll = document.getElementById("border_horizontal_scroll");
const links = document.querySelectorAll(".ulNav a");
const HomeSection = document.getElementById("Home");
const AboutUsSection = document.getElementById("About-us");
const ServicesSection = document.getElementById("Services");
const ContactUsSection = document.getElementById("Contact-us");
const DoctorsSection = document.getElementById("Doctors");

function homeActive() {
  scroll.style.transform = `translateX(0)`;
  scroll.style.display = `block`;
  links.forEach((element) => {
    element.classList.remove("active");
  });
  home.classList.add("active");
}

function AboutUsActive() {
  scroll.style.transform = `translateX(6.92vw)`;
  links.forEach((element) => {
    element.classList.remove("active");
  });
  AboutUs.classList.add("active");
}

function ServicesActive() {
  scroll.style.transform = `translateX(15.2vw)`;

  links.forEach((element) => {
    element.classList.remove("active");
  });
  Services.classList.add("active");
}

function ContactUsActive() {
  scroll.style.transform = `translateX(31vw)`;
  links.forEach((element) => {
    element.classList.remove("active");
  });
  ContactUs.classList.add("active");
}

function DoctorsActive() {
  scroll.style.transform = `translateX(23.23vw)`;
  links.forEach((element) => {
    element.classList.remove("active");
  });
  Doctors.classList.add("active");
}

home.addEventListener("click", homeActive);
AboutUs.addEventListener("click", AboutUsActive);
Services.addEventListener("click", ServicesActive);
ContactUs.addEventListener("click", ContactUsActive);
Doctors.addEventListener("click", DoctorsActive);
/* homeActive(); */

let autoMove = () => {
  if (
    scrollY >= HomeSection.offsetTop - 300 &&
    scrollY < AboutUsSection.offsetTop - 300
  ) {
    homeActive();
  } else if (
    scrollY > AboutUsSection.offsetTop - 300 &&
    scrollY < ServicesSection.offsetTop - 300
  ) {
    AboutUsActive();
  } else if (
    scrollY > ServicesSection.offsetTop - 300 &&
    scrollY < DoctorsSection.offsetTop - 300
  ) {
    ServicesActive();
  } else if (
    scrollY > DoctorsSection.offsetTop - 300 &&
    scrollY < ContactUsSection.offsetTop - 300
  ) {
    DoctorsActive();
  } else if (scrollY > ContactUsSection.offsetTop - 300) {
    ContactUsActive();
  }
};

window.addEventListener("scroll", () => autoMove());
