const car1 = {
  brand: "Toyota",
  model: "Highlander",
  year: 2022
};

const car2 = {
  brand: "Mercedes-Benz",
  model: "GLA",
  owner: 2017
};

const car3 = {
  ...car1,
  ...car2
};

console.log(car3);