let inputDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");

// Ekle butonu
function newElement(){
    let liDOM = document.createElement("li");
    liDOM.innerHTML = inputDOM.value;
    listDOM.appendChild(liDOM);

}
