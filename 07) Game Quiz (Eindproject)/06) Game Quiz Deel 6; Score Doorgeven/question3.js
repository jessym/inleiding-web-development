const score = Number(location.hash.substring(1));

function rightAnswer() {
    location.href = 'score.html#' + (score + 1);
}
function wrongAnswer() {
    location.href = 'score.html#' + score;
}

Array.from(document.getElementsByClassName('right-answer')).forEach((button) => {
    button.addEventListener('click', rightAnswer);
});
Array.from(document.getElementsByClassName('wrong-answer')).forEach((button) => {
    button.addEventListener('click', wrongAnswer);
});