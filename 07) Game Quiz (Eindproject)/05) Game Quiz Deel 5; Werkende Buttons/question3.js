function rightAnswer() {
  location.href = 'score.html';
}
function wrongAnswer() {
  location.href = 'score.html';
}

Array.from(document.getElementsByClassName('right-answer')).forEach((button) => {
  button.addEventListener('click', rightAnswer);
});
Array.from(document.getElementsByClassName('wrong-answer')).forEach((button) => {
  button.addEventListener('click', wrongAnswer);
});