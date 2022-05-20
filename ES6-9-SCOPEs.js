/*-------------------"(I) LOCAL SCOPE / FUNCTION SCOPE"-------------------*/
/*-------------------"(I) LOCAL SCOPE / FUNCTION SCOPE"-------------------*/ (I)
// ES6 got intention to "fix issues and improve JS syntax"
// "SCOPE" is a term used to indicate where variables are available
// there are parts of our code where we don't have access to them
// "LOCAL" or "FUNCTION" scope refers to the part of code INSIDE/within a function
// below, "country" is a local variable that we can access only inside of the "visitCountry" function
function visitCountry(){
    var country = "Argentina";
}
visitCountry(); // undefined


function visitCountry(){
    var country = "Argentina";
    console.log(country);
}
visitCountry(); // Argentina

/*--------------------------------------*/
// trying to access a local variable from outside the function will produce an error
// below , "myDiary" is private, so we can't access it from outside the function
function readDiary(){
    const myDiary = "Dear diary, todya...";
}
console.log(myDiary); // Uncaught ReferenceError: myDiary is not defined



/*-------------------"(II) GLOBAL SCOPE"-------------------*/
/*-------------------"(II) GLOBAL SCOPE"-------------------*/ (II)
// the space OUTSIDE a function is called "GLOBAL SCOPE"
// => the code between functions
// if declare "cityToVisit" in the global scope, we can access it from outside and also from the "travel" function
let cityToVisit = "Salzburg"; // (global scope)
function travel(){
    console.log("Let's go to " + cityToVisit);
}
travel(); // Let's go to Salzburg
console.log(cityToVisit); // Salzburg

// below, the "dog" variable is a "global scope":
function annoyDog(){
    console.log("This cat doesn't like " + dog.name + " the dog."); // This cat doesn't like Zoe the dog.
}
var dog = {
    name: "Zoe",
    eat:"dog food",
    likes: ["ball"]
}
annoyDog();



/*-------------------"(III) BLOCK SCOPE"-------------------*/
/*-------------------"(III) BLOCK SCOPE"-------------------*/ (III)
// the last scope type: "BLOCK SCOPE"
// it is the part of our code in between the curly braces {}
// curly braces that belong to "loops" or "conditionals"
if (10 === 10) {
    console.log("This space here is block scope"); // This space here is block scope
}


/*-------------------"more details"-------------------*/ 
// "VAR" variables don't respect block scope, so can lead to errors if declared more than once
var age = 18;
var access = true;
if (age === 18){
    var access = false;
}
console.log(access); // false

// if we define "let" and "const" in a block scope, we can only access them in that block of code
// below, only one "canDrive" variable is displayed
const drivingAge = 18;
let canDrive = false; // only this variable is displayed in output => false
if (drivingAge === 18){
    let canDrive = true;
}
console.log(canDrive);

const drivingAge1 = 18;
let canDrive1 = false; 
if (drivingAge1 === 18){
    let canDrive1 = true;
    console.log(canDrive1); // only this variable is displayed => true
}

/*---------------*/
// "block scope" is very useful in limiting where we use certain variables
// it is helpful in preventing unwanted side effects or erros
// below we can only use the "index" variable in the loop
// after the loop finishes "index" is no longer available
for (let index=1; index<=3; index++){
    console.log("Let's count to three");
    // Let's count to three
    // Let's count to three
    // Let's count to three
}
console.log(index); // Uncaught ReferenceError: index is not defined

/*---------------*/
let neighborhood = { // (global scope)
    apartment: 13,
    garden: 1
};
function fixMyHouse(){
    const BATH = "Fix Mirror"; // (local scope)
}
console.log(BATH); 
// => Uncaught ReferenceError: BATH is not defined

/*---------------*/
const STUDY = true; // (global scope)
if(STUDY){
    let pass = "You have passed the exam!"; // (block scope)
    console.log(pass);
    // => You have passed the exam!
} else{
    console.log("You have failed");
}

/*---------------*/
for (let index = 1; index<=3; index++){
    console.log(index); 
    // 1
    // 2
    // 3
}
console.log(index); // Uncaught ReferenceError: index is not defined

/*---------------*/
function playMusic(){
    const band = ["Tina", "Michael", "Rue"];
    if(band && band.length){
        let availableBand = "Band is Available!"; // (block scope)
        console.log(availableBand); // Band is Available!
    }
}
playMusic();