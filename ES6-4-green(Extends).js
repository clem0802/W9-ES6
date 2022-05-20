/*---------------------------*/ ES6 (CLASS - EXTENDS) - 2022.01.20 (SPRINT 6)
/*---------------------------*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() { //
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal { // DOG
    bark() {
        console.log("Woof!")
    }
}
var dog = new Dog("Pug");
dog.eat(); // Pug is eating
dog.bark(); // Woof!
console.log(dog); // Dog { name: 'Pug' }

class Bird extends Animal { // BIRD
    tweet() {
        console.log("Tweet!")
    }
}
var bird = new Bird("Nightingale");
bird.eat(); // Nightingale is eating
bird.tweet(); // Tweet!
console.log(bird); // Bird {name: 'Nightingale'}



/*---------------------------*/
class Employee {
    constructor(company){
        this.company = company;
    }
}
class Dishwasher extends Employee { //
}

var emp1 = new Dishwasher("Cleaning Society");
console.log(emp1); 
// Dishwasher {company: 'Cleaning Society'}



/*--------------------------------*/
/*--------------------------------*/ (2022.01.21)
class Human {
constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
receiveDamage() {
    this.life = this.health - 10;
  }
attack() {
    console.log("Swings " + this.weapon); // Swings axe
  }                                       // Swings sword
}
   
// super(weapon) calls the "Human" class' CONSTRUCTOR and create the weapon PROPERTY
class Warrior extends Human {
    constructor(weapon, warCry) {
        super(weapon);
        this.warCry = warCry;
  }
receiveDamage() {
    this.health = this.health - 5;
  }
attack() {
    super.attack();
    console.log("Barritus!!"); // Barritus!!
  }
}

var human = new Human("axe");
human.attack();
var warrior = new Warrior("sword", "Barritus");
warrior.attack();
console.log(warrior.weapon); // sword
console.log(warrior.warCry); // Barritus
var alexander = new Warrior("sword", "Ohlala")
var leonidas = new Warrior("spear", "Labébé")
alexander.attack();
leonidas.attack();
console.log(alexander.weapon); // sword
console.log(alexander.warCry); // Ohlala



/*---------------------------*/
class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log("I am a " + this.name); // I am a Lab
    }
}

class Dog extends Animal{
    consturctor(name,trainer){
        super(name);
        this.trainer = trainer;
    }
    speak(){
        super.speak();
        console.log("My trainer is " + this.trainer); // My trainer is Terry
    }
}
var rover = new Dog("Lab","Terry");
rover.speak(); 



/*---------------------------*/
class VirtualPet { 
    constructor(name) {
     this.name = name;
}

drink(liquid) {
     if (liquid === "juice") {
      console.log("slurp slurp");
     } else {
      console.log("discard");
     }
   }  
}
   
var vDog = new VirtualPet("Bella");
vDog.drink("water");
// discard



/*---------------------------*/
class Calculator {
    constructor(){
        this.value = 0;
    }
    print(){
        console.log(this.value);
    }
    add(amount){
        this.value += amount;
    }
    subtract(amount){
        this.value -= amount;
    }
}

var calc1 = new Calculator();
calc1.add(9);
calc1.subtract(6);
calc1.print(); // 3



/*---------------------------*/
class Playlist { 
    constructor() {
     this.songs = []
}
  addSong(song){
    this.songs.push(song)
}
  play(){
    for(let i =0; i < this.songs.length; i++){
    console.log(this.songs[i]);
    }
}
  remove(){
    this.songs.pop();
    }
}

var myPlaylist = new Playlist();
myPlaylist.addSong("Alright");
myPlaylist.play();
// Alright



/*---------------------------*/
class Clothing {
    constructor(name, size){
        this.name = name;
        this.size = size;
    }
}

var shirt1 = new Clothing("tshirt", "L");
var pants1 = new Clothing("joggers", "M");
console.log(shirt1); // Clothing {name: 'tshirt', size: 'L'}
console.log(pants1); // Clothing {name: 'joggers', size: 'M'}



/*---------------------------*/
class Post {
    constructor(title) {
     this.title = title;
     this.body = "";
     this.likes = 0;
    }
    like(){
     this.likes ++;
    }
   }
var post1 = new Post("react");
var post2 = new Post("es6");
post1.body = "Makes front end so easy!";
post2.body = "I love arrow functions and classes";
post1.like();
post2.like();
console.log(post1); // Post {title: 'react', body: 'Makes front end so easy!', likes: 1}
console.log(post2); // Post {title: 'es6', body: 'I love arrow functions and classes', likes: 1}



/*---------------------------*/
class Message {
    send(text){
        console.log(text);
    }
}

var message1 = new Message();
message1.send("I am learning about classes");
// I am learning about classes



/*---------------------------*/
class Arthropoda {
    constructor(legs){
        this.legs = legs;
    }
    crawl(){
        console.log("crawling on " + this.legs + " legs");
    }
}

class Insect extends Arthropoda {
    fly(){
        console.log("Don't need legs. Flying away");
    }
}
class Arachnid extends Arthropoda {
}

var ant = new Insect(6);
ant.crawl(); // crawling on 6 legs
var spider = new Arachnid(8);
spider.crawl(); // crawling on 8 legs
var flyingInsect = new Insect;
flyingInsect.fly(); // Don't need legs. Flying away


