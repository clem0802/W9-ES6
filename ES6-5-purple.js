class Mammal {
    eat(food){
        console.log(food + " is so good");
    }
}
class Rabbit extends Mammal {
    eat(food){
        if(food === "lettuce"){
            console.log("nibbling " + food + " is so good");
        }
    }
}
var mamal1 = new Mammal();
mamal1.eat("lettuce");
var rabbit1 = new Rabbit();
rabbit1.eat("lettuce");



/*---------------------------*/
class Car {
    constructor(horsepower) {
     this.horsepower = horsepower;
     this.doors = 4;
    }
}
class SportsCar extends Car {
    constructor(horsepower) {
     super(horsepower);
     this.turbo = "Yes";
    }
}
var sportsCar = new SportsCar(500)
console.log(sportsCar);
// (SportsCar will have 3 properties: horsepower, doors, turbo)



/*---------------------------*/
class Empllyee {
    constructor(salary){
        this.salary = salary;
    }
}
class Chef extends Employee{
    constructor(salary, knife){
        super(salary); // inherit PROPERTY
        this.knife = knife; // add Chef's OWN PROPERTY
    }
}



/*---------------------------*/
class Tool {
    constructor(brand, cost) {
        this.brand = brand;
        this.cost = cost;
    }
}
class Saw extends Tool {
    constructor(brand, cost, blade){ // must add "blade", new PROPERTY
        super(brand, cost); // inherit PROPERTY
        this.blade = blade; // add Saw's OWN PROPERTY
    }
}
var jigsaw = new Saw("ABC", 99, "small");
console.log(jigsaw); 
// Saw {brand: 'ABC', cost: 99, blade: 'small'}



/*---------------------------*/
class Vehicle {
    constructor(make, model) {
     this.make = make;
     this.model = model;
}
    start() {
     console.log("Starting " + this.make + " " + this.model)
    }
}
   class Boat extends Vehicle {
    constructor(make, model, type) {
     super(make, model); // inherit PROPERTY
     this.type = type; // add Boat's OWN PROPERTY
    }
   
}
var powerboat = new Boat("SEA RAY", "L650", "Power");
powerboat.start();



/*---------------------------*/
class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        console.log("Starting " + this.make + " " + this.model);
    }
}
class Boat extends Vehicle{
    constructor(make, model, type){ // must add "type", new PROPERTY
        super(make, model); // inherit PROPERTY
        this.type = type; // add Boat's OWN PROPERTY
    }
    start(){
        super.start(); // inherit METHOD
        console.log("Display " + this.type);
    }
}
var powerboat = new Boat("SEA RAY", "L650", "Power");
powerboat.start();
// Starting SEA RAY L650
// Display Power



/*---------------------------*/
/*---------------------------*/
/*---------------------------*/
/*---------------------------*/
/*---------------------------*/
/*---------------------------*/