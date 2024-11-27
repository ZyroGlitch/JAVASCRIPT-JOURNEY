// INITIALIZE OBJECT
var student = {
    name: 'John Ford',
    age: 22,
    course: 'Computer Science',
    year: '1st',
    introduce: function () {
        console.log(`Hi! I'm ${this.name}.`);
        console.log(`I'm ${this.age}yrs old.`);
        console.log(`I'm a ${this.year} year ${this.course}.`);
    }
}

// CALL AN OBJECT
// student.introduce();

// DESTRUCTURE AN OBJECTS
var milktea = {
    name: 'Caramel Machiato',
    price: 50,
    qty: 2,
}

// Destructuring the milktea object
displayPurchase = ({ name, price, qty }) => {
    console.log("----- MILKTEA SHOP (DESTRUCTURE) -----");
    console.log(`Product : ${name}`);
    console.log(`Price : P${price}`);
    console.log(`Quantity : ${qty}`);
    console.log(`Subtotal : P${price * qty}`);
}

// call the destructure function
displayPurchase(milktea);

console.log('-------------------------');

// ARRAY METHODS
console.log('FOR-EACH ARRAY METHODS');

const students = ['John', 'Mike', 'Andrew'];

function displayInfo(elements) {
    console.log(`Student : ${elements}`);
}

students.forEach(displayInfo);


console.log(''); //Space

const numbers = [1, 2, 3];

function double(elements, index, array) {
    array[index] = elements * 2;
}

function displayNumbers(elements) {
    console.log(`Number : ${elements}`);
}

numbers.forEach(double);
numbers.forEach(displayNumbers);


console.log('-------------------------');

// ARRAY METHODS
console.log('MAP METHODS');

const food = ['fried chicken', 'sphagetti', 'salad'];
const uppercase = food.map(Uppercase);

console.log(uppercase);

function Uppercase(element) {
    return element.toUpperCase();
}

console.log('-------------------------');

// ARRAY METHODS
console.log('FILTER METHODS');
const age = [15, 17, 19, 20, 27, 11];
const legalAge = age.filter(adult);

console.log(legalAge);

function adult(element) {
    return element >= 18; // Determine each age greater than or equal to 18
}

console.log('-------------------------');

// SPREAD OPERATOR - unpacked each elements
console.log('Spread Operator');
const product = ['Shoes', 'Watches', 'Shirts'];
const newProduct = [...product, 'Bikes', 'Celphone'];

console.log(newProduct);

console.log('-------------------------');

// REST PARAMETER - budle each elements into new array
console.log('Rest Parameter');

const subject1 = 'Math';
const subject2 = 'Science';
const subject3 = 'Filipino';

function displaySubjects(...subject) {
    return subject;
}

const getSubject = displaySubjects(subject1, subject2, subject3);
console.log(getSubject);

console.log('-------------------------');

// DEFAULT PARAMETER - set a default value if no parameter insert.
console.log('Default Parameter');

const greet = (name = 'Guest') => {
    console.log(`Hi! ${name}`);
}

greet();
greet('Cortez');

console.log('-------------------------');

// PROMISES
// - it same as try and catch but it use resolve and reject
// -- and to avoid callback hell
console.log('PROMISES');

function introduceSelf() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isStudent = true;

            isStudent
                ? resolve("Hi! I'm a new student.")
                : reject("Sorry I'm not a student!");
        }, 1500);
    });
}

function talentedStudent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isTalented = true;

            isTalented
                ? resolve("I'm a talented student.")
                : reject("I'm not a talented student!");
        }, 1500);
    });
}

// Methods Chaining
// introduceSelf().then(value => { console.log(value); return talentedStudent() })
//     .then(value => { console.log(value); return console.log('You are a student.') })
//     .catch(error => { console.error(error) });


console.log('-------------------------');

// ASYNC / AWAIT
// Async - makes a function return a promise
// Await - makes async function wait for the promise
console.log('ASYNC / AWAIT');

async function displayPromise() {
    const introduceSelfResult = await introduceSelf();
    const talentedStudentResult = await talentedStudent();

    try {
        console.log(introduceSelfResult);
        console.log(talentedStudentResult);
        console.log('You finish all.');
    } catch (error) {
        console.error(error);
    }
}

// CALL ASYNC FUNCTION
displayPromise();
