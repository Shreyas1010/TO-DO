const taskInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-btn');
const searchBox = document.getElementById('search-input');
const taskListContainer = document.getElementById('todo-list');
// const inputtext = document.getElementsByClassName("inputboxtext");

let taskList = [];

// Show tasks on the screen
function showTasks(filteredTasks = taskList) {
  taskListContainer.innerHTML = ''; 

  filteredTasks.forEach((task, position) => {
    const listItem = document.createElement('li');

    // Create a checkbox to mark task as done
    const statusCheckbox = document.createElement('input');
    statusCheckbox.type = 'checkbox';
    statusCheckbox.checked = task.completed;
    statusCheckbox.addEventListener('change', () => toggleTaskStatus(position));

    // Show the task text
    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    if (task.completed) {
      taskText.classList.add('completed'); 
    }

    // Create a delete button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', () => removeTask(position));

    // Put everything together
    listItem.append(statusCheckbox, taskText, removeButton);
    taskListContainer.appendChild(listItem);
  });
}

// Add a new task to the list
function addTask() {
  const newTaskText = taskInput.value.trim();
  const innertxt = inputtext.value.trim();

  if (newTaskText === '') {
    alert('Please enter a task!');
    return;
  }

  const newTask = {
    text: newTaskText,
    completed: false
  };

  taskList.push(newTask);
 
  taskInput.value = ''; // Clear the input box
  showTasks();
}

// Mark a task as complete or incomplete
function toggleTaskStatus(position) {
  taskList[position].completed = !taskList[position].completed;
  showTasks();
}

// Remove a task from the list
function removeTask(position) {
  taskList.splice(position, 1);
  showTasks();
}

// Filter tasks based on search input
function filterTasks() {
  const keyword = searchBox.value.toLowerCase();
  const matchingTasks = taskList.filter(task =>
    task.text.toLowerCase().includes(keyword)
  );
  showTasks(matchingTasks);
}

// Set up interactions
addTaskButton.addEventListener('click', addTask);
searchBox.addEventListener('input', filterTasks);

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Show the initial empty list
showTasks();


let a = 0;
function increment(){
 
  console.log(a);
  

  a++;
}

