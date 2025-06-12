// task01
// let a = ["Sanan","Nicat","Revan"]
// a[1] = "Classified"
// console.log(a);

// task02
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// console.log(`Episode 4: ${arr[0]}`);
// console.log(`Episode 5: ${arr[1]}`);
// console.log(`Episode 6: ${arr[2]}`);

// task03
// let salary = [
//   [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//   [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//   [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//   [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];
// function getAnnualSalary() {
//     y = 0
//     for(let a = 0;a < salary.length;a++){
//         for(let b = 0; b < salary[a].length;b++){
//             y += salary[a][b]
//         }
//         console.log(y);
//     }
// }
// getAnnualSalary()
// function getMonthlySalary(month) {
//     month = +month
//     a = []
//     for(let b = 0;b < salary.length;b++){
//         switch (month) {
//             case 1:
//                 a.push(salary[b][0])
//                 break;
//             case 2:
//                 a.push(salary[b][1])
//                 break;
//             case 3:
//                 a.push(salary[b][2])
//                 break;
//             case 4:
//                 a.push(salary[b][3])
//                 break;
//             case 5:
//                 a.push(salary[b][4])
//                 break;
//             case 6:
//                 a.push(salary[b][5])
//                 break;
//             case 7:
//                 a.push(salary[b][6])
//                 break;
//             case 8:
//                 a.push(salary[b][7])
//                 break;
//             case 9:
//                 a.push(salary[b][8])
//                 break;
//             case 10:
//                 a.push(salary[b][9])
//                 break;
//             case 11:
//                 a.push(salary[b][10])
//                 break;
//             case 12:
//                 a.push(salary[b][11])
//                 break;

//             default:
//                 break;
//         }
//     }
// }
// m = prompt("Zehmet olamsa ayi daxil edin")
// getMonthlySalary(m)
// console.log(a);

// function getQuarterSalary(num) {
//     let s = (num - 1) * 3;
//     let e = num * 3
//     let result = 0
//     for (let i = 0; i < salary.length; i++) {
//         for (let j = s; j < e; j++) {
//             result += salary[i][j]
//         }
//     }
//     return result
// }
// m = prompt("Rub daxil edin")
// console.log(getQuarterSalary(m));

// task04
// a = []
// for(let i = 0;i < 5;i++){
//     b = prompt("Eded daxil edin")
//     b = +b
//     a.push(b)
// }
// for(let c = 0;c < a.length;c++){
//     if (a[c] < a[c + 1]) {
//         m =a [c]
//     }
// }
// console.log(m);

// task05
// let a = '32, 31, 34, 36, 31'
// let b = a.split(', ').join(';');
// console.log(b);

// task06
// let a = ["Senan","Nicat","Togrul"]
// a.push("Beyrek")
// a.shift()
// console.log(a);

// task08
// let a = [11,12,13,14,15,16,17,181,9,19]
// let b = Math.max(...a)
// console.log(b);

// task09
// let a = [11,12,13,14,15]
// let b = [...a]
// for(let i = 0;i < b.length;i++)[
//     b[i] = b[i] * 2
// ]
// console.log(a);
// console.log(b);

// task10
// let employees = [
// [ 'Jaylee Macy', 'marketing' ],
// [ 'John Smith', 'management' ],
// [ 'Blossom Hartley', 'design' ],
// [ 'Austin Carpenter', 'marketing' ],
// [ 'Joan Knowles', 'development' ],
// [ 'Sally Nunez', 'management' ],
// [ 'Laurel Ward', 'development' ],
// [ 'Lark Simon', 'marketing' ],
// [ 'Jane Stone', 'management' ],
// [ 'Courtney Olson', 'development' ],
// ];
// let dev = [];
// for(let i = 0;i < employees.length;i++){
//     if(employees[i][1] == 'development') {
//         dev.push(employees[i][0])
//     }
// }
// console.log(dev);

// task11
// line = ["SananAsgarov", "NicatHacili"];
// NewCustomer = prompt("Ad Soyad daxil edin");
// let a = 0;
// for (let i = 0; i < line.length; i++) {
//   if (line[i] == NewCustomer) {
//     a += 1;
//   }
// }
// if (NewCustomer == "=") {
//   console.log(line);
// } else if (NewCustomer.trim() !== "") {
//   if (a == 0) {
//     line.push(NewCustomer);
//     console.log(line);
//   }
// } else if (NewCustomer == false) {
//   console.log(`birinci novbe ${line[0]}`);
//   line.shift();
//   console.log(line);
// }

// task12
// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// function sortArray() {
//     array.sort((a, b) => a - b)
// }
// sortArray()
// console.log(array);

// task13
// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// function Negative(arr) {
//     for (let i of arr) {
//         i = +i
//         if (i < 0) {
//             console.log(i);
//         }
//     }
// }
// Negative(array)

// task14
// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// function positive(arr) {
//     for (let i of arr) {
//         i = +i
//         if (i > 0) {
//             console.log(i);
//         }
//     }
// }
// positive(array)

// task15
// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// names.forEach(printWithDashes)
// function printWithDashes(dash) {
//     console.log(`---

// ${dash}

// ---`);

// }
// names.forEach(printWithHearts);
// function printWithHearts(heart) {
//     console.log(`<3<3<3<3 ${heart} <3<3<3<3`);
// }
// names.forEach(function(element, index) {
//     console.log(`${index} - ${element}`);
// });

// task17;
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// let a = []
// for(let i = 0;i < numbers.length;i++){
//     numbers[i] = +numbers[i]
//     if (numbers[i] < 0) {
//         numbers[i] *= -1;
//         a.push(numbers[i])
//     }else{
//         numbers[i] *= 2
//         a.push(numbers[i])
//     }
// }
// console.log(a);


// task19
// let names = ["Aichael", "Arevor", "Franklin", "Lamar", "Jimmy"];
// let newName = [];
// names.forEach(ret)
// function ret(nam) {
//     if (nam[0] == "A") {
//         newName.push(nam);
//     }
// }
// console.log(newName);


// task20
// let price = [200,100,200,300,400,400]
// let Edv = []
// price.forEach(addTax)
// function addTax(pr) {
//     pr += (pr / 10) * 2;
//     Edv.push(pr);
// }
// console.log(Edv);

// task21
// let numbers = [1, 5, 7, 3, 9, 4, 6, 2];
// let even = 0;
// let odd = 0;
// numbers.forEach(countEvensAndOdds)
// function countEvensAndOdds(num) {
//     if (num % 2 == 0) {
//         even++;
//     }else{
//         odd++;
//     }
// }
// console.log(`Massivde ${even} cut ve ${odd} tek eded var`);
