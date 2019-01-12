const orderedList = document.getElementsByTagName('ol')[0];

// Children
const listItems = Array.from(orderedList.children);
listItems.forEach((listItem) => {
    listItem.style.color = 'orange';
});

// Siblings (brothers & sisters)
const paragraph = orderedList.previousElementSibling;
paragraph.style.color = 'red';

// Parent
const main = orderedList.parentElement;
main.style.backgroundColor = 'pink';