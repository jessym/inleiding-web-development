// Numbers

let age = 24;

if (age > 18) {
    console.log('You are older than 18');
}
if (age >= 18) {
    console.log('You are either 18 or older than 18');
}
if (age < 18) {
    console.log('You are younger than 18');
}
if (age <= 18) {
    console.log('You are either 18 or younger than 18');
}

if (age === 18) {
    console.log('You are exactly 18');
}
if (age !== 18) {
    console.log('You are not 18 (either younger or older)');
}

// Booleans

let allowMarketingEmails = false;
if (!allowMarketingEmails) {
    console.log('Please give us permission');
}

// Strings

let name = 'Jessy';
if (name === 'Jessy') {
    console.log('Access granted');
}
if (name !== 'Jessy') {
    console.log('Access granted (no Jessy\'s allowed here!)');
}