/*----------------------*/
const isWinter = false;
function freeze(){
    const isWinter = true;
    console.log(isWinter); // true
}
freeze();
console.log(isWinter); // false

/*----------------------*/
for (let i=1; i<=3; i++){
    let age = i*10;
    console.log("I am " + age + " years old.");
    // I am 10 years old.
    // I am 20 years old.
    // I am 30 years old.
}

/*----------------------*/
var countdown = 6; // (global scope)(II)
for (var i=0; i<=5; i++){
    countdown--;
    console.log(countdown);
    // 5
    // 4
    // 3
    // 2
    // 1
    // 0
}

/*----------------------*/
const MONDAY = true; // (global scope)(II)
function work(){
    if(MONDAY){
        let code = "Let's do some coding";
        console.log(code); // Let's do some coding
    }
}
work();

/*----------------------*/
// below, i => (block scope), got some doubts...............
let blinkersOn = true;
for (let i=0; i<8; i++){ // i => (block scope)(III)
    blinkersOn = !blinkersOn;
}
function stopBlinkers(){
    var blinkersOff = true;
}

/*----------------------*/
function calculateArea(width, height){
    let area = width*height; // (local scope)(I)
    return area;
}
var wallSize = calculateArea(6,7);
console.log(wallSize); // 42

/*----------------------*/
// the countdown is working
// "i" is changing its value and we want to avoid that
// use correct variable type "let" in the block scope to make the console.log statement be right
var i = 10;
for (let i=10; i>=0; i--){ // (block scope)
    console.log(i);
    // 10
    // 9
    // 8
    // 7
    // 6
    // 5
    // 4
    // 3
    // 2
    // 1
    // 0
}
console.log("Variable i should always be 10, and it is " + i);
// Variable i should always be 10, and it is 10


/*----------------------*/ Math.floor((Math.random()))
/*----------------------*/ Math.floor((Math.random()))
// make the "winningNumber" variable accesible in the "drawWinner" function 
function drawWinningNumber(){
    let winningNumber = Math.floor((Math.random()*3));
}
function drawWinner(){
    const PLAYERS = ["Amada", "Sheila", "Rob"];
    let winner = PLAYERS[winningNumber];
    console.log("The winner with number " + winningNumber + " is " + winner);
    // (RANDOM output as below):
    // The winner with number 0 is Amada
    // The winner with number 1 is Sheila
    // The winner with number 2 is Rob
}
drawWinner();
//
let winningNumber = Math.floor((Math.random()*3));
function drawWinner(){
    const PLAYERS = ["Amada", "Sheila", "Rob"];
    let winner = PLAYERS[winningNumber];
    console.log("The winner with number " + winningNumber + " is " + winner);
    // (RANDOM output as below):
    // The winner with number 0 is Amada
    // The winner with number 1 is Sheila
    // The winner with number 2 is Rob
}
drawWinner();


/*----------------------*/ (GLOBAL)
/*----------------------*/ (GLOBAL)
// make the local "toDoList" variable a global variable
function cleanUp(){
    const toDoList = ["Sweeping", "Washing", "Mopping"]; // (local scope)(I)
    for (let i=0; i<toDoList.length; i++){
        toDoList.pop(toDoList[i]);
    }
    console.log("I still have some " + toDoList + " to do!");
    // I still have some Sweeping to do!
}
cleanUp();
// 
const toDoList = ["Sweeping", "Washing", "Mopping"]; // (global scope)(II)
function cleanUp(){
    for (let i=0; i<toDoList.length; i++){
        toDoList.pop(toDoList[i]);
    }
    console.log("I still have some " + toDoList + " to do!");
    // I still have some Sweeping to do!
}
cleanUp();


/*----------------------*/ (GLOBAL)
/*----------------------*/ (GLOBAL)
// make the code run without errors by making the constant be only a "global variable"
const RETIREMENT_AGE = 67;
function retire(age){
    RETIREMENT_AGE = 67;
    if(age === 67){
        console.log("Finally some rest!"); // (error) => Uncaught TypeError: Assignment to constant variable
    }
}
var finalRetirement = retire(RETIREMENT_AGE);
// 
const RETIREMENT_AGE = 67;
function retire(age){
    if(age === 67){
        console.log("Finally some rest!"); // (OK) => Finally some rest!
    }
}
var finalRetirement = retire(RETIREMENT_AGE);


/*----------------------*/ (LOCAL)
/*----------------------*/ (LOCAL)
// make the year a different one by setting it to a local variable inside each function
const year = 1918;
function checkDateFirstWorldWar(){
    console.log("World War I ended in " + year);
}
function checkDateSecondWorldWar(){
    console.log("World War II ended in " + year);
}
checkDateFirstWorldWar();
checkDateSecondWorldWar();
//
function checkDateFirstWorldWar(){
    const year1 = 1918;
    console.log("World War I ended in " + year1); // World War I ended in 1918
}
function checkDateSecondWorldWar(){
    const year2 = 1945;
    console.log("World War II ended in " + year2); // World War I ended in 1945
}
checkDateFirstWorldWar();
checkDateSecondWorldWar();


/*----------------------*/