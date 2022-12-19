interface Human {
  name: string;
  age: number;
}

function sayHi(person: Human) {
  console.log(`hi ${person.name}`);
}

sayHi({
  name: "Huy",
  age: 21,
});
