console.log("Working");

var firstname = ["aditi", 'virat', 'dhoni', 'chahal', 'rohit', 'dinesh', 'king kohli', 'klrahul', 'sameer', 'carryminati', 'Avesh', 'Bhuvi', 'smiriti', 'deviliers', 'decock', 'sandhya', 'Honey Singh', 'arijit'];

var lastname = ["sharma", "kumar", "varshney", "aggrwal", "mital", "goyal", "mishra", "singhaniya", "Mishra", "yadav", "paad", "kohli", "mahi", "halwa", "puri", "kachordi", "samosa"];

function getname() {
    var randomname = firstname[Math.floor(Math.random() * firstname.length)] + " " + lastname[Math.floor(Math.random() * lastname.length)];
    return randomname;
}

function nameQty() {
    var userqty = document.querySelector(".qty").value;
    if (userqty > 10) {
        document.querySelector(".namelist").innerHTML = `Only upto 10 You can pass the values`;
    } else {
        for (let i = 0; i < userqty.length; i++) {
            document.querySelector(".namelist").innerHTML += getname() + '<br>';
        }
    }
}