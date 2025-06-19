// task05
// let obj = {
//   sum: function sum(a, b) {
//     a = +a
//     b = +b
//     return (obj.result = a + b);
//   },
//   o: function o(a, b) {
//     return (obj.result = a - b);
//   },
//   m: function m(a, b) {
//     return (obj.result = a * b);
//   },
//    d: function d(a, b) {
//     return (obj.result = a / b);
//   },
// };
// op = prompt("operator daxil edin")
// num1 = prompt("eded daxil edin")
// num2 = prompt("eded daxil edin")
// switch (op) {
//     case "+":
//         obj.sum(num1,num2)
//         break;
//     case "-":
//         obj.o(num1,num2)
//         break;
//     case "*":
//         obj.m(num1,num2)
//         break;
//     case "/":
//         obj.d(num1,num2)
//         break;
//     default:
//         throw new Error("");
// }
// console.log(obj);
// console.log(obj.result);

// task06
function mostFrequent(str) {
  let arr = str.split(", ");
  return arr.sort((a, b) =>
    arr.filter(x => x === b).length - arr.filter(x => x === a).length
  )[0];
}
console.log(mostFrequent("1, 1, 2, 3, 4, 1, 5, 1"));
