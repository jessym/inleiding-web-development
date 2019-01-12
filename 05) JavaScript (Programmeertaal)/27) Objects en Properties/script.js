const catalogue = {
  sweater: 30,
  shirt: 20,
  sale: true
};
console.log(catalogue);

const totalPrice = catalogue.sweater + catalogue.shirt;
console.log(totalPrice);

// Adding or updating a property
catalogue.sweater = 50;
catalogue.hat = 10;
console.log(catalogue);

// Deleting a property
delete catalogue.hat;
console.log(catalogue);