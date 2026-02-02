const person = {
  firstName: "Robert",
  lastName: "Vuchych",
  age: 33
};

person.email = "rob.vuchych@gmail.com";

delete person.age;

console.log(person);