let radius = 4.567;
let height = 10.234;

let volume = Math.PI * radius ** 2 * height;

let roundedRadius = radius.toFixed(2);
let roundedHeight = height.toFixed(2);
let roundedVolume = volume.toFixed(2);

console.log("Radius:", roundedRadius);
console.log("Height:", roundedHeight);
console.log("Volume of the cylinder:", roundedVolume);