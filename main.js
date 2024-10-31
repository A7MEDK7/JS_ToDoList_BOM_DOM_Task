const inputText = document.getElementById("input-task");
const listTasks = document.getElementById("list-task");

function addTask() {
    if (inputText.value === "") {
        window.alert("You Have Enter Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listTasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputText.value = "" ;
    saveData()
}

listTasks.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    window.localStorage.setItem("data",listTasks.innerHTML);
}

function showTasks() {
    listTasks.innerHTML = window.localStorage.getItem("data");
}

showTasks();
