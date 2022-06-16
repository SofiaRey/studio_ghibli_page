import { slider } from "./data.js";

// Pop Up - Terms and Conditions

document
  .querySelector("#openPopUp")
  .addEventListener("click", function openPopUp() {
    document.querySelector("body").classList.add("no-scroll");
    document.querySelector(".popUp").style.display = "block";
  });

document
  .querySelector("#closePopUp")
  .addEventListener("click", function closePopUp() {
    document.querySelector("body").classList.remove("no-scroll");
    document.querySelector(".popUp").style.display = "none";
  });

document
  .querySelector(".black-background")
  .addEventListener("click", function () {
    document.querySelector("body").classList.remove("no-scroll");
    document.querySelector(".popUp").style.display = "none";
  });

// Slider

let sliderObject = document.querySelector(".slider");

console.log(slider.length)

for (let i = 0; i < slider.length; i++) {
  console.log(slider[i])
  sliderObject.innerHTML += `
    <div class="slide">
      <img src="${slider[i]}" alt="" />
    </div>
  `;
}

let slides = document.querySelectorAll(".slide");

const next = document.querySelector(".button-next");
const prev = document.querySelector(".button-prev");
const maxSlide = slides.length - 1;

for (let i = 0; i < slides.length; i++) {
  slides[i].style.transform = `translateX(${i * 100}%)`;
}

let current = 0;

function forward() {
  if (current === slides.length - 1) {
    current = 0;
  } else {
    current++;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * (i - current)}%)`;
  }
}

setInterval(function () {
  forward();
}, 3000);

// Form validation

let completeName = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let checkbox = document.querySelector("#termsNConds");
let submit = document.querySelector("#submit");
let form = document.querySelector("form");
let isInvalid = false;

completeName.addEventListener("keyup", validateName);
email.addEventListener("keyup", validateEmail);
phone.addEventListener("keyup", validatePhone);
form.addEventListener("submit", validateForm);

function validateName() {
  let error = document.querySelector("#error-name");

  if (completeName.value.length == 0) {
    error.innerHTML = "Complete el campo";
  } else if (completeName.value.length < 4) {
    error.innerHTML = "El nombre debe contener mínimo 4 letras";
  } else {
    isInvalid = false;
    error.innerHTML = "";
  }
}

function validateEmail() {
  let error = document.querySelector("#error-email");

  if (email.value.length == 0) {
    isInvalid = true;
    error.innerHTML = "Complete el campo";
  } else if (!email.value.includes("@") || !email.value.includes(".com")) {
    isInvalid = true;
    error.innerHTML = "Formato de email inválido";
  } else {
    isInvalid = false;
    error.innerHTML = "";
  }
}

function validatePhone() {
  let error = document.querySelector("#error-phone");

  if (phone.value.length == 0) {
    isInvalid = true;
    error.innerHTML = "Complete el campo";
  } else if (
    phone.value.length != 9 ||
    !phone.value.startsWith("09") ||
    isNaN(phone.value)
  ) {
    isInvalid = true;
    error.innerHTML = "Formato de número telefónico inválido";
  } else {
    isInvalid = false;
    error.innerHTML = "";
  }
}

function validateForm(event) {
  let error = document.querySelector("#error-checkbox");

  event.preventDefault();
  if (!checkbox.checked) {
    isInvalid = true;
    error.innerHTML = "Debe aceptar los Términos y Condiciones";
  } else {
    isInvalid = false;
    error.innerHTML = "";
  }
  if (!isInvalid) {
    completeName.value = "";
    email.value = "";
    phone.value = "";
    checkbox.click();
  }
}
