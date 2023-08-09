// MISOL-1

// function getSum(n: number): number {
//   let productOdd = 1;
//   let productEven = 1;

//   for (let i = 1; i <= n; i++) {
//     productOdd *= 2 * i - 1;
//     productEven *= 2 * i;
//   }

//   return productOdd + productEven;
// }

// const n = 3;
// const result = getSum(n);
// console.log(`getSum(${n}) = ${result}`);




// MISOL-2

// function getHighestNumberOfDigits(arr: number[]): number {
//   const MaxNumber = Math.max(...arr);
//   return MaxNumber
// }
// const arr = [1234, 543, 23456];
// const highNumber = getHighestNumberOfDigits(arr);
// console.log(highNumber);




// MISOL-3

// function getStringArr(arr: (string | number | boolean | object)[]): string[] {
//   const stringArr: string[] = [];

//   for (const element of arr) {
//     if (typeof element === "string") {
//       stringArr.push(element);
//     }
//   }

//   return stringArr;
// }

// const arr = [1, "Samariddin", "Zubayir", false, [], "Nurmamatov", {}];
// const outputText = getStringArr(arr)
// console.log(outputText);



// MISOL-5

// function switchLetters(str: string): string {
//   let result = '';

//   for (const char of str) {
//     if (char === char.toUpperCase()) {
//       result += char.toLowerCase();
//     } else {
//       result += char.toUpperCase();
//     }
//   }

//   return result;
// }

// const str = "Abdulaziz Programmer";
// const switchedStr = switchLetters(str);
// console.log(switchedStr);



// MISOL-6

// function changeObjToArr(obj: Record<string, number>): string[] {
//   const result: string[] = [];

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result.push(key + obj[key]);
//     }
//   }

//   return result;
// }

// const obj = { a: 1, b: 2, c: 3 };
// const result = changeObjToArr(obj);
// console.log(result);



// MISOL - 7

// interface Student {
//   name: string;
//   isGrant: boolean;
// }

// function seperateStudents(students: Student[]): { grant: string[], contract: string[] } {
//   const separated: { grant: string[]; contract: string[] } = {
//     grant: [],
//     contract: [],
//   };

//   for (const student of students) {
//     const group = student.isGrant ? "grant" : "contract";
//     separated[group].push(student.name);
//   }

//   return separated;
// }

// const students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];
// const result = seperateStudents(students);
// console.log(result);



// MISOL - 8

// interface Book {
//   name: string;
//   pages: number;
//   isReadFinished: boolean;
// }

// function getTotalPages(books: Book[]): number {
//   let totalPages = 0;
  
//   for (const book of books) {
//     if (book.isReadFinished) {
//       totalPages += book.pages;
//     }
//   }
//   return totalPages;
// }

// const books: Book[] = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true }
// ];

// const totalPagesRead = getTotalPages(books);
// console.log(`Total pages read: ${totalPagesRead}`);


// MISOL-9 

// interface Object {
//   keys(): string[];
// }

// Object.prototype.keys = function (): string[] {
//   return Object.keys(this);
// };

// // Test
// let obj = { a: 1, b: 2, c: 3 };
// const result = obj.keys();
// console.log(result);


// MISOL-10

// class Student {
//   firstName: string;
//   lastName: string;
//   university: string;
//   course: number;
//   totalYears: number;
//   isGrant: boolean;

//   constructor(
//     firstName: string,
//     lastName: string,
//     university: string,
//     course: number,
//     totalYears: number,
//     isGrant: boolean
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.university = university;
//     this.course = course;
//     this.totalYears = totalYears;
//     this.isGrant = isGrant;
//   }

//   getInfo(): string {
//     const grantType = this.isGrant ? "grant asosida" : "kontrakt asosida";
//     return `${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${grantType} o'qiydi. ${this.totalYears} yildan keyin universitetdan qutuladi.`;
//   }
// }

// // Test
// let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);
// const info = student.getInfo();
// console.log(info);


