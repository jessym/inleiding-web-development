function rightAnswer() {
  location.href = 'question2.html';
}
function wrongAnswer() {
  location.href = 'question2.html';
}

Array.from(document.getElementsByClassName('right-answer')).forEach((button) => {
  button.addEventListener('click', rightAnswer);
});
Array.from(document.getElementsByClassName('wrong-answer')).forEach((button) => {
  button.addEventListener('click', wrongAnswer);
});