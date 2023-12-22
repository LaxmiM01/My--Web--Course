//  Sum of Natural Numbers:**
// Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.

// let n = 10
// let sum = 0
// for(let i=1; i<=n; i++){
//     sum += i;
// }
// console.log(sum)

//2. Factorial of a Number:**
//Write a program to calculate the factorial of a given number `n` using a `for` loop.

// const n = 6
// let factorial = 1
// for (let i =1; i<=n; i++){
//     factorial *= i;              //6*5*4*3*2*1=720
// }
// console.log(factorial)

// 3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.





// 4. Print Multiplication Table:**
// Write a program to print the multiplication table of a given number `n` using a `for` loop.

// const n =3
// for(let i =1; i<=10;i++){
//     let res = i*3
//     console.log(3 + "*" + i + "=" + res)
// }


// 5. Reverse a String:**
// Write a program to reverse a string using a `for` loop.

// const string = "Laxmi"
// let reverse = ""
// for (let i = string.length-1; i>=0; i--){
//     reverse += string[i]
// }
// console.log(reverse)

//Reverse a String**
//Write a function `reverseString` that takes a string as input and returns the reverse of that string.

// const string = "Hello"
// function reverseString(str) {

//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// const result = reverseString(string);
// console.log(result);

// const input = "Hello World"
// let string = ""
// for (let i = input.length - 1; i>=0; i--){
//     string += input[i];
// }
// console.log(string)

// **Prime Number Check:**
// Write a program to check if a given number `n` is prime using a `for` loop.

// function isPrime(n){
//     if ( n < 2 )
//     return `${n} is not a Prime Number`

//     for (let i = 2; i<n; i++){
//         if( n % i === 0) {
//             return `${n} is not a Prime Number`

//         }
//     }
//     return `${n} is a Prime Number`
// }
// console.log(isPrime(27));

// const  n = 7
// function isPrime(n){
//     if ( n < 2 )
//     // return `${n} is not a Prime Number`
//    console.log(`${n} is not a prime`)
//     for (let i = 2; i<n; i++){
//         if( n % i === 0) {
//             return `${n} is not a Prime Number`

//         }
//     }
//     // return `${n} is a Prime Number`
//     console.log(`${n} is  a prime number`)
// }
// console.log(isPrime(n));

// **Print Pattern:**
// Write a program to print a pattern of stars using a `for` loop.

// const rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// const rows = 5;
// const cols = 5
// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= cols; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// const n = 5
// let string = ""
//  for (let i = 1; i<=n; i++){
//     for (let j = n; j > i; j--) {

//         string += ""
//       }
//       for (let k = 0; k < i * 2 - 1; k++) {
//         string += "*";
//       }
//     string += "<br>";
//  }
//  console.log(string)Count Digits in a Number:**
// Count Digits in a Number:**
// Write a program to count the number of digits in a given number `n` using a `for` loop.

// const n = 12345;  
// let count = 0;
// let temp = n;
// while (temp !== 0) {
//   count++;
//   temp = Math.floor(temp / 10);
// }
// console.log(count); 

// **9. Find Largest Element in an Array:**
// Write a program to find the largest element in an array using a `for` loop.

const numbers = [2, 5, 6, 8, 1, 4];
let largest = numbers[0];               
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {      
    largest = numbers[i];        
  }
}
console.log(largest); 












