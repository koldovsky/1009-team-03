//Find the smallest integer in the array
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

//Geometry Basics: Circle Circumference in 2D
//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const circleCircumference = circle => 2 * Math.PI * circle.radius;

//Training JS #12: loop statement --for..in and for..of
//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
    var five = [];
    for (var key in obj) {
        if (key.length == 5) five.push(key);
        if (obj[key].length == 5) five.push(obj[key]);
    }
    return five;
}
//Understanding closures - the basics
//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
    var funct_arr = [];
    for (var i = 0; i < n; i++) {
        funct_arr.push((function (i) {
            return function () {
                return i;
            }
        })
            (i)
        );
    }
    return funct_arr;
}

//Fun with ES6 Classes #2 - Animals and Inheritance
//https://www.codewars.com/kata/56f935002e6c0d55fa000d92/solutions/javascript

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Get Coding :)

class Shark extends Animal {
    constructor(name, age, status) {
        super();
        this.name = name;
        this.age = age;
        this.legs = 0;
        this.status = status;
        this.species = 'shark';
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super();
        this.name = name;
        this.age = age;
        this.status = status;
        this.legs = 4;
        this.species = "cat";

    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super();
        this.name = name;
        this.age = age;
        this.legs = 4;
        this.status = status;
        this.species = "dog";
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}