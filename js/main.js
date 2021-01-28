
const inputElement = document.querySelector ('.js-input');
const buttonElement = document.querySelector ('.js-button');
const hintElement = document.querySelector ('.paragraph1');
const paragraph2Element = document.querySelector ('.paragraph2');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max); 
}
const randomGenerator = getRandomNumber(100);
console.log (randomGenerator);

function generatedNumber () {
    const inputValue = parseInt(inputElement.value);
    console.log (inputValue);

    if (inputValue < 0 || inputValue > 100 || inputValue === ('')){
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
