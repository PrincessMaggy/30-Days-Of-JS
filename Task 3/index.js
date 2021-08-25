let text = document.getElementById('text');
let submit = document.getElementById('submit');
let number = document.getElementById('count');

const numberOf =() =>{

    let count =  text.value.split(' ');
    count = count.filter(values => !!values)
    number.innerHTML= count.length;
    
    }  
    // console.log(text.value)
    
submit.addEventListener("click", numberOf);