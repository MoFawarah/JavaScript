// task_1
let x = 250;
let zakat;
const zakatPercentage = 0.025;
zakat = x * zakatPercentage;
console.log ("The zakat value is: " + zakat);


// Array Tasks
//task_1
//Correcting the syntax error in:
// [ 1,7  9  45, ]

//  ["Str" "alex","moh"

//  'the','fox' 'over' lazy, 'dog',  ]


//mehod_1: all in one nested array
let box = [ 1, 7, 9, 45, ["Str", "alex","moh", 'the','fox', 'over', 'lazy', 'dog']];
console.log(box);





//method_2: three seperate arrays:
let numbers = [1, 7, 9,  45, ]; 
let names =  ["Str", "alex","moh"];
let names_2 = ['the','fox', 'over', 'lazy', 'dog',  ]

console.log(numbers);

console.log(names);

console.log(names_2);

//task_2
var fruits=["Tomato","Banana","Watermelon"]

console.log ("The index of Tomato is: " + fruits.indexOf("Tomato"));
console.log ("The index of Banana is: " + fruits.indexOf("Banana"));


//task_3

let favFood = ["Mansaf", "Maklobeh", "Koftah"];
let favSport = ["Taekwondo", "Soccer", "Jump Rope", "Basketball"];
let favMovies = ["Last Christmas", "Bad Boys", "Jumanji"];

console.log ("My fav food is: " + favFood);
console.log ("My fav Sports are: " + favSport);
console.log ("My fav Movies are: " + favMovies);

//task_4
let firstArray = [1, 2, 3, 4];
let secondArray = ["Food", "Soccer", "Watermelon", "Travel", "Smartphones"];
let i =0;

console.log ("First element of firstArray is: " + firstArray[i]);
console.log ("First element of secondArray is: " + secondArray[i]);

//task_5

let first_Array = [1, 2, 3, 4];
let second_Array = ["Food", "Soccer", "Watermelon", "Travel", "Smartphones"];
let lastelement = first_Array.length -1;
let lastelement_2 = second_Array.length -1;

console.log ("Last element of first_Array is: " + first_Array[lastelement]);
console.log ("Last element of secondArray is: " + second_Array[lastelement_2]);


//Task_6
let orange = ["A", "B", "C", "D"];
console.log ("The original array before editing is: " + orange);
orange.push("E", "F");
console.log ("The array after adding two new values at the end using push is: " + orange);
orange.unshift("a1", "b1");
console.log ("The array after adding two new values at the beginning using unshift is: " + orange);

orange.shift();
orange.shift();
console.log ("The array after deleting the first two values at the beginning using shift is: " + orange);

orange.pop();
orange.pop();
console.log ("The array after deleting the last two values at the end using pop is: " + orange);




//task_7:

let Yummy = ["pizza", "Yogurt", "Jilly", "Icecream", "Falfel"];
console.log("Original array is: " + Yummy);
let B = Yummy.pop();
B = Yummy.pop();
console.log("The returned value from pop is: " + B + ", so pop returns the last deleted value form the end");
B = Yummy.shift();
B = Yummy.shift();
console.log("The returned value from shift is: " + B + ", so shift returns the last deleted value from the start");

console.log("array now before adding elements is: " + Yummy);

Yummy.unshift("Tea");
Yummy.unshift("Coffee");
Yummy.unshift("Iced Coffee");

console.log("array now after adding elements is: " + Yummy);


B = Yummy.unshift();
console.log("The returned value from unshift is " + B + ", So unshift returns the length of an array");

Yummy.push ("Cake", "Dounts", "Dough")

console.log("array now after adding more elements is: " + Yummy);

B = Yummy.push();
console.log("The returned value from pop is " + B + ", So pop also returns the length of an array");


//task_8

let arrayUnSorted = [-4, 1, 0, 4, 2, -6, 10, 8, -2];

function compareFunction (a, b) {

    // Scenarios:
    // if a > b = +  ... b comes first
    // if a < b = - ... a comes first
    // if a = b = 0 ... nothing changes

    return a-b;
}

let arraySorted = arrayUnSorted.sort (compareFunction);
console.log (arraySorted);




