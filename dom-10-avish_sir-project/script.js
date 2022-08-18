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
        text3: textValue3,
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
        p1.textContent = d.text1;
        let p2 = document.createElement("href");
        p2.setAttribute("class", "link");
        p2.textContent = d.text2;
        location.href.p2;
        console.log(p2);
        let p3 = document.createElement("p");
        p3.textContent = d.text3;
        let p4 = document.createElement("p");
        p4.textContent = d.text4;
        let p5 = document.createElement("p");
        p5.textContent = d.text5;
        let p6 = document.createElement("p");
        p6.textContent = d.cate;


        div.append(p1);
        div.append(p2);
        div.append(p3);
        div.append(p4);
        div.append(p5);
        div.append(p6);
        mainDiv.append(div);
    });
}