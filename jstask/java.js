// task01
// console.log("My name is Murad");

// task02
// const name = "Sanan";
// console.log(name)

// task03
//  `person`
//  `console`
//  `$add`

// task04
// let bookPrice = 100;
// let bookAmount = 50;
// console.log(bookAmount * bookPrice);

// task05
// let kmhSpeed = 300;
// let msSpeed = 300 * 1000 /3600;
// console.log(msSpeed)

// task06
// let a = prompt("Dogum iliniz");
// let current = 2025-a;
// console.log(current)

// task07
// let num = 35;
// console.log(35**5);
// console.log(35 % 3);

// task08
// let firstName = "Sanan";
// let lastName = "Asgarov";
// console.log("Sizin Adiniz:",firstName + lastName);

// task09
// let firstName = "Sanan";
// let lastName = "Asgarov";
// console.log("Sizi bir daha görməyimizə şadıq:",firstName + lastName);

// task10
// let FullName = "SananAsgarov";
// let a = FullName.replaceAll(" ", "").length;
// console.log(a);

// task11
// let FullName = "Sanan Asgarov"
// let a = FullName[0];
// let b = FullName.indexOf("A")
// let c = FullName[b];
// console.log(a);
// console.log(c);

// task12
// a = prompt("Adinizi qeyd edin","");
// b = prompt("Soyad qeyd edin","");
// console.log("Sizin normal Adiniz:",a + b);
// console.log("Tersine Cevrilmis:",b + a)

// task12
// let FullName = "Sanan Asgarov"
// let a = FullName.split(" ");
// let b = a[1] + a [0];
// console.log(b);

// task13
// let a = prompt("Adinizi Qeyd edin","");
// console.log("Salam,",a);

// task14
// let num1 = prompt("Eded daxil edin",100);
// let num2 = prompt("Eded daxil edin",100);
// console.log(Number(num1) + Number(num2));
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// task15
// let a = 12345 * 98765;
// console.log(a)
// let b = String(a);
// let c = b[5];
// console.log(c);

// task17
// let a = prompt("4 reqemli eded daxil edin",1000);
// let b = String(a);
// let c = a.split("");
// let d = Number(c[0]) + Number (c[1]) + Number([2]) + Number([3]);
// console.log(d);

// task18
// let FullName = prompt("Adiniz ve Soyadiniz","");
// let b = FullName.split(" ");
// console.log("Salam",b[0]);

// task19
// let price = prompt("Daxil edin",530.90);
// let last = price.length;
// let a = price.indexOf(".");
// let b = price.slice(0,a);
// let c = price.slice(a + 1,last + 1);
// console.log(b,"manat" + " " + c,"qepik");

// task20
// let a = prompt("Emek haqqi",1000);
// let b = a * 13 / 100;
// let c = a-b;
// console.log(c);

// task21
// let a = prompt("Ad,Soyad,Ata adi","");
// let b = a.split(" ");
// let c = b[1];
// let d = c[0];
// let g = b[2];
// let e = g[0];
// console.log(b[0] + " " + d + "." + e)

// task22
// let price = prompt("məbləğini",1000);
// let time = prompt("müddətini",5);
// let percentage = prompt("faiz dərəcəsini",10);
// const profit = (price * percentage * time) / 10;
// console.log(profit);

// task23
// let value = 10;
// console.log(value > 20);
// console.log(value < 20);
// console.log(value === 20);

// task24
// let age = prompt("yasiniz",18);
// if (age < 18) {
//     alert("Access denied");
// }
// else{
//     alert("Access granted");
// }

// task25
// let a = prompt("3 eded daxil edin 2 reqemli ve eyni olmasin");
// let b = a.split(" ");
// console.log(b);
// if (b[0] == b[1]){
//     alert("Plese dont enter same element");
//     throw console.error("Same element");
// }
// if (b[0] == b[2]){
//     alert("Plese dont enter same element");
//     throw console.error("Same element");
// }
// if (b[1] == b[2]){
//     alert("Plese dont enter same element");
//     throw console.error("Same element");
// }
// let sorted = b.sort((x, y) => x - y);
// console.log(sorted[0] + " " + sorted[1] + " " + sorted[2]);

// task26
// let year = prompt("il",1);
// if (year % 4 == 0){
//     alert("uzun il");
// }else{
//     alert("kisa il");
// }

// task27
// let id = prompt("enter product id");
// switch (+id) {
// 	case 1:
//     	alert("Available 10 pcs");
// 		break;
// 	case 2:
//     	alert("Available 256 pcs");
// 		break;
//   	case 3:
//    		alert("Available 53 pcs");
// 		break;
//     case 4:
//         alert("gurt: yo");
// 		break;
// 	default:
// 		alert("default")
// }

// task28
// let a = prompt("M or F");
// if (a.toUpperCase() == "M"){
//     g = "Male";
// }else{
//     g = "Female";
// }
// console.log(g);

// task28
// let a = prompt("M or F");
// a === "M" ? console.log("Male") : a === "F" : console.log("Female") : console.log("error");

