/*---------------------------*/
/*---------------------------*/ ES6 (Arrow Functions - green) - 2022.01.18 (SPRINT 6)
function getGreeting(){
    return "Hello";
}

var greeting = () => "Hi";

console.log(getGreeting());
console.log(greeting());


/*---------------------------*/
// with parameters
function getGreeting(firstName){
    return "Greetings to " + firstName;
};

var greeting = (firstName) => {
    return "Greetings to " + firstName;
}

console.log(greeting("Tony"));


/*---------------------------*/
const greetings = () => {
    const name = "Isaac";
    return "Greetings to " + name;
}
greetings(); 
// "Greetings to Isaac"

/*-------*/
// if an arrow function only has one statement, 
// we can take off the curly braces and the "return" keyword
const greetings = () => "Bonjour";
greetings();
// "Bonjour"


/*---------------------------*/
const getVehicleCount = () => {
    count = 4003;
    return count;
}
console.log(getVehicleCount()); 
// 4003

/*-------*/
// to make it shorter
const getVehicleCount = () => 400;
console.log(getVehicleCount());
// 400

/*-------*/
const getMessage = () => "Welcome to Cyprus!";
console.log(getMessage());
// Welcome to Cyprus!



/*---------------------------*/
/*---------------------------*/ "MULTIPLE WAYS" to write JavaScript
/*-------*/ (1)
const getPrice = (discount) => 500 - (500 * discount);
console.log(getPrice(0.20)); // 400

/*-------*/ (2)
const getPrice = (total) => {
    const discount = 0.2;
    return total - (discount * total);
}
console.log(getPrice(500)); // 400

/*-------*/ (3)
// in arrow function, don't have to add () if only 1 PARAMETER
const getPrice = total => {
    const discount = 0.2;
    return total - (discount * total);
}
console.log(getPrice(500)); // 400

/*-------*/ (4)
const getPrice = (total = 500) => {
    const discount = 0.2;
    return total - (discount * total);
}
console.log(getPrice()); // 400

/*-------*/ (5)
// 2 parameters
const getPrice = (total = 500, discount = 20) => total - (discount / 100 * total);
console.log(getPrice()); // 400



/*---------------------------*/
/*---------------------------*/
/*-------*/
const getSquare = (number=0) => number*number;
console.log(getSquare(5)); // 25

/*-------*/
const getArea = (length, width=3) => length*width;
console.log(getArea(5)); // 15


