// Module 3 JS Fundamentals 

// JS Fundamentals - Q1
console.log("" + 1 + 0) // 10 
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(!true) // false
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) //$45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log(" -9 " + 5) //  -9 5
console.log(" -9 " - 5) // -14
console.log(null + 1) // 1
console.log(undefined + 1) // NaN
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(" \t \n" - 2) // -2

// JS Fundamentals - Q2
let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four // 34
let multiplication = three * four // 12
let division = three / four // 0.75
let subtraction = three - four // -1
let lessThan1 = three < four // true
let lessThan2 = thirty < four // false

console.log("addition: ", addition);
console.log("multipication: ", multiplication);
console.log("division: ", division);
console.log("subtraction: ", subtraction);
console.log("lessThan1: ", lessThan1);
console.log("lessThan2: ", lessThan2);  //////// ASK WHY TRUE!

// JS Fundamentals - Q3
if (0) console.log('#1 zero is true') // Will not print - because 0 is a false value 
if ("0") console.log('#2 zero is true') // Will print - because the "0" is considered a non-empty string
if (null) console.log('null is true') // will not print - because null is a false value
if (-1) console.log('negative is true') // will print - because -1 is considered a non-zero number 
if (1) console.log('positive is true') // will print - because 1 is considered a non-zero number

// JS Fundamentals - Q4
let a = 12, b = 45;
let result = `${a} + ${b} is `;
result += (a + b < 10) ? 'less than 10' : 'greater than 10'; // += allows you to append to the value and assign it to the corresponding variable
console.log(result)

// JS Fundamentals - Q5
// Function Expression Syntax:
const getGreeting = function(name){
    return 'Hello ' + name + '!'
};
console.log(getGreeting('Chris')); // Works! 
// Arrow Function Syntax:
const getGreetingArrow = (name) => 'Hello ' + name + '!';
console.log(getGreetingArrow('Christopher'))

// JS Fundamentals - Q6
const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Anderson',
    greeting(person) { 
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => (person.numFingers === 6) ? 'How you doin?' : 'Nice to meet you.'
};

inigo.greeting(westley)
inigo.greeting(rugen)

// JS Fundamentals - Q7
const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    },
    halfTime() {
        console.log('Halftime score is ' + this.score + ', fouls: ' + this.fouls);
        return this;
    },
    finalScore(){
        console.log('Final score is ' + this.score + ', fouls: ' + this.fouls);
    }
};

basketballGame.freeThrow().basket().threePointer().foul().halfTime().finalScore();
// Initially tested with foul() at the end but was recieving syntax error due to finalScore not returning result. 

// JS Fundamentals - Q8
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
};

const melbourne = {
    name: 'Melbourne',
    population: 5_078_193,
    state: 'Victoria',
    founded: '30 August 1835',
    timezone: 'Australia/Melbourne',
    landmarks: ['Flinders Street Station', 'Queen Victoria Market', 'Royal Botanic Gardens']
};

function objectProperties(obj) {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            console.log(property + ':', obj[property])
        }
    }
}

objectProperties(sydney);
objectProperties(melbourne);

// JS Fundamentals - Q9
let teamSports = ['Basketball', 'Football', 'Cricket'];
let moreSports = [...teamSports];

moreSports.push('Hockey', 'Netball');
moreSports.unshift('Tennis', 'Golf');

console.log(moreSports);

let dog2 = {
    name: 'Stan',
    breed: 'pitbull',
    age: 5
};

let dog1 = {...dog2};
dog2.age = 2;

console.log(dog1);
console.log(dog2);

let cat2 = {
    name: 'Misty',
    breed: 'Cat',
    age: 12
};

let cat1 = {...cat2};
cat1.name = 'Tinkerbell';

console.log(cat1);
console.log(cat2);

console.log(teamSports);
console.log(dog1);
console.log(cat1);          // No changes. This is because we created new variables while updating some values. 

console.log(moreSports);    // Check 9e) Dont understand as they already reamin independant 
console.log(cat2);

// JS Fundamentals - Q10 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.canDrive = function(){
        return this.age >= 16;
    };
}

let chris = new Person('Chris LaCock', 23);
let destini = new Person('Destini-ann Feeley', 21);

console.log(chris)
console.log(destini);

class personClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >=16;
    }
}

let steven = new personClass('Steven Feeley', 49);
let nic = new personClass('Nicollette Feeley', 45);

console.log(steven);
console.log(nic);

console.log(chris.canDrive());
console.log(destini.canDrive());
console.log(steven.canDrive());
console.log(nic.canDrive());

let renae = new personClass('Renae-Grace LaCock', 2);
let harvey = new personClass('Harvey-Alexander LaCock', 0);

console.log(renae.canDrive());
console.log(harvey.canDrive());