// task29
// let a = prompt("Ayin nomresi",1);
// const months = [
//   "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
//   "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
// ];
// switch(+a){
// 	case 1:
// 		console.log(months[0]);
// 		break
// 	case 2:
// 		console.log(months[1]);
// 		break
// 	case 3:
// 		console.log(months[2]);
// 		break
// 	case 4:
// 		console.log(months[3]);
// 		break
// 	case 5:
// 		console.log(months[4]);
// 		break
// 	case 6:
// 		console.log(months[5]);
// 		break
// 	case 7:
// 		console.log(months[6]);
// 		break
// 	case 8:
// 		console.log(months[7]);
// 		break
// 	case 9:
// 		console.log(months[8]);
// 		break
// 	case 10:
// 		console.log(months[9]);
// 		break
// 	case 11:
// 		console.log(months[10]);
// 		break
// 	case 12:
// 		console.log(months[11]);
// 		break
// 	default:
// 		console.log("Duzgun deyer daxil edin");

// }

// task29
// let a = prompt("Ayin nomresi",1);
// const months = [
//   "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
//   "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
// ];
// if (a > 12){
//     throw console.error();
// }
// if (a <= 0){
//     throw console.error();
// }
// console.log("Ayin adi:", months[a - 1]);

// task30
// let date = prompt("il ay gun daxil edin","2009.12.19");
// let a = date.split(".");
// let year = a[0];
// let month = a[1];
// let day = a[2];
// const months = [
//   "Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
//   "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
// ];
// switch(+month){
// 	case 1:
// 		m = months[0];
// 		break
// 	case 2:
// 		m = months[1];
// 		break
// 	case 3:
// 		m = months[2];
// 		break
// 	case 4:
// 		m = months[3];
// 		break
// 	case 5:
// 		m = months[4];
// 		break
// 	case 6:
// 		m = months[5];
// 		break
// 	case 7:
// 		m = months[6];
// 		break
// 	case 8:
// 		m = months[7];
// 		break
// 	case 9:
// 		m = months[8];
// 		break
// 	case 10:
// 		m = months[9];
// 		break
// 	case 11:
// 		m = months[10];
// 		break
// 	case 12:
// 		m = months[11];
// 		break
// 	default:
// 		console.log("Duzgun deyer daxil edin");
// }
// console.log(`${day} ${m} ${year}-cu il`);

// task31
// p = 8
// q = 16

// task32
// let a = 6, b = 4, c = 2;

// let x = ++a - b-- + c++ - --b + a++;
// let y = a-- + --c - ++b + x++ - --a;

// console.log(a, b, c, x, y);
// a = 6
// b = 3
// c = 2
// x = 11
// y = 11

// task33
// let a = 7, b = 3, c = 5;

// let x = a-- - ++b + c++ - --a + b++ - --c + a++ - b-- + c++;
// let y = --x + a++ - --b + c-- - x++ + ++a - b++ + --c - x--;
// let z = a-- + ++b - --c + x++ - --y + b-- - ++x + c++ - --a + y++;

// console.log(a, b, c, x, y, z);
// a = 6
// b = 4
// c = 4
// x = 8
// y = 11
// z = 10

// let a = 15;
// let b = 14;
// console.log(a === b);

// task 34
// let a = prompt("Ədədi daxil edin:",1);
// a > 0 ? console.log("Müsbetdir") : a < 0 ? console.log("Menfidir") : console.log("sifirdir");

// task 35
// let a = prompt();
// let b = prompt();
// let c = prompt();
// if (a > b && a > c) {
//     console.log(`En boyuk eded ${a}`);
// }else if (b > a && b > c) {
//     console.log(`En boyuk eded ${b}`);
// }else {
//     console.log(`En boyuk eded ${c}`);

// }

// task36
// let number = prompt("Ədədi daxil edin:");
// number = +number;
// if (number === 1) {
//   console.log("Ne cutdur nede tek");
// } else {
//   let result = number % 2 === 0 ? "Cüt" : "Tək";
//   console.log(result);
// }

// task37
// let a = prompt("Terefi daxil edin:");
// let sahe = a**2;
// let perimetr = 4+a;
// console.log(`Sahe: ${sahe} Perimetr: ${perimetr}`);

// task 38
// let a = prompt("Qiymeti daxil edin");
// switch (true) {
//   case a >= 90 && a <= 100:
//     console.log("Ela");
//     break;
//   case a >= 75 && a <= 89:
//     console.log("Yaxşı");
//     break;
//   case a >= 60 && a <= 74:
//     console.log("Orta");
//     break;
//   case a >= 0 && a <= 59:
//     console.log("Zəif");
//     break;
//   default:
//     console.log("Yanlış qiymət daxil edilib");
// }

// task39
// let a = Math.floor(Math.random() * 101);
// console.log(a);
// if (a >= 0 && a <= 50) {
//   console.log("Bu ədəd 0 ilə 50 arasinda");
// } else {
//   console.log("Bu ədəd 50-dən böyükdür.");
// }

// task 40
// let a = prompt("birinci eded");
// let b = prompt("ikinci eded");
// let operator = prompt("* / - +");
// switch (operator) {
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "+":
//     console.log(a + b);
//     break;
//   default:
//     console.log("Sehv operator daxil edilib");
//     break;
// }
