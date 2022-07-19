// console.log('heelo world')

//.forEach does exactily what it's name suggestes

const numbers = [1,2,3,4,5];
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// };

numbers.forEach(function(num){
    console.log(num)
})



//.filter iterates through an array and only returns data that meaets the criteria(defined trough a truth test inside a function)

const words = ['cat','discombobulate', 'dog', 'notarealword','pet','computer'];
const threeLetterWord = words.filter(function(word){
    return word.length === 3;
});
// console.log(threeLetterWord);


const people = [
    {name:'gwen', age: 25, home:'Leeds'},
    {name:'todd', age: 25, home:'Acworth'},
    {name:'jake', age: 25, home:'Leeds'},
    {name:'stephan', age: 25, home:'Atlanta'},
];
const leedsPeeps = people.filter(function(person){
    return person.home === "Leeds";
});
// console.log(leedsPeeps);