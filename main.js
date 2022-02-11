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

function reset() {
    location.reload();
}

/* HEX Color Analysis */

function rand(min, max) {
    let randomNumber = Math.random() * (max-min) + min;
    return Math.floor(randomNumber);
};

function generateColor() {
    let hex = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let color = "#";

    for(let i = 0; i <=5 ; i++) {
        let index = rand(0, 15);
        color = color + hex[index];
    }
    console.log(color);
    document.getElementById("e").style.backgroundColor = color;
    document.getElementById("b").style.backgroundColor = color;
    document.getElementById("g").style.backgroundColor = color;
    document.getElementById("d").style.backgroundColor = color;
};