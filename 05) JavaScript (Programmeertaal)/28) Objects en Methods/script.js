const person = {
  firstName: 'Tim',
  age: 32,
  // Traditional syntax
  introduce: function() {
      return 'Hi, I am ' + this.firstName + ' and I am ' + this.age + ' years old.';
  },
  // Traditional syntax (modern)
  shout() {
      return 'My name is ' + this.firstName + '!!!';
  }
};

console.log(person.introduce());
console.log(person.shout());
