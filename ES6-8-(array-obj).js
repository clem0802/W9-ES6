// In 2015, there was a major JS revision called ECMAScript 2015 (ES6)
// => two new VARIABLE types
// "VAR" can be "redeclared"
// "LET" & "CONST" cannot be "redeclared"

/*--------------------------------------*/
var fullName = "Emma";
const occupation = "dancer";
let age = 30;
console.log(fullName); // Emma
console.log(occupation); // dancer
console.log(age); // 30
console.log(fullName + " is a " + occupation);
console.log(`${fullName} is a ${occupation}`);


/*--------------------------------------*/
// to make it obvious that a var is of type "const", we can name it with UPPERCASE letters
const BIRTHDAY = "25/09/2008";
console.log(BIRTHDAY);
// and if more than one word, we use "snake_case":
const SPEED_OF_LIGHT = "3*10² m/s";
console.log(SPEED_OF_LIGHT);

/*--------------------------------------(via ARRAY)*/
// we can't change array stored in a "const"
// but we can use ARRAY methods to update its contents
const NEW_PRESENT = "Trousers";
const WARDROBE = ["Shirt"];
WARDROBE.push(NEW_PRESENT);
console.log(WARDROBE); // ['Shirt', 'Trousers']

/*--------------------------------------(via OBJECT)*/
const MY_CLOTHES = {
    shirts:1,
};
MY_CLOTHES.shirts++;
console.log(MY_CLOTHES.shirts); // 2