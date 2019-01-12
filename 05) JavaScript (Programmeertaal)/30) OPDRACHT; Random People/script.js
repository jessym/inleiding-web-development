function randomInteger(bound) {
  return Math.floor(Math.random() * bound);
}

function randomAge() {
  return 20 + randomInteger(61);
}

const names = ['Julia', 'Emma', 'Sophie', 'Tess', 'Zoe', 'Anna'];
function randomName() {
  const index = randomInteger(names.length);
  return names[index];
}

const cities = ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven', 'Tilburg'];
function randomCity() {
  const index = randomInteger(cities.length);
  return cities[index];
}

function randomPerson() {
  return {
      age: randomAge(),
      name: randomName(),
      city: randomCity(),
      introduce() {
          console.log('Ik ben ' + this.name + ' (' + this.age + ' jaar) uit ' + this.city);
      },
  };
}

randomPerson().introduce();
randomPerson().introduce();
randomPerson().introduce();