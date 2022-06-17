import { data } from "./data.js";
import { openModal, closeModal } from "./utils.js";

// Get movie id from query params
const route = window.location.search;
const id = parseInt(new URLSearchParams(route).get("id"));

// Movie to render
const movie = data[id];

// -------------- Load movie dynamic information --------------

document.querySelector("title").innerHTML = movie.title;
document.querySelector(
  "#banner-container"
).style.backgroundImage = `url('${movie.image_banner}')`;
document.querySelector("#image").src = movie.image;
document.querySelector("#title").innerHTML = movie.title;
document.querySelector("#original-title").innerHTML = movie.original_title;
document.querySelector("#description").innerHTML = movie.description;
document.querySelector("#rate").innerHTML = `<strong>${
  movie.rt_score / 10
}</strong>`;
document.querySelector("#director").innerHTML += movie.director;
document.querySelector("#release").innerHTML += new Date(
  movie.release_date,
  0
).getFullYear();
document.querySelector(
  "#duration"
).innerHTML += `${movie.running_time} minutos`;

// If there are characters available, render them
if (movie.people.length != 0) {
  document.querySelector(
    ".characters"
  ).innerHTML += `<strong>Personajes: </strong>`;
  for (let i = 0; i < movie.people.length; i++) {
    document.querySelector(
      "#characters"
    ).innerHTML += `<li>${movie.people[i]}</li>`;
  }
}

// Generate gallery
for (let i = 0; i < movie.gallery.length; i++) {
  document.querySelector(
    "#gallery"
  ).innerHTML += `<div class='gallery-img-container'>
        <img src="${movie.gallery[i]}" alt="Gallery">
        </div>`;
}

// -------------- Gallery Modal --------------

// Get all gallery images
let images = document.getElementsByClassName("gallery-img-container");

// Get all empty modal
const modal = document.querySelector("#modal");

// Add event listener for each image to open modal and close it
for (var i = 0; i < images.length; i++) {
  var img = images[i];

  img.addEventListener("click", function (e) {
    // Open modal
    openModal(modal);
    // Generate modal image
    modal.innerHTML = `
        <i class="fa fa-close close-btn" id="close-btn"></i>
        <img class='modal-opened-img' src='${e.target.attributes.src.nodeValue}'/>
        <div class='black-background'></div>
        `;

    // Close modal on click of background
    document
      .querySelector(".black-background")
      .addEventListener("click", function () {
        closeModal(modal);
      });

    // Close modal on click of close button
    document.querySelector("#close-btn").addEventListener("click", function () {
      closeModal(modal);
    });
  });
}
