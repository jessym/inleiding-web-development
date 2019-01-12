let name = 'Jessy';
let age = 24;
let allowMarketingEmails = false;
console.log(name + ' - ' + age + ' - ' + allowMarketingEmails);

let hasEnteredCorrectPin = true;
let hasEnoughMoneyOnAccount = false;

let isAllowedToWithdrawMoney = hasEnteredCorrectPin && hasEnoughMoneyOnAccount;
console.log('Allowed to withdraw money?');
console.log(isAllowedToWithdrawMoney);

console.log('Allowed to withdraw money (unsafe)?');
console.log(hasEnteredCorrectPin || hasEnoughMoneyOnAccount);