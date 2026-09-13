let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Page load hone par saved tasks dikhana
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(function(task) {
    createTask(task);
});

// Add Task
addTask.addEventListener("click", function() {

    let task = taskInput.value.trim();

    if (task !== "") {
        createTask(task);

        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";
    }
});

// Task create karne ka function
function createTask(task) {

    let li = document.createElement("li");

    li.textContent = task;

    // Edit Button
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";

    // Delete Button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Edit
    editButton.addEventListener("click", function() {

        let newTask = prompt("Edit your task:", task);

        if (newTask !== null && newTask.trim() !== "") {
            li.firstChild.textContent = newTask;
            task = newTask;

            tasks = Array.from(taskList.children).map(function(item) {
                return item.firstChild.textContent;
            });

            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    });

    // Delete
    deleteButton.addEventListener("click", function() {

        li.remove();

        tasks = Array.from(taskList.children).map(function(item) {
            return item.firstChild.textContent;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    taskList.appendChild(li);
}