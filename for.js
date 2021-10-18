const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

console.log(text);

for (const index in cars) {
    text += cars[index] + "<br>";
}

console.log(text);

for (const car of cars) {
    text += car + "<br>";
}