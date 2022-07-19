// console.log('heelo world')


//.filter iterates through an array and only returns data that meaets the criteria(defined trough a truth test inside a function)
const words = ['cat','discombobulate', 'dog', 'notarealword','pet','computer'];

const threeLetterWord = words.filter(function(word){
    return word.length === 3;
});

console.log(threeLetterWord);