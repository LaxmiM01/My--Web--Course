//Sum of Natural numbers
//natural Number = 1 to Infinity

// let sum = 0
// const n = 10
// for( let i = 0; i<=n; i++){
//     sum += i;
// }
// console.log(sum)

//factorial of a number
//n!

// const n = 5
// let factorial = 1
// for( let i = 1; i<= n; i++){
//     factorial*= i;

// }
// console.log(factorial)

//OR

// function factorial (n) {
//     let result = 1;
//     for(i= 1; i<= n; i++){
//         result*= i
//     }
//     return result;
// }
// console.log(factorial(6))

//Fibonacci Sequence

// const n = 7
// let first = 0;
// let second = 1, next;
// // console.log(first)
// // console.log(second)
// for( let i = 2; i<n; i++) {
//     next = first + second
//     console.log(next)
//     first = second
//     second = next;
// }

//OR anther method

// function fibonacci(n) {
//     let fibsequence = [0,1]
//     for( let i = 2; i<=n; i++){
//         fibsequence.push(fibsequence[i-1] + fibsequence[i-2])
//     }
//     return fibsequence.slice(0,n)
// }
// console.log(fibonacci(10))

//**Mulitiplication Table**
//Write a program to print the multiplication table of a given number `n` using a `for` loop.

// const n = 10
// for( let i = 1; i<=n; i++){
//     let result = i*5;
//     console.log(5 + "*" + i + "=" + result)
// }


//**Print Pattern:**
//Write a program to print a pattern of stars using a `for` loop.

// function printStarPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += '* ';
//         }
//         console.log(pattern);
//     }
// }

// // Example usage:
// const numberOfRows = 6;
// printStarPattern(numberOfRows);

//(OR)

// const rows = 5;
// const cols = 5
// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= cols; j++) {
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

//**5. Reverse a String:**
//Write a program to reverse a string using a `for` loop.

// const string = "Reverse a String"
// let reverse = " "
// for( let i = string.length-1; i>=0; i--){
//     reverse += string[i]
// }
// console.log(reverse)
            //  (OR)
// const string = "program to reverse a string"
// function reverseString(str){
//     let newString = " ";
//     for( let i= str.length-1; i>=0; i--){
//         newString += str[i]
//     }
//     return newString
// }
// const result = reverseString(string)
// console.log(result)


//**6. Prime Number Check:**
//Write a program to check if a given number `n` is prime using a `for` loop.

// function isPrimeNumber(n){
//     if(n<2)
//     return `${n} is not a primeNumber`
//     for(let i = 2; i<n; i++){
//         if(n % i === 0){
//             return `${n} is not a primenumber`
//         }
//     }
//     return `${n} is a primenumber`   
// }
// console.log(isPrimeNumber(27))

//**7. Count Digits in a Number:**
//Write a program to count the number of digits in a given number `n` using a `for` loop.

// const n = 12345;  
// let count = 0;
// let temp = n;
// while (temp !== 0) {
//   count++;
//   temp = Math.floor(temp / 10);
// }
// console.log(count);      
     //(OR)

    //  function countDigits(n){
    //     let count = 0
    //     while (n !== 0){
    //         n = Math.floor(n/10);
    //         count ++
    //     }
    //     return count;
        
    //  }
    //  const number = parseInt(prompt("Enter the number : "))
    //  console.log("Number of digits in ", 20, "is:", countDigits(number))

//     const n = 12345
//     let temp = n
//     let count = 0
//     while( temp !== 0){
//         count ++
//         temp = Math.floor(temp/10)
//     }
// console.log(count)

// **9. Find Largest Element in an Array:**
// Write a program to find the largest element in an array using a `for` loop.

// const numbers = [7, 2, 9, 1, 5, 15, 25];
// let largest = numbers[0];               
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {      
//     largest = numbers[i];        
//   }
// }
// console.log(largest);    //25

// **10. Reverse an Array:**
// Write a program to reverse the elements of an array using a `for` loop.

const inputArray = [1, 2, 3, 4, 5];
const reversedArray = [];    
for (let i = inputArray.length - 1; i >= 0; i--) {
  reversedArray.push(inputArray[i]);
}
console.log(reversedArray); // [5, 4, 3, 2, 1]






