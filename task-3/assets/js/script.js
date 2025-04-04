// Function to show a toaster notification
function showToast(message) {
    const toaster = document.getElementById("toaster");
    toaster.innerText = message;
    toaster.style.display = "block";
    setTimeout(() => {
        toaster.style.display = "none";
    }, 2000);
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Prevent adding empty tasks

    // ✅ Prevent duplicate tasks
    const allTasks = document.querySelectorAll(".task-item span");
    for (let task of allTasks) {
        if (task.innerText === taskText) {
            showToast("Task already exists!");
            return;
        }
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item"); // ✅ No random colors now
    taskItem.innerHTML = `<span>${taskText}</span>`;
    taskItem.onclick = function () {
        this.classList.toggle("selected");
    };

    document.getElementById("taskBox").appendChild(taskItem);
    taskInput.value = "";
    showToast("Task added!");
}

function moveToCompleted() {
    const selectedTasks = document.querySelectorAll("#taskBox .selected");

    if (selectedTasks.length === 0) {
        showToast("No task selected to move!");
        return;
    }

    selectedTasks.forEach(task => {
        task.classList.remove("selected");
        task.classList.add("completed");
        task.onclick = function () {
            this.classList.toggle("selected");
        };
        document.getElementById("completedBox").appendChild(task);
    });

    showToast("Task moved to Completed!");
}

function moveToTasks() {
    const selectedTasks = document.querySelectorAll("#completedBox .selected");

    if (selectedTasks.length === 0) {
        showToast("No task selected to move!");
        return;
    }

    selectedTasks.forEach(task => {
        task.classList.remove("selected");
        task.classList.remove("completed");
        task.onclick = function () {
            this.classList.toggle("selected");
        };
        document.getElementById("taskBox").appendChild(task);
    });

    showToast("Task moved back to Tasks!");
}

function deleteSelected() {
    const selectedTasks = document.querySelectorAll(".selected");

    if (selectedTasks.length === 0) {
        showToast("No task selected to delete!");
        return;
    }

    selectedTasks.forEach(task => task.remove());
    showToast("Task deleted!");
}
