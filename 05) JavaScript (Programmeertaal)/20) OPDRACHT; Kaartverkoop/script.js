let intervalId;
let ticketsRemaining = 5;

function showTickets() {
    if (ticketsRemaining > 1) {
        console.log('We only have ' + ticketsRemaining + ' tickets left...');
    } else if (ticketsRemaining === 1) {
        console.log('We only have ' + ticketsRemaining + ' ticket left...');
    } else {
        console.log('We\'re out of tickets!');
        clearInterval(intervalId);
    }
    ticketsRemaining -= 1;
}

intervalId = setInterval(showTickets, 1000);