
let input = document.getElementById("input");
let list = document.getElementById("list");

function addtask(){
    if(input.value === ''){
        alert("Warning! No items written");
    }else{
        let li =document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveinfo();
}


list.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveinfo()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveinfo()
    }
},false);

function saveinfo(){
    localStorage.setItem("data", list.innerHTML);
}

function showinfo(){
    list.innerHTML = localStorage.getItem("data");
}

showinfo()