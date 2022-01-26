'use strict';

function counter() {
   let i = arguments[0];
   const step = arguments[1];
   return function () {
      return i += step;
   };
}

const myCounter = counter(1, 5);
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());