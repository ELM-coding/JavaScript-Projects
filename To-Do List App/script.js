// Get DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new li element
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Add click event to mark as completed
        newTask.addEventListener('click', function () {
            this.classList.toggle('completed');
        });

        // Add context menu (right-click) event to delete
        newTask.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            this.remove();
        });

        // Append the new task to the list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
}

