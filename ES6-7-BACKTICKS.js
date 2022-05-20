/*-----------------------------*/ 
(TEMPLATE LITERALS) (`STRING LITERALS`)
(BACKTICKS + $ + {variable} + BACKTICKS)


/*-----------------------------*/
let bestColor = (color) =>{
    let name = `Jerry`;
    return `${name} always wears ${color} shirts.`;
}
console.log(bestColor`blue`); // Jerry always wears blue shirts.