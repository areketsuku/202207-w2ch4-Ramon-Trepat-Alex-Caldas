class SkylabArray {
  value1;
  value2;
  value3;
  value4;

  constructor(ivalue1, ivalue2, ivalue3, ivalue4) {
    this.value1 = ivalue1;
    this.value2 = ivalue2;
    this.value3 = ivalue3;
    this.value4 = ivalue4;
  }
}

const myLoop = function (n) {
  let count = 0;
  for (const properties in n) {
    count += 1;
  }
  return count;
};

const newSkylabArray = new SkylabArray(1, 7, 4, 8);
const secondSylabArray = new SkylabArray("Marta", "Luis", "Pere");

console.log(newSkylabArray);
console.log(secondSylabArray);

console.log(myLoop(newSkylabArray));
