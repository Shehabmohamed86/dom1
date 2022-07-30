const todo = document.querySelector('.todo')
todo.classList.add('done')
const form = document.querySelector('form')
const newh2 = document.createElement('h2')
newh2.innerText = 'i love coding'
newh2.classList.toggle('special')
form.appendChild(newh2)

const ul = document.querySelector('ul')
const lastLi = document.querySelectorAll('li')[2]
const newLi = document.createElement('li')
newLi.innerText = 'im a new li'
ul.insertBefore(newLi,lastLi)

const fristP = document.querySelector('p')
const bt = document.createElement('button')
const a = document.createElement('a')
a.innerText = 'im a link!!!'
fristP.append(bt,a)
fristP.prepend(bt,a)

const deleted =  ul.removeChild(newLi)
fristP.remove()