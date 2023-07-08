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


// Module 3 JS Intermediate
// JS Intermediate - Q1
function capitalizeFirstLetters(str) {
    let capitalizedString = '';
    
    str.split(' ').forEach(word => {
        capitalizedString += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    });

    return capitalizedString.trim();
}

let sentence = 'i want every word in this sentence to be emphasised';
let capitalizedSentence = capitalizeFirstLetters(sentence);
console.log(capitalizedSentence);

// JS Intermediate - Q2
function truncate(str, max) {
    if (str.length <= max) {
        return str;
    } 

    return str.slice(0, max) + '...';
}

let text = 'In the begining there was nothing.';
let truncatedText = truncate(text, 20);
console.log(truncatedText);

// JS Intermediate - Q3

const animals = ['Tiger', 'Giraffe']
animals.push ('Lion', 'Elephant');
animals.unshift ('Monkey', 'Rhino');
animals.sort();

function replaceMiddleAnimal(newValue) {
  if (animals.length % 2 === 0) {
    const middleIndex = animals.length / 2 - 1;
    animals.splice(middleIndex, 1, newValue);
  } else {
    const middleIndex = Math.floor(animals.length / 2);
    animals.splice(middleIndex, 1, newValue);
  }
}

replaceMiddleAnimal('Leopard');

function findMatchingAnimals(beginsWith) {
  const lowerCaseBeginsWith = beginsWith.toLowerCase();
  return animals.filter(animal => animal.toLowerCase().startsWith(lowerCaseBeginsWith));
}

const matchingAnimals = findMatchingAnimals('L');

console.log(animals);
console.log(matchingAnimals);

/////////////////////////////////////////////////FIX Issue - Not Returning Both Lion & Leopard///////////////////////////////

// JS Intermediate - Q4

function camelCase(cssProp) {
    var words = cssProp.split('-');
    var camelCaseProp = words[0];
    for (var i = 1; i < words.length; i++) {
      camelCaseProp += words[i][0].toUpperCase() + words[i].substring(1);
    }
    return camelCaseProp;
  }
  
//for loop
function camelCase(cssProp) {
    var words = cssProp.split('-');
    var camelCaseProp = words[0];
    for (var i = 1; i < words.length; i++) {
      camelCaseProp += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return camelCaseProp;
  }

  //without conditional operator
  function camelCase(cssProp) {
    var words = cssProp.split('-');
    var camelCaseProp = words[0];
    for (var i = 1; i < words.length; i++) {
      camelCaseProp += words[i][0].toUpperCase() + words[i].substring(1);
    }
    return camelCaseProp;
  }
  
  console.log(camelCase('margin-left')) // marginLeft
  console.log(camelCase('background-image')) // backgroundImage
  console.log(camelCase('display')) // display
  
  // JS Intermediate - Q5

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) 

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen);  // It returns a incorrect result as when using .toFixed, it returns the results as a string rather than a number.

function currencyAddition(float1, float2) {
    const result = (float1 * 100 + float2 * 100) / 100;
    return result;
}

let float1 = 0.20;
let float2 = 0.10;

let sum = currencyAddition(float1, float2);
console.log(sum);

function currencyOperation(float1, float2, operation, numDecimals) {
    const multiplier = 10 ** numDecimals;
    let result;

    switch (operation) {
        case '+':
            result = (float1 * 100 + float2 * 100) / 100;
            break;
        case '-':
            result = (float1 * 100 - float2 * 100) / 100;
            break;
        case '*':
            result = (float1 * 100 * float2) / 100;
            break;
        case '/':
            result = (float1 * 100) / (float2 * 100);
            break;
        default:
            throw new Error('Invalid operation: ' + operation);
    }

    return parseFloat(result);
}

console.log(0.3 == currencyAddition(0.1, 0.2));
console.log(0.3 == currencyOperation(0.1, 0.2, '+'));

// JS Intermediate - Q6

function unique(duplicatesArray) {
    var uniqueArray = [];
    for (var i = 0; i < duplicatesArray.length; i++) {
        var value = duplicatesArray[i];
        if (!uniqueArray.includes(value)) {
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

const totalVotes = [13, 15, 46, 51, 22, 22, 13, 23]
const pets = ['dogs', 'cats', 'birds', 'fish', 'bunnies', 'cats', 'fish']

console.log(unique(colours));
console.log(unique(testScores));

console.log(unique(totalVotes));
console.log(unique(pets));

// JS Intermediate - Q7

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];
  
  function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    if (book) {
      return book.title;
    } else {
      return 'Book not found';
    }
  }
  
  console.log(getBookTitle(3));
  
  function getOldBooks() {
    const oldBooks = books.filter(book => book.year < 1950);
    return oldBooks;
  }

  console.log(getOldBooks());

function addGenre() {
    const booksWithGenre = books.map(book => {
        return { ...book, genre: 'classic'};
    });
    return booksWithGenre;
}

console.log(addGenre());

function getTitles(authorInitial) {
    const titles = books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
    return titles;
}

console.log(getTitles('F'));

function latestBook() {
    let latest = null;
  
    books.forEach(book => {
      if (!latest || book.year > latest.year) {
        latest = book;
      }
    });
  
    return latest;
  }
  
  console.log(latestBook());

// JS Intermediate - Q8

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map([
    ['Daniel', '0210220223'],
    ['Emily', '0110122302'],
    ['Franky', '09808808767']
]);

phoneBookABC.set('Caroline', '0890567834');

function printPhoneBook(contacts) {
    for (let [name, phoneNumber] of contacts)  {
        console.log('${name}: ${phoneNumber}')
    }
};

printPhoneBook(phoneBookABC);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

const allNames = Array.from(phoneBook.keys());
console.log(allNames);

// JS Intermediate - Q9

let salaries = {
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000,
    "James" : 43000
};

function sumSalaries(salaries) {
    let total = 0;

    for (let person in salaries) {
        total += salaries[person];
    }

    return total;
}

console.log(sumSalaries(salaries));

function topEarner(salaries) {
    let highestSalary = 0;
    let topEarner = '';

    for (let person in salaries) {
        if (salaries[person] > highestSalary) {
            highestSalary = salaries[person];
            topEarner = person;
        }
    }

    return topEarner;
}

console.log(topEarner(salaries));

// JS Intermediate - Q10

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())

console.log(today.getHours() + ' hours have passed so far today')

console.log(today.getMinutes() + ' minutes have passed so far today');
console.log(today.getSeconds() + ' seconds have passed so far today');

const birthDate = new Date('1999-08-10');
const currentDay = new Date();

const years = today.getFullYear() - birthDate.getFullYear();
const months = today.getMonth() - birthDate.getMonth();
const days = today.getDate() - birthDate.getDate();

console.log('I am ' + years + ' years, ' + months + ' months, and ' +days + ' days old');

function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;

    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    const diffDays = Math.floor((utc2 - utc1) / oneDay);

    return diffDays;
}

const date1 = new Date('2023-06-29');
const date2 = new Date('2021-06-21');
const diff = daysInBetween(date1, date2);
console.log('Number of days in between:', diff);