console.log("Hi!");

let arr = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let item = arr[Math.floor(Math.random() * arr.length)];

/* RGB Slider */

let sliderRed = document.getElementById("sred");
sliderRed.addEventListener("input", sliderChange);
let sliderGreen = document.getElementById("sgreen");
sliderGreen.addEventListener("input", sliderChange);
let sliderBlue = document.getElementById("sblue");
sliderBlue.addEventListener("input", sliderChange);

function sliderChange() {
    console.log(`Red: ${sliderRed.value} / Green : ${sliderGreen.value} / Blue: ${sliderBlue.value}`);
    let rgb = `rgb(${sliderRed.value}, ${sliderGreen.value}, ${sliderBlue.value})`;
    console.log(`RGB: ${rgb}`);
    document.getElementById("a").style.backgroundColor = rgb;
    document.getElementById("f").style.backgroundColor = rgb;
    document.getElementById("c").style.backgroundColor = rgb;
    document.getElementById("h").style.backgroundColor = rgb;
}