const array = [1,2,3,4,5]

const newMap = (arr, params) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(params(arr[i]));
  }
  return newArr;
};

const multiplyByTwo = (num) => {
  return num * 2;
};

console.log(newMap(array, multiplyByTwo))

