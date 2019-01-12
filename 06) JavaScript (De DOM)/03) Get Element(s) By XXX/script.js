const span = document.getElementById('favourite');
span.style.color = 'red';

// HTMLCollection (array-like) --> no 'push', 'pop', 'forEac', etc...
const divs = document.getElementsByClassName('container');
// Real array
const divsArray = Array.from(divs);
divsArray.forEach((div) => {
    div.style.color = 'orange';
});

Array.from(document.getElementsByTagName('li')).forEach((listItem) => {
    listItem.style.color = 'blue';
});