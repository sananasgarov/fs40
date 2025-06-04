// task01

// function FullName(name) {
//     console.log(`${name} is active now`);

// }
// FullName("Sənan")
// FullName("Togrul")
// FullName("Nicat")

// task02
// function Val(num1,num2,num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);

//     }
//     if (num2 > num1 && num2 > num3) {
//         console.log(num2);

//     }else{
//         console.log(num3);

//     }
// }
// Val(2,4,5)

// task03
// function Bank(rubl,dollar) {
//     rubl = rubl + dollar * 75
//     console.log(`Bütün depozitlər üzrə məbləğ: ${rubl}`);

// }
// Bank(1200,50)

// task04
// function NumberToText(num) {
//     a = num / 10
//     a = Math.floor(a)
//     b = num % 10
//     c = ""
//     switch (a) {
//         case 1:
//             c = c + "on"
//             break;
//         case 2:
//             c = c + "iyirmi"
//             break;
//         case 3:
//             c = c + "otuz"
//             break;
//         case 4:
//             c = c + "qırx"
//             break;
//         case 5:
//             c = c + "əlli"
//             break;
//         case 6:
//             c = c + "altmış"
//             break;
//         case 7:
//             c = c + "yetmiş"
//             break;
//         case 8:
//             c = c + "səksən"
//             break;
//         case 9:
//             c = c + "doqsan"
//             break;
//         default:
//             break;
//     }
//     switch (b) {
//         case 1:
//             c = c + " " + "bir"
//             break;
//         case 2:
//             c = c + " " + "iki"
//             break;
//         case 3:
//             c = c + " " + "üç"
//             break;
//         case 4:
//             c = c + " " + "dörd"
//             break;
//         case 5:
//             c = c + " " + "beş"
//             break;
//         case 6:
//             c = c + " " + "altı"
//             break;
//         case 7:
//             c = c + " " + "yeddi"
//             break;
//         case 8:
//             c = c + " " + "səqqiz"
//             break;
//         case 9:
//             c = c + " " + "doqquz"
//             break;
//         default:
//             break;
//     }
//     console.log(c);

// }
// a = prompt("Eded daxil edin")
// NumberToText(a)

// task05
// function min(a,b) {
//     if (a > b) {
//         minium = b
//     }else{
//         minium = a
//     }
//     console.log(minium);

// }
// a = prompt()
// b = prompt()
// min(a,b)

// task06
// let c = 0;
// function calc(num1,num2,op) {
//     num1 = +num1
//     num2 = +num2
//     switch (op) {
//         case "+":
//             c = num1 + num2
//             break;
//         case "-":
//             c = num1 - num2
//             break;
//         case "*":
//             c = num1 * num2
//             break;
//         case "/":
//             c = num1 / num2
//             break;
//         default:
//             break;
//     }
//     console.log(c);

// }
// number1 = prompt("Eded")
// number2 = prompt("Eded")
// operator = prompt("operator daxil edin")
// calc(number1,number2,operator)

// task07
// function isLucky(num) {
//     a = num.slice(0,3)
//     b = num.slice(3,6)
//     d = Number(a[0]) + Number(a[1]) + Number(a[2])
//     e = Number(b[0]) + Number(b[1]) + Number(b[2])
//     if (d == e) {
//         return true;

//     }else{
//         return false;
//     }
// }
// number = prompt("Alti reqemli eded daxil edin")
// console.log(isLucky(number))

// task08
// function capitalizeWords(text) {
//     a = text.split(" ")
//     b = 0
//     c = ""
//     while (b < a.length){
//         e = a[b][0].toUpperCase()
//         e += a[b].slice(1)
//         console.log(e);
//         c += " " + e
//         b++;
//     }
//     console.log(c);
// }
// t = prompt("Metn daxil edin")
// capitalizeWords(t)

// task09
// function isEven(num) {
//   num = +num;
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// number = prompt("Eded daxil edin");
// console.log(isEven(number));

// task10
// function isValidNumber(tel) {
//     a = tel.length
//     b = tel.slice(0,2)
//     if (a == 11 && b == "+7") {
//         return true;

//     }else{
//         return false;

//     }
// }
// tele = prompt("tel daxil edin")
// console.log(isValidNumber(tele))

// task11
// function NumCounter(text) {
//   a = text.match(/\d/g);
//   console.log(a.length);
// }
// t = prompt("Metn daxil edin");
// NumCounter(t);

// task12
// function isPrime(n) {
//   n = +n;
//   let b = 0;
//   if (n != 1) {
//     let c = n;
//     while (c > 0) {
//       if (n % c == 0) {
//         b = b + 1;
//       }
//       c = c - 1;
//     }
//     if (b <= 2) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     console.log("1 ne m nede s");
//   }
// }
// Number = prompt("Ededi daxil edin");
// console.log(isPrime(Number));

// task13
// function sumOfDigits(num) {
//     a = num.split("")
//     let c = 0;
//     for (let b = 0;b < a.length;b++){
//         c += Number(a[b])
//     }
//     console.log(c);

// }
// number = prompt("Eded daxil edin")
// sumOfDigits(number)

// task14
// function isPolindrom(a) {
//   let b = ""
//   let i = a.length;
//   let d = 0
//   while (i > 0){
//       b = a[d] + b;
//       d++;
//       i--;
//   }
//   if (a === b) {
//       console.log("Polindromdur");
//   }else{
//       console.log("deyil");
//   }
// }
// number = prompt("Eded daxil edin");
// isPolindrom(number);

// task15
// function longestWord(text) {
//     let d = ""
//     let c = 0
//     a = text.split(" ")
//     for(let b = 0;b < a.length;b++){
//         let c = b + 1
//         while(c < a.length){
//             if (a[b].length > a[c].length) {
//                 d = a[b]
//             }else{
//                 d= a[c]
//             }
//             c++;
//         }
//     }
//     console.log(d);
// }
// t = prompt("Meyn daxil edin")
// longestWord(t)

// task16
// function daysBetweenDates(date1,date2) {
//     let d1 = new Date(date1);
//     let d2 = new Date(date2);
//     let Ms = Math.abs(d2 - d1);
//     let days = Ms / (1000 * 60 * 60 * 24);
//     console.log(days);

// }
// d1 = prompt("tarix daxil edin")
// d2 = prompt("tarix daxil edin")
// daysBetweenDates(d1,d2)

// task18
// function reverseArray(numbers) {
//     a = numbers.split(",")
//     d = ""
//     for(let c = a.length - 1;c > -1;c--){
//         d += + a[c] + ","
//     }
//     console.log(d);

// }
// num = prompt("daxil edin","3,2,1")
// reverseArray(num)

// task19
// function userInfo(name,age) {
//     return `${name} is ${age} years old`
// }
// name = prompt("Ad daxil edin")
// age = prompt("Yas daxil edin")
// console.log(userInfo(name,age));

// task20
// function charCodes(text) {
//     a = text.split("")
//     d = ""
//     for(let b = 0;b < a.length;b++){
//         d += a[b].charCodeAt() + ","
//     }
//     console.log(d);

// }
// t = prompt("Metn daxil edin")
// charCodes(t)

// task21
// function factorial(num) {
//     let b = 1;
//     num = +num
//     for(let a = 1;a < num + 1;a++){
//         b = b * a
//     }
//     console.log(b);

// }
// number = prompt("Eded daxil edin")
// factorial(number)
