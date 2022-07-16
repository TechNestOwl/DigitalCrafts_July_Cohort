
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
        } else if (resultDisplayed === true & lastChar === '+' || lastChar ==='-' || lastChar ==='*'|| lastChar ==='/'){
            resultDisplayed = flase;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML ="";
            input.innerHTML += e.target.innerHTML;
        }

    })
};

for (let i = 0; i < operators.length; i ++){
    operators[i].addEventListener('click', function(e){
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length -1];
        
        //if the last char entered is an operator, replace it with currently pressed one
        if (lastChar === "+" ||lastChar === "-" ||lastChar === "*" ||lastChar === "+" ||lastChar === "/"){
            let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length === 0) {
            //first key is operator, do nothing
            console.log('enter a number')
        } else {
            //else jsut add the operator
            input.innerHTML += e.target.innerHTML;
        }
    });
}

clear.addEventListener('ckick', function(e){
    input.innerHTML = "";
})