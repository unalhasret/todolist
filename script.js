let inputDOM = document.querySelector("#task");
let ulDOM = document.querySelector("ul");

// add button
function newElement(){
    let li = document.createElement("li");
    li.innerHTML = inputDOM.value;
    ulDOM.appendChild(li);
    inputDOM.value = "";

    // close 
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    //remove
    span.onclick = function(){
        this.parentElement.remove();
    }
    
    //checked class
    li.onclick = function(){
        this.classList.toggle("checked");
    }
}





