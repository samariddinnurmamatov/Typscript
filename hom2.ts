// MISOL - 1
// function getSum(n:number) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 1) {
//           console.log(i, i % 2)
//           sum += Math.pow(i, i % 2);
//         } else {
//           console.log(i, 2);
//           sum += Math.pow(i, 2);
//         }
//     }
//     return sum;
// }

// let n = 5;
// console.log(getSum(n)); // Output: 29


// MISOL- 2

// function getLongestWord(arrayElements: string[]) {
//   let LongStr = "";
//   for (let index = 0; index < arrayElements.length; index++) {
//     if (arrayElements[index].length > LongStr.length) {
//       LongStr = arrayElements[index];
//     }
//   }
//   console.log(LongStr);
// }

// getLongestWord(["hello", "hello world", "hello world dunyo"]);

// MISOL - 3

// function getDividers(arr: number[], n: number): number[] {
//     const result: number[] = [];

//     for (const num of arr) {
//         if (num % n === 0) {
//             result.push(num);
//         }
//     }

//     return result;
// }

// // Test
// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;
// const result = getDividers(arr, n);
// console.log(result); // [5, 10, 0, 15]


// MISOL - 4

// function checkWordCapitalize(str: string) {
//   const words = str.split(" ");
//   return words.every(word => word[0] === word[0].toUpperCase());
// }

// let str = "Abdulaziz Programmer Is FullStack Developer"
// const result = checkWordCapitalize(str);
// console.log(result);


// MISOL - 5

// function getCharCountObj(str: string): Record<string, number> {
//   const charCount: Record<string, number> = {};

//   for (const char of str) {
//     if (charCount.hasOwnProperty(char)) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }

//   return charCount;
// }

// // Test
// let str = "Abdulaziz Programmer";
// const result = getCharCountObj(str);
// console.log(result);


// MISOL - 6

// function changeObjToString(obj: Record<string, number>): string {
//     let result = '';

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result += key + obj[key];
//         }
//     }

//     return result;
// }

// // Test
// let obj = {a: 1, b: 2, c: 3};
// const result = changeObjToString(obj);
// console.log(result); // a1b2c3


// MISOL - 7

// function deleteProducts(
//   products: { id: number; name: string; price: number }[],
//   ...ids: number[]
// ): { id: number; name: string; price: number }[] {
//   return products.filter((product) => !ids.includes(product.id));
// }

// // Test
// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// const result = deleteProducts(products, 4, 6, 9);
// console.log(result);


// MISOL - 8

// function increaseProductPrice(
//   products: { id: number; name: string; price: number }[],
//   id: number,
//   percent: number
// ): { id: number; name: string; price: number }[] {
//   return products.map((product) => {
//     if (product.id === id) {
//       return {
//         ...product,
//         price: product.price + product.price * (percent / 100),
//       };
//     }
//     return product;
//   });
// }

// // Test
// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// const result = increaseProductPrice(products, 6, 20);
// console.log(result);


// MISOL - 9

// String.prototype.count = function(char: string): number {
//     let count = 0;
//     for (const c of this) {
//         if (c === char) {
//             count++;
//         }
//     }
//     return count;
// };

// // Test
// let str = "Abdulaziz Programmer";
// let char = "a";
// const result = str.count(char);
// console.log(result); // 2


// MISOL - 10

// function Employee(firstName: string, lastName: string, workPlace: string, salary: number, percent: number, isFullTime: boolean) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.workPlace = workPlace;
//     this.salary = salary;
//     this.percent = percent;
//     this.isFullTime = isFullTime;
// }

// Employee.prototype.getInfo = function() {
//     const workType = this.isFullTime ? 'full-time' : 'part-time';
//     const totalSalary = this.salary * (1 + this.percent / 100);
//     return `${this.firstName} ${this.lastName} ${this.workPlace}da ${totalSalary}$ oylik evaziga ${workType} ishlaydi.`;
// }

// // Test
// let emp1 = new Employee("Abdulaziz", "Programmer", "Najot ta'lim", 10000, 20, false);
// let emp2 = new Employee("Abdulaziz", "Programmer", "Najot ta'lim", 5000, 40, true);
// console.log(emp1.getInfo());
// console.log(emp2.getInfo());
