const words = prompt('Please enter some words (separated by comma\'s)').split(',');

let totalLength = 0;
const totalWords = words.length;

words.forEach((word) => {
    console.log(word + ' (' + word.length + ')');
    totalLength += word.length;
});

const average = totalLength / totalWords;
console.log(average);