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

const colorArray = ['blue','orange','yellow','magenta'];
// colorArray.forEach((item,index) => console.log(index,item))



//                  *** .map() ***

//this method creates a new array from the manipulation of elements from another array.
// is similar to forEach except that it creates and returns a new array. In this case "doubled" is the new array. 
const doubled = numbers.map(function(num){
    return num * 2;
})
// console.log(doubled);

const userNames = ['tinyTina','dannyDourman','marko','oz'];
const display = userNames.map(item => '<li>' + item + '</li>');

const render = '<ul>' + display.join('') + '</ul>';






//                    *** filter() ***

//iterates through an array and only returns data that meaets the criteria(defined trough a truth test inside a function)

const words = ['cat','discombobulate', 'dog', 'notarealword','pet','computer'];
const threeLetterWord = words.filter(function(word){
    return word.length === 3;
});
// console.log(threeLetterWord);

// let results = array.filter(function(item, index, array){

// });
// check if users from Brazil:
const countryCode = ['+234', '+144','+224','+678','+234'];
const brazilian = countryCode.filter(code => code === '+234');
// const brazilian = countryCode.filter(function(code){
//     return code === '+234'
// });
// console.log(brazilian);


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
firstName.split("i",2)// returns and array with two elements -> ['G','ll']

//indexOf() looks for an item in an array and returns the index of it. If none is found, -1 is returned.
let fruits = ['apple','orange',false,3,'apple'];
// console.log(fruits.indexOf("orange"));

// lastIndexOf() works the same as indexOf(), except that it searches from right to left <- front to bacck
// console.log(fruits.lastIndexOf('apple'));  //returns 4

// toString() converts an array to a string seperated by a comma
let colors = ['blue', 'orange is the new black', 'purple'];
// console.log(colors.toString())

// join() is similar to toString() but here you can specify the sperator instead of the default comma

// console.log(colors.join('*'))

//reduce() this method is good for calculating totals. Used to calculaate a single value based on an array.

const hundos = [100, 300, 200, 500];

const sum = hundos.reduce((accummulator, value) => accummulator + value);

// console.log(sum)

//          *** every() ***

// This method checks if all items in an array pass the specified conditon and return true if passed, else false. EX below: check if all numbers are postivie

const numList = [1,-1,0,2,3,-200, 20];

let allPostivieNumbers = numList.every((value) => value >=0);
// console.log(allPostivieNumbers);

//          *** some() ***
//this method checks if an item (one or more) in an array pass the specified conditon and return true if passed, else false. EX below: checks if at leat one number is positive

let atLeastOnePositive = numList.some((value) => value >=0 );
let atLeastOneNegative = numList.some((value) => value <=0 );
// console.log(atLeastOneNegative);

//          *** includes() ***
// similar to .some() in that it checks an array to see if has a certain item. But,instead of looking for a specific condition to pass, it checks if the arrays contains a specific item.
let users = ['patrick', 'zaddy', 'faddy','baddy'];
// console.log(users.includes('zaddy'); // returns true

