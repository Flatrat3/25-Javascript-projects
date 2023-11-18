const addTaskButton = document.querySelector(".add-task");
const task = document.querySelector("input[type='text']");
const currentTask = document.querySelector(".current-task-list");

addTaskButton.addEventListener("click", addTask);

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
                    // Add a line to the label when the checkbox is checked
                    this.nextElementSibling.style.textDecoration = "line-through";
                } else {
                    // Remove the line on the label when the checkbox is unchecked
                    this.nextElementSibling.style.textDecoration = "none";
                }
            });
        });

        // Delete icon add
        const deleteIcons = document.querySelectorAll(".delete-icon");
        deleteIcons.forEach(deleteIcon => {
            deleteIcon.addEventListener("click", () => {
                deleteIcon.parentNode.remove();
            })
        })

    }
}
