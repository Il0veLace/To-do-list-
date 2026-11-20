let history = [];
function saveHistory(action, task){
    
    let event ={
        action: action,
        task: task,
        date: new Date().toLocaleString()

    };
    history.push(event);
    localStorage.setItem(
        "taskHistory",
        JSON.stringify(history)
    );
}
saveHistory("LisLisätty", "tehtävä");


const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        if (task.deleted) return;

        const taskElement = document.createElement("div");
        taskElement.textContent = task.title;

        taskList.appendChild(taskElement);
    });
}


function addTask() {
    const title = taskInput.value.trim();

    if (title === "") return;

    const task = {
        id: Date.now(),
        title: title,
        deleted: false
    };

    tasks.push(task);

    saveTasks();
    displayTasks();

    taskInput.value = "";
}


addButton.addEventListener("click", addTask);


displayTasks();
