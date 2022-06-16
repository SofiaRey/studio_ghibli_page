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

export { shuffle }