const score = Number(location.hash.substring(1));

const imageLinks = [
    'images/loser.jpeg',
    'images/bronze.jpeg',
    'images/silver.jpeg',
    'images/gold.jpeg'
];

const image = document.getElementById('reward');
image.src = imageLinks[score];