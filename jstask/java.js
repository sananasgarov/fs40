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

// task28
// let a = prompt("M or F");
// if (a.toUpperCase() == "M"){
//     g = "Male";
// }else{
//     g = "Female";
// }
// console.log(g);


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
