const array = [1,2,3,4,5]

function map (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    let num = arr[i] * 2
    return newArr.push(num)
  }
}


console.log(map(array))