function randomNumber (min, max) {
  if (min <= max) {
    const random = Math.random() * (max - min) + min;
    return Math.floor(random);
  }
  return false;
}
randomNumber(1,10);


function stringLength (line, length) {
  if (line.length > length) {
    return false;
  }
  return true;
}

stringLength('Привет', 1);
