document.addEventListener("DOMContentLoaded", function () {
    const inputTask = document.getElementById("inputTask");
    const addButton = document.querySelector(".add");
    const moveRightButton = document.querySelector(".right");
    const moveLeftButton = document.querySelector(".left");
    const removeButton = document.querySelector(".remove");
    const todoList = document.querySelector(".td");
    const completedList = document.querySelector(".COM");

    // Function to create a task element
    function createTaskElement(taskText) {
        let task = document.createElement("div");
        task.className = "task";
        task.textContent = taskText;

        // Toggle selection on click
        task.addEventListener("click", function () {
            task.classList.toggle("selected");
        });

        return task;
    }

    // Add Task
    addButton.addEventListener("click", function () {
        let taskText = inputTask.value.trim();
        if (taskText !== "") {
            let taskElement = createTaskElement(taskText);
            todoList.appendChild(taskElement);
            inputTask.value = "";
        }
    });

    // Move selected tasks to the right (To-Do → Completed)
    moveRightButton.addEventListener("click", function () {
        document.querySelectorAll(".td .selected").forEach(task => {
            task.classList.remove("selected");
            completedList.appendChild(task);
        });
    });

    // Move selected tasks to the left (Completed → To-Do)
    moveLeftButton.addEventListener("click", function () {
        document.querySelectorAll(".COM .selected").forEach(task => {
            task.classList.remove("selected");
            todoList.appendChild(task);
        });
    });

    // Remove selected tasks
    removeButton.addEventListener("click", function () {
        document.querySelectorAll(".selected").forEach(task => task.remove());
    });
});
