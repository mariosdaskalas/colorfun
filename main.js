console.log("Hi!");

let arr = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let item = arr[Math.floor(Math.random() * arr.length)];

/* RGB Slider */

let rangeRed = document.getElementById("sred").value;
let rangeGreen = document.getElementById("sgreen").value;
let rangeBlue = document.getElementById("sblue").value;

function rgbRegenerate() {
    console.log(`Red: ${rangeRed} / Green : ${rangeGreen} / Blue: ${rangeBlue}`);
}