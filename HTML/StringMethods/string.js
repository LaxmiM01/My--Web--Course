//1. How do you find the length of a string in JavaScript?

// let string = "JavaScript"
// // let newString = string.length
// console.log(string.length)

//2. What method is used to convert a string to lowercase in JavaScript?

// let string = "WELCOME"
// let newString = string.toLocaleLowerCase()
// console.log(newString)

//3. Explain the purpose of the `toUpperCase()` method in JavaScript.

// let string = "welcome"
// let newString = string.toLocaleUpperCase()
// console.log(newString)

//4. How can you check if a string contains a specific substring in JavaScript?

// let string = "Hello, world!";
// let substring = "world";

// if (string.indexOf(substring) !== -1) {
//     console.log("Substring found!");
// } else {
//     console.log("Substring not found.");
// }

// let string = "Hello, world!";
// let substring = "world";

// if (string.includes(substring)) {
//     console.log("Substring found!");
// } else {
//     console.log("Substring not found.");
// }

// let string = "Hello, world!";
// let substring = "world";
// let regex = new RegExp(substring);

// if (regex.test(string)) {
//     console.log("Substring found!");
// } else {
//     console.log("Substring not found.");
// }

// let string = "hello, welcom, world"
// const newString = string.substring(7,13)
// console.log(newString)

//5. What does the `charAt()` method do in JavaScript?

// let name = "Laxmi"
// let output = name.charAt(4)
// console.log(output)

// let text = "Hello World!"
// let newtext = text.charAt(6)
// console.log(newtext)

//6. How do you replace a substring within a string using JavaScript?

// let text = "Hello, world!"
// let newtext = text.replace("world!", "welcome!")
// console.log(newtext)

// let originalString = "Hello, world!";
// let substringToReplace = "world";
// let replacementString = "everyone";

// let newString = originalString.replace(substringToReplace, replacementString);
// console.log(newString); // Output: "Hello, everyone!"

//7. What method can be used to split a string into an array in JavaScript?

// let method = "method can be used to split a string into an array in JavaScript?"
// let output = method.split("|")
// console.log(output)
// //  let input = method[5].split(",")
// // console.log(input)

//8. How can you remove leading and trailing whitespace from a string in JavaScript?

// let sentance = "          Wellcome to New world    "
// let output = sentance.trim()
// console.log(output)
// //  let length = (sentance.length)
// //  console.log(length)

//9. What method is used to concatenate two strings in JavaScript?

// var text1 = "hello"
// var text2 = " "
// var text3 = "world"
// var text = text1.concat(text2+text3)
// console.log(text)/

//10. How do you check if a string starts with a specific prefix in JavaScript?

let name = "10"
let paded = name.padStart(10,"*")
console.log(paded)

