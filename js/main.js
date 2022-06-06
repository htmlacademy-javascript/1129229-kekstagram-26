function randomNumber (min, max) {
  if (min <= max) {
    const random = Math.random() * (max - min) + min;
    return Math.floor(random)
  }
  console.log('Так нельзя))')
}
console.log(randomNumber(1,10))


function stringLength (line, length) {
  if (line.length > length) {
    return false;
  }
  return true;
}

console.log(stringLength('Привет', 1));
