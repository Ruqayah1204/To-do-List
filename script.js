"use strict"

const button = document.getElementById("btn")
const input = document.getElementById("inputText")
const listContainer = document.querySelector("#list");
const listItems = document.getElementsByTagName("li");

// 
// click the button to add new list item
function addElement() {
    if (input.value == '') {
        alert("Enter your new task!");
    } else {
        let newList = document.createElement("li");
        newList.innerHTML = input.value;
        listContainer.appendChild(newList);
    }
    //create a close icon to remove list item

    for(let i = 0; i < listItems.length; i++){
        let span = document.createElement("span");
        let spanText = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(spanText);
        listItems[i].appendChild(span);
    }
    input.value = "";
    saveData();
}
button.addEventListener('click', addElement);

// to mark the list item when task has been completed
//creating a checked icon

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//display data when website is open again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();





