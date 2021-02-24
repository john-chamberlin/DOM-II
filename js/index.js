// Your code goes here
const navLinks = document.querySelectorAll('.nav-link');


Array.from(navLinks).forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.color = 'green';
    })
})

Array.from(navLinks).forEach((link) => {
    link.addEventListener('mouseout', (event) => {
        event.target.style.color = 'black';
    })
})

document.addEventListener('dblclick', (event) => {
    event.target.style.color = 'black'
    event.preventDefault();
    
})

document.addEventListener('keydown', (event) => {
    event.target.style.color = 'orange';
})

document.addEventListener('keyup', (event) => {
    event.target.style.color = 'black';
})

document.addEventListener('click', (event) => {
    event.target.style.color = 'green';
})
