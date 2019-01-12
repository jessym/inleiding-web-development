const imageLinks = [
  'images/apple.jpg',
  'images/banana.jpg',
  'images/lemon.jpg',
  'images/grapes.jpg',
  'images/raspberry.jpg'
];
const imageElement = document.getElementsByTagName('img')[0];

let count = 0;
function nextImage() {
  const index = count % imageLinks.length;
  imageElement.src = imageLinks[index];
  count += 1;
}

nextImage();
setInterval(nextImage, 2000);