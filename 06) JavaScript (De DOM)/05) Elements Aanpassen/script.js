const paragraph = document.getElementById('main-text');

setTimeout(() => {
    paragraph.className = 'tomato';
}, 2000);

console.log(paragraph.innerText);
paragraph.innerText += 'ABC';

setInterval(() => {
    paragraph.innerText += ' - ABC';
}, 500);