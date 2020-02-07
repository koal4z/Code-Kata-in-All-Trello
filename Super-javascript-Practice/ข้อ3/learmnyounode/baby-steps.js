const array = process.argv;
let newArrOfNum = [];
let arrayCheckNum = array.filter(item => {
  if (Number.isInteger(parseInt(item))) {
    return newArrOfNum.push(parseInt(item));
  }
});

console.log(newArrOfNum.reduce((tot, add) => tot + add));
