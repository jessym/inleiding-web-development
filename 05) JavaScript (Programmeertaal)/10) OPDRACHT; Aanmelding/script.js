let age = Number(prompt('Hoe oud ben je?'));
if (age >= 18) {
    let name = prompt('Wat is je naam?');
    console.log('Bedankt voor je aanmelding, ' + name + ' (' + age + ' jaar)');
} else {
    console.log('Je moet minstens 18 jaar oud zijn!');
}