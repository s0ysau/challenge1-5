
const letters = ["a", "b", "c", "d"]


function forEach(arr) {
  const alphabet = arr.toString().replace(/,/g, '')
  return alphabet
}

console.log(forEach(letters))


