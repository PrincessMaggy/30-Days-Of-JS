let btn = document.querySelector('button')
let col = document.querySelector('span');

const change =() =>{
    
let guess =Math.floor((Math.random()*255));
document.body.style.backgroundColor = '#'+ guess;
col.innerHTML = "#"+ guess;
}

btn.addEventListener('click', change);




