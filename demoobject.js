//object in javascript -> An object is collection of properties ,and a property is an association between name and a value

const user = {
  name: "road side coder",
  age: 24,
  "flag value": true,
};

user.name = "modified name";
console.log(user["flag value"]);
delete user.age;
console.log(user.name);
console.log(user);

//Adding dynamic object
const property = "firstName";
const name = "Piyush Agrwal";

const user1 = {
  [property]: name,
};
console.log(user1.firstName);

for (key in user) {
  console.log(user[key]);
}

// duplicate key

const obj1 = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj1);
