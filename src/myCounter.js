const myCounter = () => {
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (var count = 2; count <= 3; count += 1) {
      myArray.push(count);
    } 
  }
  return myArray;
};

console.log(myCounter());
module.exports = myCounter;
