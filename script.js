let inputDOM = document.querySelector("#task");
let ulDOM = document.querySelector("#list");
let liDOM = document.querySelectorAll("li");

// Ekle butonu
function newElement(){
    let li = document.createElement("li");
    li.innerHTML = inputDOM.value;
    ulDOM.appendChild(li);
    inputDOM.value = "";
}

for(let i=0; i<liDOM.length; i++){
    liDOM[i].addEventListener("click", function(){
        liDOM[i].classList.toggle("checked");
    });
}

