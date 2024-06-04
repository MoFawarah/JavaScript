
//task1
function compare_two_nums (a, b) {
    compare_value = a - b

    if (compare_value > 0)
        return a
    else
    return b
}

let larger_value = compare_two_nums (0, 50)
console.log ("Task1: This task returns the larger value out of two nums. The larger value is: " + larger_value)


//task2

function sginOfProduct (a, b, c) {
    product = a*b*c
    if (product > 0)
        return 'the sign is +'
    else if (product < 0)
        return 'the sign is -'
}

let checkSign = sginOfProduct (-2,-3,4);
// alert (checkSign)


//task3

// let a = 10;
// let b = -50;
// let c = 44;

// if (a>b && a>c) {
//     if (b>c) {
//         large1= a
//         large2 = b
//         laege3 = c
//     }
//     else {
//         large1= a
//         large2 = c
//         laege3 = b
//     }
        
// }

// if (b>a && b>c) {
//     if (a>c) {
//         large1= b
//         large2 = a
//         laege3 = c
//     }
//     else {
//         large1= b
//         large2 = c
//         laege3 = a
//     }
        
// }

// if (c>b && c>a) {
//     if (a>b) {
//         large1= c
//         large2 = a
//         laege3 = b
//     }
//     else {
//         large1= c
//         large2 = b
//         laege3 = a
//     }
        
// }

// console.log ('the largest is: ', large1, 'then ', large2, 'and last is ', laege3)

//task_3 another way around using function

function sortThreeNums (a, b, c) {

    let large1, large2, large3; 
    
    if (a>b && a>c) {
        large1 = a;
        if (b>c) {
            large2 = b;
            large3 = c;
        }
        else {
            large2 = c;
            large3 = b;
        }
            
    }
    
    else if (b>a && b>c) {
        large1 = b;
        if (a>c) {

            large2 = a;
            large3 = c;  
        }
        else {

            large2 = c;
            large3 = a;
        }
            
    }
    
    else {
        large1 = c;
        if (a>b) {
            large2 = a;
            large3= b;
        }
        else {
            large2 = b;
            large3= a;
        }
    }

    return [large1, large2, large3]

            
            
    }

    let sortedNums = sortThreeNums(20, -1, 2)

    console.log ("Task3. Sorting 3 nums: " + sortedNums);


//task4

let arrayFiveNum = [-1, -2, -6, 0, 5];
large = arrayFiveNum [0]
for (i=1; i<arrayFiveNum.length; i++) 
    {
        if (arrayFiveNum [i] > large)
            large = arrayFiveNum[i]
    }

console.log ('The largest num of ',  arrayFiveNum ,'is ', large)


//task5:

let string1 = "x"
let string2 = "y"

let stringCompare = string1.localeCompare(string2)

if (stringCompare > 0)
    {
        console.log ("Hello World")
    }
    else {
        //  alert ("Task5: Goodbye! 'don't know why' doesn't have a y.")
    }


//task6

 function rate (a) {

    if (a >=90) {
        return 'A' }
    else if (a>=80) {
        return 'B'
    }

    else if (a>=70) {
        return 'C'
    }

    else if (a>=60) {
        return 'D'
    }

    else if (a>=50) {
        return 'E'
    }

    else {
        return 'Fail'
    }

 }

 let rateResult = rate (60);
 console.log ("Task6: Your rate is " + rateResult)


 //task7 
 console.log ('Task7: This task prints numbers from 0 to 10 using for:')
 for (i=0; i<=10; i++) {
    console.log (i)
 }

 //task8
 arrayMix = [13,23,12,45,22,48,66,100]
 console.log ('Task8: The Even numbers in this array  [13,23,12,45,22,48,66,100] are:')
 for (i=0; i<arrayMix.length ; i++) {
    if (arrayMix[i]%2 == 0) {
        console.log (arrayMix[i])
    }
 }


//task9 

 let shape = "";
 for ( i = 1; i <= 8; i++) {
     for ( j = 1; j <= i; j++) {
        shape = shape + j + " ";
     }
     shape = shape + "\n";
 }
 console.log(shape);

 

 //task10
 let string = "don’t know why";
 x = string.length;

 
    if (string.includes('y')) 
       { console.log ("Yes! The sentnece " + "'"+ string + "'"  + " includes y") }
    
    else {
        console.log ("No! The sentnece " + "'"+ string + "'"  + " doesn't include y")
    }
        

    
 