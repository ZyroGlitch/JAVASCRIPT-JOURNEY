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
displayPurchase = ({name,price,qty}) => {
    console.log("----- MILKTEA SHOP -----");
    console.log(`Product : ${name}`);
    console.log(`Price : P${price}`);
    console.log(`Quantity : ${qty}`);
    console.log(`Subtotal : P${price * qty}`);
}

// call the destructure function
displayPurchase(milktea);