let body = document.body;
let body2 = document.querySelector('.body');
const p1 = document.querySelector('.p1');

let todoList = document.querySelector('.todo-list');
let headerImg = document.querySelector('.header-img');
let headerImg2 = document.querySelector('.header-img2');
const form = document.querySelector('.form1');
const cross = document.querySelector('.cross-icon');
const moon = document.querySelector('.icon-moon');
const sun = document.querySelector('.icon-sun');

const p = document.querySelector('p');
let header = document.querySelector('.header');

const generateTemplate = input => {
    let html = `
        <li class="list">
            <p class="p1" style="color:inherit;">${input}</p>
            <img src="images/icon-cross.svg" alt="cross icon" class="cross-icon">
        </li>
    `
    todoList.innerHTML += html;
}

body2.style.marginLeft = screen.availWidth / 3 + "px";
moon.style.marginLeft = screen.availWidth / 2 + "px";
sun.style.marginLeft = screen.availWidth / 2 + "px";

if(screen.availWidth <= 1000) {
    body.innerHTML = `
        <h1>Please Use a laptop</h1>
    `
}

form.onsubmit = e => {
    e.preventDefault();
    let input = form.input.value.trim(); 

    if(input.length) {
        generateTemplate(input); 
        form.reset();
        console.log(input)
    }
}

todoList.onclick = e => {
    if(e.target.classList.contains('cross-icon')) {
        e.target.parentElement.remove();
    }
}


moon.onclick = () => {
    let input = form.input

    // todoList.classList.toggle('darkp');
    todoList.classList.toggle('darkul');
    body.classList.toggle('darkbody');

    input.classList.toggle('darkinput');

    headerImg2.classList.toggle('darkimg');

    sun.classList.toggle('darksun');
    moon.classList.toggle('darkmoon');
}

sun.onclick = () => {
    let input = form.input

    // todoList.classList.toggle('darkp');
    todoList.classList.toggle('darkul');
    body.classList.toggle('darkbody');

    input.classList.toggle('darkinput');

    headerImg2.classList.toggle('darkimg');

    sun.classList.toggle('darksun');
    moon.classList.toggle('darkmoon');
}