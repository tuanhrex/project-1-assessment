let currentValue = 0

const number = document.getElementById('number');
number.textContent = currentValue;

const plus = document.getElementsByClassName('plus');


const subtract = document.getElementsByClassName('subtract');


document.querySelector('.plus').onclick = function() {
    
    var input = document.querySelector('.input').value;
    let integer = Number(input);
    let output = integer + currentValue
    currentValue = output
    if (currentValue < 0) {
        number.style.color ='red'
    } else {
        number.style.color ='black'
    }
    input = null
    number.textContent = currentValue
   

}


document.querySelector('.subtract').onclick = function() {
   
    var input = document.querySelector('.input').value;
    let integer = Number(input);
    let output = currentValue - integer
    currentValue = output
    if (currentValue < 0) {
        number.style.color ='red'
    } else {
        number.style.color ='black'
    }
    input = null
    number.textContent = currentValue
   

}