//* EVENT BUBBLING
//* Is putting the even on a child and the event bubbles up to the parents

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

//* EVENT DELEGATION
//* Is putting the event on a parent and then going down

//* grabs the first one it finds
// const delItem = document.querySelector('.delete-item');
//* grabs all of them
// const delItem = document.querySelectorAll('.delete-item');


// delItem.addEventListener('click', deleteItem);

// delItem.forEach((el) => {
//   el.addEventListener('click', deleteItem);
// })

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  console.log(e.target);

  //! Not a good way to handle this
  //* bc the className have to match this is why in the if condition we're checking for two names
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }
  //* this is how we should handle it
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
 }