
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear Value
taskInput.value = '';



const runEvent = (e) => {
  console.log(`EVENT TYPE: ${e.type}`);
  // e.preventDefault();

  // console.log(taskInput.value)

  console.log(e.target.value)
  heading.innerText = e.target.value;
  
};

//* Submit Event
// form.addEventListener('submit', runEvent);

//* Key Down Event
// taskInput.addEventListener('keydown', runEvent)

//* Key Up Event
// taskInput.addEventListener('keyup', runEvent)

//* Key Press Event
// taskInput.addEventListener('keypress', runEvent)

//* Focus Event 
// taskInput.addEventListener('focus', runEvent);

//* Blur Event 
// taskInput.addEventListener('blur', runEvent);

//* Cut Event 
// taskInput.addEventListener('cut', runEvent);

//* Paste Event 
// taskInput.addEventListener('paste', runEvent);

//* Input Event fires off with anything you do in the input
// taskInput.addEventListener('input', runEvent);

//* Change event
select.addEventListener('change', runEvent)





































// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
// select.addEventListener('change', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
// }