console.log("Working");

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const style = e.currentTarget.classList;
        if (style.contains("decrease")) {
            count--;
        } else if (style.contains("increase")) {
            count++;
        } else {
            alert("You are Reseting the value")
            count = 0;

            function myFunction() {
                document.getElementsByTagName("alert").style.fontSize = "100px";
            }
        }
        value.textContent = count;
    });
});