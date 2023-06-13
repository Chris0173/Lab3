// Module 3 JS Fundamentals 
// Fundamentals 3.1
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

// Fundamentals 3.2
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

// Fundamentals 3.3
if (0) console.log('#1 zero is true') // Will not print - because 0 is a false value 
if ("0") console.log('#2 zero is true') // Will print - because the "0" is considered a non-empty string
if (null) console.log('null is true') // will not print - because null is a false value
if (-1) console.log('negative is true') // will print - because -1 is considered a non-zero number 
if (1) console.log('positive is true') // will print - because 1 is considered a non-zero number

// Fundamentals 3.4
let a = 12, b = 45;
let result = `${a} + ${b} is `;
result += (a + b < 10) ? 'less than 10' : 'greater than 10'; // += allows you to append to the value and assign it to the corresponding variable
console.log(result)

// Fundamentals 3.5
// Function Expression Syntax:
const getGreeting = function(name){
    return 'Hello ' + name + '!'
};
console.log(getGreeting('Chris')); // Works! 
// Arrow Function Syntax:
const getGreetingArrow = (name) => 'Hello ' + name + '!';
console.log(getGreetingArrow('Christopher'))

// Fundamentals 3.6
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

// Fundamentals 3.7
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

// Fundamentals 3.8
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

// Fundamentals 3.9