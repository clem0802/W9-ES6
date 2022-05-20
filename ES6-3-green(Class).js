/*---------------------------*/ ES6 (CLASS) - 2022.01.20 (SPRINT 6)
/*---------------------------*/
// classes are templates for objects
// we create objects faster thru classes
// constructor() is a method used inside a class, to create new objects
class Book {
    constructor(author, title) {
    }
}

class Animal {
    constructor(name, species) {      
    }
}


/*---------------------------*/
// "this" keyword refers to the object being created
class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
}
var book1 = new Book("Virginia Woolf", "A Room of One's Own");
console.log(book1);



/*---------------------------*/
// by adding "methods" to classes, the objects will be able to perform actions
// objects created from a class have access to its METHODS
class VirtualPet { 
    constructor(name) {
     this.name = name;
    }
   
    eat(food){ // METHOD
        console.log("meow bars");
    }
}
var pet = new VirtualPet("Tom");
pet.eat(); // meow bars



/*---------------------------*/
class VirtualPet { 
    constructor(name) {
     this.name = name;
    }
   
    eat(food){ // METHOD
        if(food === "treats") {
            console.log("meow bars");
        } else {
            console.log("discard")
        }
    }
}
var pet = new VirtualPet("Tom");
pet.eat("treats"); // meow bars



/*---------------------------*/
// les différentes instances ne s'affectent pas entre elles
// because instances are independent, they are NOT CONNECTED to each other
class User {
    constructor(name) {
     this.name = name;
     this.isOnline = true;
    }
   }
   
var user1 = new User("Arya");
var user2 = new User("Brian");                   
console.log(user1);
console.log(user2);



/*---------------------------*/
class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }
}
var banana = new Food("banana", 105);
console.log(banana); // Food {name: 'banana', calories: 105}
console.log(banana.calories); // 105 (still....)
var rice = new Food("rice", 50);
banana.calories = banana.caloreis / 2;
console.log(rice); // Food {name: 'rice', calories: 50}



/*---------------------------*/
// add "status" property for all users
class User {
    constructor(name) {
     this.name = name;
     this.isOnline = true;
     this.status = "Hey, I'm using Mimo"; //
    }
   }
   
var user1 = new User("Arya");
var user2 = new User("Theon");

console.log(user2.status);



/*---------------------------*/
// if no constructor(), there is a "DEFAULT CONSTRUCTOR" unseen
// constructors can also be EMPTY
class User {
    constructor(name) {
     this.name = name;
     this.isOnline = true;
    }
    
    sayHi() {
     console.log("Hi, I'm " + this.name);
    }
   }
   
var user1 = new User("Arya");
var user2 = new User("Jon");
user1.sayHi(); // Hi, I'm Arya
user2.sayHi(); // Hi, I'm Jon



/*---------------------------*/
/*---------------------------*/
// here it uses the DEFAULT CONSTRUCTOR
class Car { // 
    showWarning() {
     console.log("Fasten seatbelts"); // Fasten seatbelts
    }
   }
var car = new Car();
car.showWarning();

/*------*/
class Planet {
    rotate(){
        console.log("One day over!");
    }
}
var planet1 = new Planet();
planet1.rotate(); // One day over!



/*---------------------------*/
/*---------------------------*/
class Sport {
    constructor(name) {
     this.name = name;
     this.scoreValue = 0;
     this.periods = 4;
     this.score = 0;
    }
    scored(){
        this.score += this.scoreValue;
        console.log(this.score);
    }
  }

var sport1 = new Sport("Football");
var sport2 = new Sport("Soccer");
sport1.scoreValue = 6;
sport2.scoreValue = 1;
sport1.scored();
sport2.scored();
   


/*---------------------------*/
class Country {
    constructor(){              
    this.name = "";
  }
  }
var country1 = new Country();
country1.name = "France"; // "France"



/*---------------------------*/
/*---------------------------*/
