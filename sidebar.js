const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click',  ()=>{
    hamburger.classList.toggle('clicked');
    sidebar.classList.toggle('show');
})
