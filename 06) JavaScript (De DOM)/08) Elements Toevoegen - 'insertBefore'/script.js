const banana = document.createElement('li');
banana.innerText = 'Banaan';

const list = document.getElementsByTagName('ul')[0];
const lemon = list.children[1];
list.insertBefore(banana, lemon);