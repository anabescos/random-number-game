
const inputElement = document.querySelector ('.js-input');
const buttonElement = document.querySelector ('.js-button');
const hintElement = document.querySelector ('.paragraph1');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max); 
}

const randomGenerator = getRandomNumber(100);

console.log (randomGenerator);

// First event - input number - hints

function generatedNumber (ev) {
    ev.preventDefault()
    const inputValue = parseInt(inputElement.value);
    console.log (inputValue);

    if (inputValue < 0 || inputValue > 100 || inputValue === '' || isNaN(inputValue)){
        hintElement.innerHTML = 'Pista: Escribe un número entre 0 y 100';
        console.log ('try again');
    } else if (inputValue < randomGenerator){
        hintElement.innerHTML = 'Pista: El número introducido es demasiado bajo';
        console.log ('too low!');
    } else if (inputValue > randomGenerator) {
        hintElement.innerHTML = 'Pista: el número introducido es demasiado alto'
        console.log ('too high!');
    } else if (inputValue === randomGenerator){
        hintElement.innerHTML = '¡Bien! ¡Has ganado, campeona!'
        console.log ('well done!');
    }
} 

buttonElement.addEventListener ('click', generatedNumber);

// Second event - counter

const paragraph2Element = document.querySelector ('.paragraph2');

let acc = 0;

function counter (){
    const inputValue = parseInt(inputElement.value);
    if (inputValue === randomGenerator){
        acc += 0;
    } else {
        acc += 1;
    }
   paragraph2Element.innerHTML = `Número de intentos: ${acc}`; 
}

buttonElement.addEventListener ('click', counter);