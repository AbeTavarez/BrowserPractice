//* set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

//* set session storage item
// sessionStorage.setItem('name', 'Beth');

//* remove from storage
// localStorage.removeItem('name');
// localStorage.removeItem('age');

//* if you clear the local storage before getting the values they'll be null
// localStorage.clear();

//* get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

//* clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
  // console.log(`working`)
  // e.preventDefault()

  //* gets the task input
  const task = document.getElementById('task').value;
  // console.log(task)

  //* sets the task on local storage
  // localStorage.setItem('task', task);
  // alert(`Task Saved!`)

  //* Storing Multiple Tasks
  let tasks;

  //* Gets the tasks from local storage if any
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    //* values in local storage are saved as strings
    //* we need to parse the string into a json object
    tasks = JSON.parse(localStorage.getItem('tasks'));
    // console.log(tasks)
  }
  //* we push the new task to the array
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});
//* Here we parse the value again
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});