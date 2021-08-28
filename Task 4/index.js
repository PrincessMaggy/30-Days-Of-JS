let btn = document.querySelector('button')
let col = document.querySelector('span');

const change =() =>{
    
let guess =Math.floor((Math.random()*255));
while ((guess+"").length < 3){
    guess= '0'+ guess;
}
document.body.style.backgroundColor = '#'+ guess;
col.innerHTML = "#"+ guess;
}

btn.addEventListener('click', change);




