
const input = document.getElementById('input');
const numbers = document.querySelectorAll('.numbers div');
const operators = document.querySelectorAll('.operators div')
const result = document.getElementById('result');
const clear = document.getElementById('clear');

let resultDisplayed = false // this is just a flag to keep an eye on what is displayed

//add click handlers to the numbers buttons
for (let i = 0 ; i < numbers.length; i++) {
    number[i].addEventListener('click', function(e){

        //sotring current input string and its last character in variables 
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        if(resultDisplayed === false){
            input.innerHTML += e.target.innerHTML;
        }

    })
};