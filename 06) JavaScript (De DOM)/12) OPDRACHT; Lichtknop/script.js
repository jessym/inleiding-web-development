const button = document.getElementById('switch');

let lightOn = true;
function turnOn() {
    lightOn = true;
    button.innerText = 'UIT';
    document.body.style.backgroundColor = 'white';
}
function turnOff() {
    lightOn = false;
    button.innerText = 'AAN';
    document.body.style.backgroundColor = 'black';
}
function toggle() {
    if (lightOn) {
        turnOff();
    } else {
        turnOn();
    }
}

button.addEventListener('click', toggle);

turnOff();