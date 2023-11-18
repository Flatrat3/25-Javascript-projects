const addTaskButton = document.querySelector(".add-task");
const task = document.querySelector("input[type='text']");
const currentTask = document.querySelector(".current-task-list");
const finishedTask = document.querySelector(".finished-task-list");

addTaskButton.addEventListener("click", addTask);


task.addEventListener("keyup", function (e) {
    if (e.key === "Enter") addTask()

})

function addTask() {
    let taskValue = task.value.trim();

    if (taskValue) {
        let taskList = `<li>
                            <input type="checkbox" class="checkbox">
                            <label>${taskValue}</label>
                            <span class="delete-icon">❌</span>
                        </li>`;
        currentTask.innerHTML += taskList;

        // Clear task value
        task.value = "";

        // Checbox event
        const checkboxes = document.querySelectorAll(".checkbox");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                if (this.checked) {
                    this.nextElementSibling.style.textDecoration = "line-through";
                    console.log(this.parentNode);
                    moveTaskToFinished(this.parentNode);
                } else {
                    this.nextElementSibling.style.textDecoration = "none";
                    // Move the task back to the currentTask list
                    moveTaskToCurrent(this.parentNode);
                }
            });
        });

        // Delete icon add
        const deleteIcons = document.querySelectorAll(".delete-icon");
        deleteIcons.forEach(deleteIcon => {
            deleteIcon.addEventListener("click", () => {
                deleteIcon.parentNode.remove();
            });
        });
    }
}
// addTask ends here

function moveTaskToFinished(taskElement) {
    // Move the task to the finishedTask list
    finishedTask.appendChild(taskElement);
}

function moveTaskToCurrent(taskElement) {
    // Move the task back to the currentTask list
    currentTask.appendChild(taskElement);
}
