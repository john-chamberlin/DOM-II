// Your code goes here
const navLinks = document.querySelectorAll('.nav-link');

Array.from(navLinks).forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.color = 'green';
    })
})
