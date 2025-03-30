document.addEventListener("DOMContentLoaded", () => {
    const inputTask = document.getElementById("inputTask");
    const addButton = document.querySelector(".add");
    const moveRightButton = document.querySelector(".right");
    const moveLeftButton = document.querySelector(".left");
    const removeButton = document.querySelector(".remove");
    const todoList = document.querySelector(".todo-list");
    const completedList = document.querySelector(".completed-list");
    const toast = document.getElementById("toast");

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    function createTaskElement(taskText) {
        let task = document.createElement("div");
        task.className = "task";
        task.textContent = taskText;

        task.addEventListener("click", () => {
            document.querySelectorAll(".task").forEach(t => t.classList.remove("selected"));
            task.classList.add("selected");
        });

        return task;
    }

    function isDuplicate(taskText) {
        let tasks = document.querySelectorAll(".task");
        for (let task of tasks) {
            if (task.textContent === taskText) {
                return true;
            }
        }
        return false;
    }

    addButton.addEventListener("click", () => {
        let taskText = inputTask.value.trim();

        if (!taskText) {
            showToast("Please enter a valid task");
            return;
        }

        if (isDuplicate(taskText)) {
            showToast("Task already exists!");
            return;
        }

        let taskElement = createTaskElement(taskText);
        todoList.appendChild(taskElement);
        inputTask.value = "";
        showToast("Task added to To-Do list!");
    });

    moveRightButton.addEventListener("click", () => {
        document.querySelectorAll(".todo-list .selected").forEach(task => {
            task.classList.remove("selected");
            completedList.appendChild(task);
            showToast("Task moved to Completed list!");
        });
    });

    moveLeftButton.addEventListener("click", () => {
        document.querySelectorAll(".completed-list .selected").forEach(task => {
            task.classList.remove("selected");
            todoList.appendChild(task);
            showToast("Task moved to To-Do list!");
        });
    });

    removeButton.addEventListener("click", () => {
        document.querySelectorAll(".selected").forEach(task => {
            task.remove();
            showToast("Task removed!");
        });
    });
});
