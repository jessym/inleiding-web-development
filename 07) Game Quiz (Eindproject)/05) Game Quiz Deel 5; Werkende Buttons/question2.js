function rightAnswer() {
  location.href = 'question3.html';
}
function wrongAnswer() {
  location.href = 'question3.html';
}

Array.from(document.getElementsByClassName('right-answer')).forEach((button) => {
  button.addEventListener('click', rightAnswer);
});
Array.from(document.getElementsByClassName('wrong-answer')).forEach((button) => {
  button.addEventListener('click', wrongAnswer);
});