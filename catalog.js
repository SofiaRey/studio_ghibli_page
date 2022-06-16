import { data, dataMusic } from "./data.js";

// TODO: random slider

function renderData(array) {
  document.querySelector("#elements").innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    document.querySelector("#elements").innerHTML += `
        <a href="movie.html?id=${array[i].id}" class="card">
          <img src="${array[i].image}" />
          <h5>${array[i].title}</h5>
        </a>
      `;
  }
}
renderData(sortByRate());

// Slider

for (let i = 0; i < dataMusic.length; i++) {
  const slider = document.querySelector('.slider');
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

function backward() {
  if (current === 0) {
    current = maxSlide;
  } else {
    current--;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * (i - current)}%)`;
  }
}

function pauseCurrentAudio() {
  document.querySelector(`audio[data-id="${current}"]`).pause();
}

next.addEventListener("click", function () {
  pauseCurrentAudio();
  forward();
});

prev.addEventListener("click", function () {
  pauseCurrentAudio();
  backward();
});

// Dropdown

document.querySelector("#movie-filter").addEventListener('change', (event) => {
  var selection = event.target.value;
  let moviesOrdered = [];

  if (selection == 'rt_score') {
    moviesOrdered = sortByRate();
  } else if (selection == 'release_date') {
    moviesOrdered = sortByRealeaseDate();
  } else if (selection == 'running_time') {
    moviesOrdered = sortByRunningTime();
  } else if (selection == 'title') {
    moviesOrdered = sortByTitle();
  }

  renderData(moviesOrdered);
});

function sortByRate() {
  let newArray = data.sort((a, b) => {
    return a.rt_score > b.rt_score ? -1 : 1;
  });
  return newArray;
}

function sortByRealeaseDate() {
  let newArray = data.sort((a, b) => {
    return a.release_date > b.release_date ? -1 : 1;
  });
  return newArray;
}

function sortByRunningTime() {
  let newArray = data.sort((a, b) => {
    return a.running_time > b.running_time ? -1 : 1;
  });
  return newArray;
}

function sortByTitle() {
  let newArray = data.sort((a, b) => {
    return a.title > b.title ? 1 : -1;
  });
  return newArray;
}

// Input

document.querySelector("#search-name").addEventListener('input', (event) => {
  const selection = event.target.value.trim();

  let moviesOrdered = sortByInput(selection);

  if (moviesOrdered.length > 0){
    renderData(moviesOrdered);
  } else {
    document.querySelector("#elements").innerHTML = `
        <div class='empty-state'>
          <h1>(^-^*)</h1>
          <h5>No hay resultados</h5>
        </div>
      `;
    
  }
});

function sortByInput(text) {

  let newArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].title.toLowerCase().includes(text)) {
      newArray.push(data[i])
    }
  }
  return newArray;
}
