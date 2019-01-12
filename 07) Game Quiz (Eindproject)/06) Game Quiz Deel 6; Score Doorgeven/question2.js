const score = Number(location.hash.substring(1));

function rightAnswer() {
    location.href = 'question3.html#' + (score + 1);
}
function wrongAnswer() {
    location.href = 'question3.html#' + score;
}

Array.from(document.getElementsByClassName('right-answer')).forEach((button) => {
    button.addEventListener('click', rightAnswer);
});
Array.from(document.getElementsByClassName('wrong-answer')).forEach((button) => {
    button.addEventListener('click', wrongAnswer);
});