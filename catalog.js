import { data, dataMusic } from "./data.js";
import {
  slideForward,
  slideBackward,
  pauseCurrentAudio,
  sortByRate,
  sortByRealeaseDate,
  sortByRunningTime,
  sortByTitle,
  sortByInput,
} from "./utils.js";

renderData(sortByRate(data));

// -------------- Render all the movies --------------

function renderData(array) {
  document.querySelector("#elements").innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    document.querySelector("#elements").innerHTML += `
        <a href="movie.html?id=${array[i].id}" class="card">
          <img src="${array[i].image}" />
          <h5>${array[i].title}</h5>
        </a>
      `;
  }
}

// -------------- Slider --------------

// Generate each slide
for (let i = 0; i < dataMusic.length; i++) {
  const slider = document.querySelector(".slider");
  slider.innerHTML += `
  <div class="slide">
    <div class="slide-container">
      <h4>${dataMusic[i].original_title}</h4>
      <h1>${dataMusic[i].title}</h1>
      <audio data-id="${i}" src="${dataMusic[i].audio}" controls/>
    </div>
    <div class="dark-filter"></div>
    <img src="${dataMusic[i].background}" alt="" />
  </div>
  `;
}

// Slider slides
let slides = document.querySelectorAll(".slide");

// Current index of slide
let current = 0;

// Slider button foward action
document.querySelector(".button-next").addEventListener("click", function () {
  pauseCurrentAudio(current);
  current = slideForward(current, slides);
});

// Slider button backward action
document.querySelector(".button-prev").addEventListener("click", function () {
  pauseCurrentAudio(current);
  current = slideBackward(current, slides);
});

// Arrange slides
for (let i = 0; i < slides.length; i++) {
  slides[i].style.transform = `translateX(${i * 100}%)`;
}

// -------------- Filter Movies Dropdown ------------

// Sort movies based on select option
document.querySelector("#movie-filter").addEventListener("change", (event) => {
  var selection = event.target.value;
  let moviesOrdered = [];

  if (selection == "rt_score") {
    moviesOrdered = sortByRate(data);
  } else if (selection == "release_date") {
    moviesOrdered = sortByRealeaseDate(data);
  } else if (selection == "running_time") {
    moviesOrdered = sortByRunningTime(data);
  } else if (selection == "title") {
    moviesOrdered = sortByTitle(data);
  }

  renderData(moviesOrdered);
});

// -------------- Search bar --------------

// Sort movies based on search bar
document.querySelector("#search-name").addEventListener("input", (event) => {
  const selection = event.target.value.trim();

  let moviesOrdered = sortByInput(selection, data);

  if (moviesOrdered.length > 0) {
    // If there are movies with the searched name, render them
    renderData(moviesOrdered);
  } else {
    // If not, render empty state
    document.querySelector("#elements").innerHTML = `
        <div class='empty-state'>
          <h1>(^-^*)</h1>
          <h5>No hay resultados</h5>
        </div>
      `;
  }
});
