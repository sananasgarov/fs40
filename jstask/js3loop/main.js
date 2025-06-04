// task01
// let a = prompt("Eded daxil edin iki reqemli");
// a = Number(a)
// if (a >= 10 && a < 100) {
//   while (a < 100) {
//     a = a + 7;
//   }
// }else{
//   alert("daxil edin iki reqemli")
// }
// console.log(a);

// task02
// let n = prompt("Nece defe cixartsin");
// while (n > 0) {
//   console.log("I know how to use cycles");
//   n--
// }

// task03
// let a = 100;
// while (a < 1000) {
//   console.log(a);
//   a = a + 10
// }

// task04
// let a = 11;
// let b = 0;
// while (a < 100) {
//   b = a + b;
//   a = a + 2;
// }
// console.log(b);

// task05
// let a = prompt("Eded daxil edin");
// let b = 100;
// let c = 0;
// while (b < 1000) {
//   if (b % a == 0) {
//     c = c + b;
//   }
//   b++
// }
// console.log(c);

// task06
// let n = prompt("Eded daxil edin");
// n = Number(n);
// let b = 0;
// if (n != 1) {
//   while (n > 0) {
//     let c = n;
//     while (c > 0) {
//       if (n % c == 0) {
//         b = b + 1;
//       }
//       c = c - 1;
//     }
//     if (b <= 2) {
//       console.log(n);
//     }
//     n--
//     b = 0;
//   }
// } else {
//   console.log("1 ne m nede s");
// }

// task07
// let b = 1;
// for(let a = 10;a > 0;a--){
//   b = b * a
// }
// console.log(b);

// task08
// let text = prompt("Metin daxil edin");
// let len = text.length;
// let c = ""
// for (let a = 0; a < len;) {
//   c = c + text[len-1];
//   len = len - 1;
// }
// console.log(c);

// task09
// let text = prompt("Metin daxil edin");
// for(let val in text){
//   if (text[val] == ".") {
//     console.log(val);
//     break;
//   }
// }

// task10
// let text = prompt("Metin daxil edin");
// let a = 0;
// for(let i of text){
//   if (!isNaN(i) && i != " ") {
//     a = a + 1;
//   }
// }
// if (a > 0) {
//   console.log(`${a} sayda eded var`);
// }else{
//   console.log("Eded yoxdu");
// }

// fibanocci
// 1 1 2 3 5 8 13
// let n = prompt("");
// n = Number(n);
// let a = 0, b = 1;
// console.log("Fibonacci ədədləri:");

// for (let i = 0; i < n; i++) {
//   console.log(a);
//   let c = a + b;
//   a = b;
//   b = c;
// }


// for(let n = 75;n > 1;n--){
//     let cnt = 0;
//     for(let j = n;j > 0;j--){
//         if (!(n % j)) {
//             cnt++;
//         }
//     }
//     if (cnt == 2) {
//         console.log(n);
//     }
// }