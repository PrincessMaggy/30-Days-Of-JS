let text = document.getElementById('text');
let submit = document.getElementById('submit');
let number = document.getElementById('count');

const numberOf =() =>{

    let count =  text.value.split(' ').length;
    if (text.value === "" ){
        number.innerHTML = 0;
    }
        else{
        number.innerHTML= count;
    
    }  
    // console.log(text.value.split(' '))
}

submit.addEventListener("click", numberOf);