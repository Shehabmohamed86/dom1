
const h1 = document.querySelector('h1');
h1.style.color = 'orange';

const p = document.querySelector('p');
p.style.color = 'white';
p.style.backgroundColor = 'black';

const allLis = document.querySelectorAll('li');
const colors = ['red','blue','orange','yellow','black','purble'];

allLis.forEach((li,i) =>{
  const color = colors[i];
  li.style.color = color;
})