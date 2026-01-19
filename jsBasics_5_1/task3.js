const number = 5;

console.log("Таблиця множення (for):");

for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}

console.log("Таблиця множення (while):");

let i = 1;
while (i <= 10) {
    console.log(`${number} × ${i} = ${number * i}`);
    i++;
}