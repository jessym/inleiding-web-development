const ages = [22, 14, 38, 55, 8];

ages.forEach((age, index) => {
    console.log('Index = ' + index + ', Age = ' + age);
    if (age >= 18) {
        console.log('You are old enough');
    } else {
        console.log('You are too young!');
    }
});