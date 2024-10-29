import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());
console.log(`Posts length: ${getPostsLength()}`);

// /** Common JS Example */
// const { generateRandomNumber, celciusToFahrenheit } = require("./utils");

// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`29 Celcius to Fahrenheit:`, celciusToFahrenheit(29));
