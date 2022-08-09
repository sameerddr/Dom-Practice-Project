const hex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E"];

const button = document.querySelector("#btn");
const color = document.querySelector(".color");

function getRandomNumber() {
    // console.log(getRandomNumber);
    return Math.floor(Math.random() * hex.length);
}

function colorchange() {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getRandomNumber()];
    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
}

button.addEventListener("click", colorchange);