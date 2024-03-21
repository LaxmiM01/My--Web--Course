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

// function padEmailWithAsterisks(email, desiredLength) {
//     // Split the email into username and domain parts
//     const [username, domain] = email.split('@');

//     // Calculate the padding length for username
//     const usernamePaddingLength = Math.max(0, desiredLength - username.length);

//     // Generate padding with asterisks
//     const usernamePadding = '*'.repeat(usernamePaddingLength);

//     // Combine padded username with the domain
//     const paddedEmail = username + usernamePadding + '@' + domain;

//     return paddedEmail;
// }

// // Example usage:
// const originalEmail = "example@example.com";
// const paddedEmail = padEmailWithAsterisks(originalEmail, 20);
// console.log(paddedEmail); // Output: "example*******@example.com"

// let email = "manpatti.laxmi@gmail.com"
// let firsthalf = email.slice(0,8)
// console.log(firsthalf)
// let secondhalf = firsthalf.padEnd(14, "*")
// console.log(secondhalf)
// let thirdhalf = email.slice(14)
// console.log(thirdhalf)
// let result = secondhalf.concat(thirdhalf)
// console.log(result)
// console.log(secondhalf + thirdhalf)


// var email = "ragirirahulkumar@gmail.com"
// let name = email.slice(11,16)
// console.log(name)                   //o/p: kumar

// let padding = name.padStart(16, "*")
// console.log(padding)                  //  O/P :  ***********kumar

// let remainingPart = email.slice(16)
// console.log(remainingPart)              // O/P : @gmail.com

// let output = padding.concat(remainingPart)
// console.log(output)                        // O/P : ***********kumar@gmail.com


// var email = "ragirirahulkumar@gmail.com"
// let name = email.slice(11,16)
// console.log(name)                   //o/p: kumar

// let padding = name.padStart(16, "*")
// console.log(padding)                      // O/P : ***********kumar

// var endPadding = padding.padEnd(16,22)
// console.log(endPadding)                    // O/P : ***********kumar

// let pad = endPadding.padEnd(22,"*")
// console.log(pad)                           // O/P : ***********kumar******

// let remainingPart = email.slice(22)
// console.log(remainingPart)               // O/P : .com

// let output = pad.concat(remainingPart)
// console.log(output)                        // O/P : ***********kumar******.com





