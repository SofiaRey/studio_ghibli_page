function shuffle(arr) {
  let random;
  for (let current = 0; current < arr.length; current++) {
    random = Math.floor(Math.random() * current);
    let temp = arr[current];
    arr[current] = arr[random];
    arr[random] = temp;
  }

  return arr;
}

function sortByRate(moviesArray) {
  let newArray = moviesArray.sort((a, b) => {
    return a.rt_score > b.rt_score ? -1 : 1;
  });
  return newArray;
}

function sortByRealeaseDate(moviesArray) {
  let newArray = moviesArray.sort((a, b) => {
    return a.release_date > b.release_date ? -1 : 1;
  });
  return newArray;
}

function sortByRunningTime(moviesArray) {
  let newArray = moviesArray.sort((a, b) => {
    return a.running_time > b.running_time ? -1 : 1;
  });
  return newArray;
}

function sortByTitle(moviesArray) {
  let newArray = moviesArray.sort((a, b) => {
    return a.title > b.title ? 1 : -1;
  });
  return newArray;
}

function sortByInput(text, moviesArray) {
  let newArray = [];
  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].title.toLowerCase().includes(text.toLowerCase())) {
      newArray.push(moviesArray[i]);
    }
  }
  return newArray;
}

function openModal(modal) {
  document.querySelector("body").classList.add("no-scroll");
  modal.style.display = "block";
}

function closeModal(modal) {
  document.querySelector("body").classList.remove("no-scroll");
  modal.style.display = "none";
}

function slideForward(current, slides) {
  if (current === slides.length - 1) {
    current = 0;
  } else {
    current++;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * (i - current)}%)`;
  }
  return current;
}

function slideBackward(current, slides) {
  const maxSlide = slides.length - 1;
  if (current === 0) {
    current = maxSlide;
  } else {
    current--;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${100 * (i - current)}%)`;
  }
  return current;
}

function pauseCurrentAudio(currentSlide) {
  document.querySelector(`audio[data-id="${currentSlide}"]`).pause();
}

export {
  shuffle,
  openModal,
  closeModal,
  slideForward,
  slideBackward,
  pauseCurrentAudio,
  sortByRate,
  sortByRealeaseDate,
  sortByRunningTime,
  sortByTitle,
  sortByInput,
};
