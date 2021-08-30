let btn = document.querySelector('button')
let span = document.getElementById('output');
let error = document.getElementById('warning');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');

const change =() =>{
let red = text1.value;
let green = text2.value;
let blue= text3.value;
 
if(red > 255 || green > 255|| blue > 255 || red === "" || green === "" || blue ===""){
    error.innerHTML ="Wrong Input!!"
}
else{
// let output = 'rgb(' + red +',' + green +',' + blue +')';

let col1 =hex(red);
let col2 = hex(green);
let col3 = hex(blue);

let output = '#' + col1 + col2 + col3;
document.body.style.backgroundColor = output;
span.innerHTML = "This page has an hexadecimal color of " + output;
error.innerHTML ="";
}

}

const hex =(rgb) =>{
    let code = Number(rgb).toString(16)
    if (code.length < 2){
        code = '0'+ code;
    }
    return code;
}
btn.addEventListener('click', change);
