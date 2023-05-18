//genereate random numbers
let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);

//get sum
let total = firstNumber + secondNumber;

//show numbers
let primary = document.getElementById('primary-number');
    primary.innerHTML = `<p>${firstNumber}</p>`;

let secondary = document.getElementById('secondary-number');
    secondary.innerHTML = `<p>${secondNumber}</p>`


//get guess from user
let button = document.getElementById('btn')

button.addEventListener('click', function(){

let guess = document.getElementById('guess').value;
    guess = Number(guess);
//check answer
if (guess === total){
    alert('Right answer ;)');
    window.location.reload()
} else {
    alert('WRONG ANSWER ! ;(' + total + '.')
    window.location.reload()

}
    });