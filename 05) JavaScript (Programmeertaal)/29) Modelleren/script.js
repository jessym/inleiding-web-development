const seller = {
  username: 'tunghori',
  location: 'Philippines',
  feedback: {
      positive: 13609,
      neutral: 19,
      negative: 2
  },
  items: [
      { name: 'Captain Rex', price: 7.99 },
      { name: 'Imperial Death Trooper', price: 10.99 },
      { name: 'Interrogation Droid', price: 2.99 }
  ]
};
console.log(seller);

console.log('Welcome to the page of ' + seller.username + ' (' + seller.location + ')');
console.log('Positive feedback: ' + seller.feedback.positive);
console.log('Neutral feedback: ' + seller.feedback.neutral);
console.log('Negative feedback: ' + seller.feedback.negative);
console.log('Items for sale:');
seller.items.forEach((item) => {
  console.log(' - ' + item.name + ' ($' + item.price + ')');
});