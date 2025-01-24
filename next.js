let firstPromise = new Promise((resolve, reject) => {
  console.log("saran");
  //   resolve(10001);
  reject(new Error("internal server error"));
});
setTimeout(function symyname() {
  console.log("it call my name ");
}, 2000);

let promise = new Promise((resolve, reject) => {
  setTimeout(function symyname() {
    console.log("it call my name ");
    resolve(2004);
  }, 2000);
});

const arrNumber = [1, 2, 4, 5, 6, 7, 5, 3, 2, 6];
const dublicate = arrNumber.filter(
  (element, index, array) => array.indexOf(element) !== index
);
console.log(dublicate);
// ==================Maxnumber or Minimum number=======================
const arrayNumber = [1, 4, 5, 7, 3, 4, 3];
// const maximumNumber = Math.max(...arrayNumber);
// console.log(maximumNumber);
const maximumNumber = (arr) => {
  return arr.reduce((prev, current) => {
    return prev < current ? prev : current;
  });
};
console.log(maximumNumber(arrayNumber));
