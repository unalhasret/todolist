let inputDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");
let liDOM = document.querySelectorAll("li");

// Ekle butonu
function newElement(){
    let liDOM = document.createElement("li");
    liDOM.innerHTML = inputDOM.value;
    listDOM.appendChild(liDOM);
}

for(let i=0; i<liDOM.length; i++){
    liDOM[i].addEventListener("click", function(){
        liDOM[i].classList.toggle("checked");
    });
}

