let age = 42;
age = 52;
console.log(age);


const name = 'Harry';
console.log(name);


// Never reuse variables like the example below!
let x = 'What is your name?';
x = prompt(x);
x = 'Nice to meet you, ' + x;
console.log(x);