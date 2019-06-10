function addItem() {
    let newItem = document.getElementById("inputarea").value;
    let list =  document.getElementById("lists");
    //cheek if inputarea is empty
    if(newItem === ""){
        alert("You don't add new To Do" );
        return;
    }

    let cloneLi = document.getElementById("todolist");
    let createItem = cloneLi.cloneNode(true);
    list.appendChild(createItem);
    list.insertBefore(createItem,list.childNodes[0]);
    createItem.querySelector("p").innerHTML =  newItem;
    createItem.querySelector("p").style.textDecoration = "none"; createItem.style.display = "block";
    document.getElementById("inputarea").value = '';
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
    let list =  document.getElementById("lists");
    let parentItem = item.target.parentElement;
    list.removeChild(parentItem);
}
