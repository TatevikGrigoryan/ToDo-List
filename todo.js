function addItem() {
    let newValue = document.getElementById("inputarea").value;
    let list = document.getElementById("list");
    //cheek if inputarea is empty
    if (newValue === "") {
        alert("You don't add new To Do");
        return;
    }

    let createItem = document.createElement("p");
    createItem.innerHTML = newValue;
    list.appendChild(createItem);
    let delButton = document.createElement("button");
    delButton.innerHTML = "x";
    createItem.appendChild(delButton);
    document.getElementById("inputarea").value = "";
    createItem.addEventListener("click", cheekItem);
    delButton.addEventListener("click",delItem)

}

//run enter key
function enterKey(key) {
    let keyCode = key.which;
    if(keyCode === 13) {
        return addItem();
    }
}
function cheekItem(item) {
    if(item.target.style.textDecoration === "none"){
            item.target.style.textDecoration = "line-through";
    }else{
        item.target.style.textDecoration = "none";
    }
}
function delItem(item) {
    let list =  document.getElementById("list");
    let toDoItem = item.target.parentElement;
    list.removeChild(toDoItem);
}
