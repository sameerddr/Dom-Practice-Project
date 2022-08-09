const colours = ["green", "red", "blue", "yellow", "violet", "orange"];

const button = document.querySelector("#btn");
const color = document.querySelector(".color");

function changecolour() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colours[randomNumber];
    color.textContent = colours[randomNumber];

}
button.addEventListener("click", changecolour);

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
}