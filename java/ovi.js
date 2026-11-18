// 1. Create a variable named name and print it
let name = "Safayet";
console.log("Name:", name);

// 2. Create a variable named age and print it
let userAge = 21;
console.log("Age:", userAge);

// 3. Create city and country variables and print them
let city = "Rajshahi";
let country = "Bangladesh";

console.log("City:", city);
console.log("Country:", country);

// 4. Create a variable using let and update its value
let number = 10;
number = 20;

console.log("Updated Number:", number);

// 5. Create a constant named PI
const PI = 3.1416;
console.log("PI:", PI);

// 6. Combine firstName and lastName
let firstName = "Safayet";
let lastName = "Jaman";

let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

// 7. Increase price by 100
let price = 500;
price += 100;

console.log("Updated Price:", price);

// 8. Swap two variable values
let firstValue = 10;
let secondValue = 20;

let temp = firstValue;
firstValue = secondValue;
secondValue = temp;

console.log("First Value:", firstValue);
console.log("Second Value:", secondValue);

// 9. Create product variables and print them
let productName = "Laptop";
let productPrice = 50000;
let quantity = 2;

console.log("Product Name:", productName);
console.log("Product Price:", productPrice);
console.log("Quantity:", quantity);

// 10. Create a variable and update its value
let score = 50;
score = 100;

console.log("Updated Score:", score);

// 11. Create a String variable and check its data type
let myString = "Hello JavaScript";

console.log(typeof myString);

// 12. Create a Number variable and check its data type
let myNumber = 100;

console.log(typeof myNumber);

// 13. Create a Boolean variable and check its data type
let isStudent = true;

console.log(typeof isStudent);

// 14. Create a variable with null value
let emptyValue = null;

console.log(typeof emptyValue);

// 15. Create a variable without assigning any value
let undefinedValue;

console.log(typeof undefinedValue);

// 16. Create an Array containing five numbers
let numbers = [10, 20, 30, 40, 50];

console.log(typeof numbers);
console.log(Array.isArray(numbers));

// 17. Create an Object with name, age and city
let person = {
  name: "Arafat",
  age: 21,
  city: "Rajshahi",
};

console.log(person);

// 18. Check data types using typeof
console.log(typeof "JavaScript");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

// 19. Compare String and Number data types
let stringNumber = "100";
let actualNumber = 100;

console.log(typeof stringNumber);
console.log(typeof actualNumber);

console.log(typeof stringNumber === typeof actualNumber);

// 20. Change a String variable into a Number
let changingValue = "Hello JavaScript";

console.log(typeof changingValue);

changingValue = 100;

console.log(typeof changingValue);

// 21. Perform Arithmetic Operations
let firstNumber = 20;
let secondNumber = 10;

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);

// 22. Find the remainder using Modulus
let dividend = 25;
let divisor = 4;

console.log("Remainder:", dividend % divisor);

// 23. Perform Comparison Operations
let comparisonFirst = 10;
let comparisonSecond = 5;

console.log(comparisonFirst > comparisonSecond);
console.log(comparisonFirst < comparisonSecond);
console.log(comparisonFirst === comparisonSecond);
console.log(comparisonFirst !== comparisonSecond);

// 24. Check whether age is greater than 18
let age = 20;

console.log(age > 18);

// 25. Perform Logical AND and OR Operations
let u = 15;
let v = 10;

console.log(u > 10 && v > 5);
console.log(u > 20 || v > 5);

// 26. Increase number using Increment
let numberForIncrement = 7;

numberForIncrement++;

console.log("Incremented Number:", numberForIncrement);

// 27. Decrease number using Decrement
let numberForDecrement = 10;

numberForDecrement--;

console.log("Decremented Number:", numberForDecrement);

// 28. Check number using Ternary Operator
let num = 15;

let numberResult = num > 10 ? "Greater than 10" : "Not greater than 10";

console.log(numberResult);

// 29. Perform Assignment Operations
let t = 10;

t += 5;
console.log("After += :", t);

t -= 5;
console.log("After -= :", t);

t *= 2;
console.log("After *= :", t);

t /= 2;
console.log("After /= :", t);

// 30. Find the greater number using Ternary Operator
let w = 50;
let e = 30;

let greaterNumber = w > e ? w : e;

console.log("Greater Number:", greaterNumber);
