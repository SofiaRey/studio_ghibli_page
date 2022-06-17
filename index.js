import { slider } from "./data.js";
import { openModal, closeModal, slideForward } from "./utils.js";

// -------------- Pop Up - Terms and Conditions --------------

const popUp = document.querySelector(".popUp");

// Open pop up on click of info icon
document.querySelector("#openPopUp").addEventListener("click", function () {
  openModal(popUp);
});

// Close pop up on click of info icon
document.querySelector("#closePopUp").addEventListener("click", function () {
  closeModal(popUp);
});

// Close pop up on click of background
document
  .querySelector(".black-background")
  .addEventListener("click", function () {
    closeModal(popUp);
  });

// -------------- Slider --------------

let sliderObject = document.querySelector(".slider");

// Generate each slide
for (let i = 0; i < slider.length; i++) {
  sliderObject.innerHTML += `
    <div class="slide">
      <img src="${slider[i]}" alt="" />
    </div>
  `;
}

// Slider slides
let slides = document.querySelectorAll(".slide");

// Current index of slide
let current = 0;

// Arrange slides
for (let i = 0; i < slides.length; i++) {
  slides[i].style.transform = `translateX(${i * 100}%)`;
}

// Autoplay slider
setInterval(function () {
  current = slideForward(current, slides);
}, 3000);

// -------------- Form validation --------------

// Entire form
let form = document.querySelector("form");

// Define each input
let completeName = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let checkbox = document.querySelector("#termsNConds");

// Form does not have invalid inputs
let isValid = true;

completeName.addEventListener("keyup", validateName);
email.addEventListener("keyup", validateEmail);
phone.addEventListener("keyup", validatePhone);
form.addEventListener("submit", validateForm);

function validateName() {
  let error = document.querySelector("#error-name");
  isValid = false;

  if (completeName.value.length == 0) {
    error.innerHTML = "Complete el campo";
  } else if (completeName.value.length < 4) {
    error.innerHTML = "El nombre debe contener mínimo 4 letras";
  } else {
    isValid = true;
    error.innerHTML = "";
  }

  return isValid;
}

function validateEmail() {
  let error = document.querySelector("#error-email");
  isValid = false;

  if (email.value.length == 0) {
    error.innerHTML = "Complete el campo";
  } else if (!email.value.includes("@") || !email.value.includes(".com")) {
    error.innerHTML = "Formato de email inválido";
  } else {
    isValid = true;
    error.innerHTML = "";
  }

  return isValid;
}

function validatePhone() {
  let error = document.querySelector("#error-phone");
  isValid = false;

  if (phone.value.length == 0) {
    error.innerHTML = "Complete el campo";
  } else if (
    phone.value.length != 9 ||
    !phone.value.startsWith("09") ||
    isNaN(phone.value)
  ) {
    error.innerHTML = "Formato de número telefónico inválido";
  } else {
    isValid = true;
    error.innerHTML = "";
  }

  return isValid;
}

function validateForm(event) {
  let error = document.querySelector("#error-checkbox");
  isValid = false;

  event.preventDefault();

  if (!validateName() || !validateEmail() || !validatePhone()) {
    isValid = false;
  } else if (!checkbox.checked) {
    error.innerHTML = "Debe aceptar los Términos y Condiciones";
  } else {
    isValid = true;
    error.innerHTML = "";
  }
  if (isValid) {
    completeName.value = "";
    email.value = "";
    phone.value = "";
    checkbox.click();
  }
}
