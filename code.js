const txt_box = document.getElementById("txt_box");
const list_box = document.getElementById("list_box");

function addTask() {
    if (txt_box.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement('li');
        li.innerHTML = txt_box.value;

        // Create and append delete button
        let deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = "\u00d7";
        li.appendChild(deleteSpan);

        // Create and append edit button
        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.className = "edit-btn";
        li.appendChild(editButton);

        list_box.appendChild(li);
    }
    txt_box.value = "";
}

list_box.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("selected");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    } else if (e.target.className === "edit-btn") {
        let li = e.target.parentElement;
        let newText = prompt("Edit your task:", li.firstChild.textContent);
        if (newText) {
            li.firstChild.textContent = newText;
        }
    }
}, false);


