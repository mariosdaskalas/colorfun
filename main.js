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

/* Reloads the webpage */

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

/* Checked if element is clicked */

let a = document.getElementById("a");
let hidden = document.getElementById("hidden");
let d = document.getElementById("d");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");

a.addEventListener("click", () => {
    a.style.display = "none";
    hidden.style.display = "block";
});

d.addEventListener("click", () => {
    d.innerHTML = "Whoohoo, hidden text has been revealed!";
    d.style.fontSize = "300%";
    d.style.fontStyle = "italic";
});

f.addEventListener("click", () => {
    f.style.opacity = "0.3";
});

g.addEventListener("click", () => {
    g.innerHTML = "💖 💖 💖 💖 💖";
});
h.addEventListener("click", () => {
    h.style.backgroundColor = "black";
});


