let age = 42;
if (age) {
    console.log('Hello');
}

let ageOfBaby = 0;
if (ageOfBaby) {
    console.log('Goodbye');
}

// Falsy Values: false, 0, '' (empty string), undefined, null, NaN
// Truthy Values: <the rest>

let name = 'Jessy';
if (name) {
    console.log('Hello ' + name);
} else {
    console.log('Please enter your name!');
}