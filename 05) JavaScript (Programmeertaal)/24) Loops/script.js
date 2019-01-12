for (let index = 0; index < 10; index += 1) {
  console.log('Hello ' + index);
}

const alphabet = ['aaa', 'bbb', 'ccc'];
for (let index = 0; index < alphabet.length; index += 1) {
  const element = alphabet[index];
  console.log(element);
}

let number = 10;
while (number >= 0) {
  console.log('While loop - ' + number);
  number -= 1;
}