/*---------------------------*/ ES6 (Arrow Functions - purple) - 2022.01.20 (SPRINT 6)
// Change the following function into an arrow function and 
// save it in a variable named greetGuest. Call the function.
function greetGuest () {
    console.log("Hi " + "Jon");
    console.log("Hola " + "Jon");
}
greetGuest();

/*---------*/
const greetGuest = () => {
    console.log("Hi " + "Jon");
    console.log("Hola " + "Jon");
}
greetGuest();


/*---------------------------*/
const isEvenNumber = (number) => number % 2 == 0;
console.log(isEvenNumber(26)); // true


/*---------------------------*/ 
const twentyOne = (hand, dealer) => {
    if(hand > 21)
        return "bust";
    if(hand === dealer)
        return "push";
    if(hand > dealer)
        return "win";
    if(hand < dealer);
        return "lose";
}


/*---------------------------*/
const challengeGreeting = () => "Hello! Welcome to Terrace Inn & Suites!";
console.log(challengeGreeting());


/*---------------------------*/
const reversedName = (firstName, lastName) => {
    const constructedName = lastName + ", " + firstName; //
    return constructedName; //
};
console.log(reversedName("Isaac", "TAN"));
// TAN, Isaac


/*---------------------------*/ projects (8/10)
// 1) First, declare an arrow function named volume (using shorthand notation) 
// that takes a parameter width and returns its cubed value.
// 2) Next, declare an arrow function named surfaceArea (using shorthand notation) 
// that takes a parameter width and returns the surface area (remember, a cube has 6 sides).
const volume = (width) => width * width * width;
const surfaceArea = (width) => (width * width) * 6;
console.log(volume(4)); // 64
console.log(surfaceArea(4)); // 96


/*---------------------------*/ (Website Signup) (9/10)
const containsNumber = (password) => /\d/.test(password);
const longEnough = (password) => password.length > 8;
const match = (password, repeatPassword) => password === repeatPassword;

var password = "tulips6643";
var repeatPassword = "tulips6643";
if (longEnough(password) && match(password, repeatPassword) && containsNumber(
    password)) {
  console.log("Passwords meet criteria!");
} else {
  console.log("Passwords do not meet criteria!");
}
// Passwords meet criteria!



/*---------------------------*/ (Totaling Program - sous total) (10/10)
// toFixed(2) => arrondi au centièmre
var receipt = [5.99, 6.79, 3.89, 9.99, 2.50];
const total = (pricesArray) => {
  var sum = 0;
  for (var i = 0; i < pricesArray.length; i++) {
    sum += pricesArray[i];
  }
  return sum;
}
var applyDiscount = (total) => total * 0.9;
var subtotal = total(receipt);
console.log("Subtotal: " + subtotal.toFixed(2));
var discountedTotal = applyDiscount(subtotal);
console.log("Discounted Total: " + discountedTotal.toFixed(2));



