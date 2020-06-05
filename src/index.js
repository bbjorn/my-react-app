// const -> block
// let -> block

const person = {
  name: "Björn",
  walk() {
    console.log(this);
  },
};

const walk = person.walk.bind(person);
walk();
