function sayHello() {
  console.log('Hello Friend');
}

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', sayHello);
button.addEventListener('click', () => {
  console.log('Goodbye Friend');
})