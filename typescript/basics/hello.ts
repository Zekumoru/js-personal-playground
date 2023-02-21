interface User {
  name: string;
  surname: string;
  age: number;
}

const user = { name: 'Zekumoru' } as User;

function greet(person: User, date: Date) {
  console.log(`Hello ${person.name}, today is ${date.toDateString()}!`);
}

greet(user, new Date());
