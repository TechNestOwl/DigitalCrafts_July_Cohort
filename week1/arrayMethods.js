// console.log('heelo world')

//.forEach does exactily what it's name suggestes
const myFruits = ['papaya','watermelon','kiwi','caqui'];
const numbers = [1,2,3,4,5];
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// };

// numbers.forEach(function(num){
//     console.log(num)
// })


//.map is similar to forEach except that it creates and returns a new array. In this case "doubled" is the new array. 
const doubled = numbers.map(function(num){
    return num * 2;
})

// console.log(doubled);



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


//concat: this method combines two arrays together or add more items to an array and then returns a new array

const merged = myFruits.concat(numbers);
// console.log(merged);

//push: this method add items to the END  of an array and changes the ORIGIANL array
numbers.push(678);
// console.log(numbers)

//pop: this methods removes the last item from an array and returns it. In this case, removes the '678' from the numbers array.
numbers.pop()
// console.log(numbers)

//shift: is similar to pop, but it removes the first item of the array and returns it.
numbers.shift();
// console.log(numbers)

//unshift() this methods adds an item(s) to the begining of  an array and changes the origianl array
numbers.unshift("hello",1);
// console.log(numbers);


//          **** SPLICE() ****
//changes the array by adding, removing, and inserting elements
const itemArray = ["item1", 'item2','item3','item4','item5'];

// NOTE: the first parameter here is the index of where to start the splice, the second param is how many elements 
// to be delted startiong from the afromentioned INDEX. Not the index of whre to stop.
// if the second number is not defiend, every element starting from the given idex will be deleted. 
itemArray.splice(1,3); 
// console.log(itemArray)


let schedule = ['monday','tuesday','thursday','friday'];

//replacing items with splice()
schedule.splice(3,1,"friYAY", 'saturYAY');

//adding elements with splice()
schedule.splice(2,0,"wednesday")
// console.log(schedule)


//slice() is similar to splice in how you select/target array elemtnts. The difference is slice returns a new array within the selected elements.
//it does NOT alter the origijnal array.
let jetskis = ["yamaha",'see-doo','kawasaki'];
let bestJetSki = "the best JetSki brand is " + jetskis.slice(0,1);
// console.log(bestJetSki)

//split() this method is used for stings, it divides a strings itto substrings and returns them as an array

let firstName = 'Gill';

firstName.split("")// returns an array with each letter being as a seperate element
firstName.split()// returns and array with one element (the entire string)
firstName.split("i",2)// returns and array with two elements -> ['g','ll']