document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the task description and priority
    const taskDescription = document.getElementById('new-task-description').value;
    const taskPriority = document.getElementById('task-priority').value;

    // Create a new list item for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;
    
    // Set the color based on priority
    switch (taskPriority) {
      case 'high':
        taskItem.style.color = 'red';
        break;
      case 'medium':
        taskItem.style.color = 'yellow';
        break;
      case 'low':
        taskItem.style.color = 'green';
        break;
    }

    // Add a delete button to each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Clear the input field after submitting
    document.getElementById('new-task-description').value = '';
  });
});
