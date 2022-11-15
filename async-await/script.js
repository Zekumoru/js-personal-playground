const server = {
  getPeople() {
    class Person {
      constructor(name) {
        this.name = name;
      }
    }

    return new Promise((resolve) => {
      const people = [];
      people.push(new Person('John'));
      people.push(new Person('Luke'));
      people.push(new Person('Matthew'));
      people.push(new Person('Mark'));

      setTimeout(() => {
        resolve(people);
      }, 3000);
    });
  }
};

async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find((person) => person.name === name);
  console.log('Inside function:', person);
  return person;
}

const person = getPersonsInfo('Matthew');
console.log('Outside function:', person);

person.then((person) => {
  console.log('Inside promise:', person);
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let count = -1;
async function generateId() {
  await timeout(3000);
  count++;
  return count;
}

server.getPeople().then((people) => {
  people.forEach(async (person) => {
    console.log('Generating id for', person.name);
    person.id = await generateId();
    console.log(person);
  });
});
