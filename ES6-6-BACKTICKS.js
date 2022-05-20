/*-----------------------------*/ 
(TEMPLATE LITERALS) (`STRING LITERALS`)
(BACKTICKS + $ + {variable} + BACKTICKS)


// to combine VARIABLES with STRINGS
let name = "Isaac";
console.log("Hello " + name + "!"); // Hello Isaac
console.log(`Hello ${name}!`); // Hello Isaac

/*-----------------------------*/
let cake = `Apple`; 
console.log(cake); // Apple

/*-----------------------------*/
let category = `pie`;
let cake = `Apple ${category}`;
console.log(cake); // Apple pie

/*-----------------------------*/
let quantity = 20;
let price = 10;
let cost  = `Total cost: ${quantity * price}`;
console.log(cost); // Total cost: 200

/*-----------------------------*/
// when calling a function, take away () 
// if we pass a STRING LITERAL as an argument to the function
const greetings = (name) => {
    return `Bonjour ${name}!`;
}
console.log(greetings`Jane`); // Bonjour Jane!

/*-----------------------------*/
let redTeam = 50;
let greenTeam = 45;
let game = `Total players: ${redTeam + greenTeam}`;
console.log(game); // Total players: 95

/*-----------------------------*/
let getTeam = name => {
    let team = `PSG`;
    return `${name}'s team is ${team}.`;
}
console.log(getTeam`Messi`); // Messi's team is PSG.