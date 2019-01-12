let name = 'Jessy';
let allowMarketingEmails = false;
let allowPushNotifications = true;

console.log('Email > Thanks for signing up, ' + name + '!');

if (allowMarketingEmails) {
    console.log('Email > 10 Dingen Die Je Absoluut Moet Kopen Deze Winter!');
} else if (allowPushNotifications) {
    console.log('Push Notification > He! Open Onze App!');
} else {
    console.log('...geen reclame voor jou...');
}
