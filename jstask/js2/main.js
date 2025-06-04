// let a = prompt("Eded daxil edin");
// let b = ""
// let i = a.length;
// let d = 0
// while (i > 0){
//     b = a[d] + b;
//     d++;
//     i--;
// }
// if (a === b) {
//     console.log("Polindromdur");

// }else{
//     console.log("deyil");
// }

// let a = prompt("Eded daxil edin");
// let b = 1;
// let i = 0;
// while (b < a) {
//     console.log(b);
//     b = b + i;
//     i = i + b;
// }

// let a = prompt("Eded daxil edin");
// let b = 0;
// let i = 2;
// if (a == 1) {
//   console.log("Ne sade ne murekkeb");
//   throw new Error("Sehv eded daxil edildi");
// }
// while (a > 1) {
//   if (a % i == 0) {
//     b = b + 1;
//     a = a / i;
//   }
//   i = i + 1;
// }
// if (b > 1) {
//   console.log("Murekkeb");
// } else {
//   console.log("Sade");
// }

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