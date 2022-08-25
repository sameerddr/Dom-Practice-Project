// ----------   Pop-up-------

document.getElementById("button").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
})


// ----  pop-up content display


const mainDiv = document.getElementById("container");
let data = [];

function addData(e) {
    e.preventDefault();
    let textValue1 = document.getElementById("inputText1").value;
    let textValue2 = document.getElementById("inputText2").value;
    let textValue3 = document.getElementById("inputText3").value;
    let textValue4 = document.getElementById("inputText4").value;
    let textValue5 = document.getElementById("inputText5").value;
    let category = document.getElementById("category").value;

    let obj = {
        text1: textValue1,
        text2: textValue2,
        text3: textValue3, // imdb
        text4: textValue4,
        text5: textValue4,
        cate: category,
    };

    data.push(obj);
    showData(data);
}


function showData(newData) {
    mainDiv.innerHTML = null;
    newData.map((d) => {
        let div = document.createElement("div");
        div.setAttribute("class", "content");
        let p1 = document.createElement("p");
        p1.setAttribute("class", "moviename");
        p1.textContent = "Movie Name - " + d.text1;
        let p2 = document.createElement("href");
        p2.setAttribute("class", "movielink");
        p2.textContent = "Movie Link - " + d.text2;
        location.href.p2;
        // console.log(p2);
        let p3 = document.createElement("p");
        p3.setAttribute("class", "movierating");
        p3.textContent = "Movie Rating - " + d.text3;
        console.log(typeof(p3));
        console.log(p3);
        let p4 = document.createElement("p");
        p4.setAttribute("class", "actorame");
        p4.textContent = "Actor Name - " + d.text4;
        let p5 = document.createElement("p");
        p5.setAttribute("class", "directorname");
        p5.textContent = "Director Name - " + d.text5;
        let p6 = document.createElement("p");
        p6.setAttribute("class", "category");
        p6.textContent = "Movie Category - " + d.cate;


        div.append(p1);
        div.append(p2);
        div.append(p3);
        div.append(p4);
        div.append(p5);
        div.append(p6);
        mainDiv.append(div);
    });
}

let filterDataa = document.querySelector("filterimdb");
filterDataa.addEventListener("click", filterData(data));

function filterData(data) {
    data.sort((a, b) => {
        // return a[“text3”] - b[“text3”];
        return a["text3"] - b["text3"];

    })
    showData(filterData);
}