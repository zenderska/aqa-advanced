const users = [
  {
    name: "Alex",
    email: "aalex@softserve.com",
    age: 32,
    country: "Ukraine",
    city: "Kyiv",
    company: "SoftServe",
    hobby: "Football"
  },
  {
    name: "Mary",
    email: "r.mary@epam.com",
    age: 24,
    country: "Poland",
    city: "Krakow",
    company: "EPAM",
    hobby: "Art"
  },
  {
    name: "Andrew",
    email: "h.andrew@sap.com",
    age: 41,
    country: "Germany",
    city: "Berlin",
    company: "SAP",
    hobby: "Travel"
  }
];

for (const { name, email, age, country, city, company, hobby } of users) {
  console.log(
    `Name: ${name}, Email: ${email}, Age: ${age}, Country: ${country}, City: ${city}, Company: ${company}, Hobby: ${hobby}`
  );
}