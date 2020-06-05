/*
const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
//const combined = [...first, "a", ...second, "b"]; //spread

const clone = [...first];
console.log(first);
console.log(clone);
*/

const first = { name: "Björn" };
const second = { job: "Designer" };

const combined = { ...first, ...second, location: "Sweden" };
console.log(combined);

const clone = { ...first };
