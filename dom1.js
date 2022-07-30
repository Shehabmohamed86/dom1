const todo = document.querySelector('.todo')
todo.classList.add('done')
const form = document.querySelector('form')
const newh2 = document.createElement('h2')
newh2.innerText = 'i love coding'
newh2.classList.toggle('special')
form.appendChild(newh2)
