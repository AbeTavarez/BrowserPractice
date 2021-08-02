console.log(`running script...`)

//* Using an anonymous function
//* adding event listener to <a> tag and preventing the default behavior
// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
//     console.log(`hello world`)
//     e.preventDefault();
// });


//* Declaring a function
const onClick = (e) => {
    e.preventDefault();
    console.log(`Clicked`)

    //* logging event object to look at the target attribute
    //* The target attribute shows the element where the event happened  
    console.log(e)

    //* Event target element 
    console.log(e.target)
    console.log(e.target.href)
    console.log(e.target.className)
    console.log(e.target.classList)

    console.log(`===========================`)
    e.target.innerText = 'Cleared';

    //* Event Type
    console.log(e.type)
    console.log(e.timeStamp)

    //* Event Coordinates relative to the window
    console.log(e.clientY)
    console.log(e.clientX)

    //* Event Coordinates relative to the element
    console.log(e.offsetY)
    console.log(e.offsetX)
}

//* adding event listener 
document.querySelector('.clear-tasks').addEventListener('click', onClick);

