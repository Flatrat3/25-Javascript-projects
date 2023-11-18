This JavaScript code covers several concepts:

Selecting HTML Elements (DOM): HTML elements with specific classes, such as .add-task, input[type='text'], .current-task-list, and .finished-task-list, are selected using the document.querySelector method.

Event Listening: Event listeners are added to specific events (click, keyup) using the addEventListener method. For example, the addTask function is triggered when the "Add Task" button is clicked or the enter key is pressed.

Function Definition and Invocation: The addTask function is defined and then called when the button is clicked or the enter key is pressed. This function adds the entered task to the list and adds dynamic features such as checkboxes and delete icons.

Dynamic HTML Content Creation: The taskList variable is used to dynamically create HTML content, which is then added to the currentTask list.

Checkbox State Control and Task Movement: The change event is used to listen for changes in the checkbox state. When the checkbox is checked, the task is moved to the finishedTask list using the moveTaskToFinished function; when the checkbox is unchecked, the task is moved back to the currentTask list using the moveTaskToCurrent function.

HTML Element Deletion: Clicking on the delete icon removes the relevant task from its list (.delete-icon.parentNode).

Adding Tasks with the Enter Key: The keyup event is listened to, and when the enter key is pressed, the addTask function is called.
