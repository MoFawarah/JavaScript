// task_1----------------------

function tellFortune (jobTitle, country, partnet, kids) {
   console.log ("You are a " + jobTitle + " in " + country + " and you'll be married to " + partnet + " with " + kids + " kids")

}

tellFortune ("software Enginner", "Jordan", "Julia", 3)


// task_2----------------------

function calculateDogAge (puppyAge) {

    let result = puppyAge*7

    console.log ("Your doggie is " + result + " years old in dog years!")

}

calculateDogAge (1)



// task_3----------------------


function calculateSupply (age, amountPerDay) {

    const ageTillHundred = 100 - age;
    const cupsOfTea = ageTillHundred*amountPerDay*365

    console.log ("You will need " + cupsOfTea + " cups of tea to last you until the ripe old age of 100")
}

calculateSupply (30,3)



// task_4----------------------


function greet  (name) { 
    
    console.log ("Hello, " + name + "!")
}

greet("Adam")


// task_5----------------------What's the error:

// function double(cat) {

//     console.log ("The error is that X is not defined")
//     return 2 * x;
//   }


// function double(7) {

//     console.log ("The error is that you can't use a number as a parameter (unvalid Name)")
//     return 2 * 7;
//   }


// function double('7') {
//     console.log ("The error is that you can't use a string a parameter (unvalid Name) and you can't use 'x' in a math operation (must be 2*x)")
//     return 2 * 'x';
//   }




// task_6---------------------- Fixing Functions:


// func double1(x {
//     return 2 * x ;
//   }

function double1(x) {
    return 2 * x ;
  }


// functiondouble2 x)
// return 2 * x;
// }

function double2 (x) {
    return 2 * x;
}


// function (x) double3 {
//     return 2 * x;

function double3 (x) {
  return 2 * x; }


// task_7----------------------


function cube  (number) {
    const result = number**3;
    console.log ("The cube of " + number + " is " + result );
}

cube (2)


// task_8----------------------


function multiply (number1, number2) { 
 
    const result = number1*number2;

    console.log ("The multiply of " + number1 + " and " + number2 + " is " + result );
}

multiply (2, 10)



// task_9----------------------


function canIGetADrivingLicense (age) {

    if (age >= 20) {
        console.log ("Yes you can!")
    }

    else {
        const ageTillTwenty = 20 -age;
        console.log ("Plz come back after " + ageTillTwenty + " year(s) to get one!")
    }


}

canIGetADrivingLicense (19)


// task_10----------------------



function sameLength (string1, string2) {

    const lengthOfStringOne = string1.length
    const lengthOfStringTwo = string2.length

    if (lengthOfStringOne == lengthOfStringTwo) {
        console.log ("true")
    }

    else {
        console.log ("false")
    }
}

sameLength ("tree", "tree")




// task_11----------------------

function largerNubmer (number1, number2) {

    if (number1-number2 > 0){
        console.log (number1 + " is larger than "+ number2)
    }

    else
    console.log (number2 + " is larger than "+ number1)
}

largerNubmer (1, 10)


// task_12----------------------


function smallerNumber(number1, number2, number3) {
    let minNum = number1;

    if (number2 < minNum) {
        minNum = number2;
    }

    if (number3 < minNum) {
        minNum = number3;
    }

    console.log(minNum + " is the smallest");
}

smallerNumber (5,99,3) 



// task_13----------------------


function shorterString (str1, str2, str3, str4, str5) {

    const str1Len = str1.length;
    const str2Len = str2.length;
    const str3Len = str3.length;
    const str4Len = str4.length;
    const str5Len = str5.length;

    let minLen = str1Len;
    let shortestWord = str1;
    if (str2Len < minLen) {
        minLen = str2Len
        shortestWord = str2;
    }

    if (str3Len < minLen) {
        minLen = str3Len
        shortestWord = str3;
    }

    if (str4Len < minLen) {
        minLen = str4Len
        shortestWord = str4;
    }

    if (str5Len < minLen) {
        minLen = str5Len
        shortestWord = str5;
    }

    console.log ("The shortest word is: " + shortestWord)
 }

   shorterString("a","by","car","school","github")


// task_14----------------------


function longerString (str1, str2, str3, str4) { 

    const str1Len = str1.length;
    const str2Len = str2.length;
    const str3Len = str3.length;
    const str4Len = str4.length;


    let maxLen = str1Len;
    let longestWord = str1;
    if (str2Len > maxLen) {
        maxLen = str2Len
        longestWord = str2;
    }

    if (str3Len > maxLen) {
        maxLen = str3Len
        longestWord = str3;
    }

    if (str4Len > maxLen) {
        maxLen = str4Len
        longestWord = str4;
    }

    console.log ("The longest word is: " + longestWord)
}

   longerString ("air","schoo","car","github")


 // task_15----------------------


 function isEven (num) { 

    if (num % 2 == 0) {
        console.log ("true")
    }
    else {
        console.log ("false")
    }
 }

 isEven (10)



 // task_16----------------------


 function isOdd (num) { 

    if (num % 2 != 0) {
        console.log ("true")
    }
    else {
        console.log ("false")
    }
 }

 isOdd (11)


// task_17----------------------


 function positive (num) { 
 
    if (num >= 0) {
        console.log ("The positive version of " + num + " is the same: " + num)
    }
    else {
        console.log ("The positive version of " + num + " is: " + num*-1)
    }
}

positive (-6)


// task_18----------------------


function fullName (firstName, lastName) { 

    console.log (`Your full name is: ${firstName} ${lastName}!`)
}

fullName ("Mohammad", "Fawareh")



// task_19----------------------


function average (num1, num2, num3, num4, num5) { 
    let sum = num1 + num2 + num3 + num4 + num5;
    let average = sum/5
    console.log ("The average is: " + average)
}

average(5,7,9,3,5)




// task_20----------------------


function randomNumber () { 

    let num = Math.random()

    console.log (num.toFixed(4))

}

randomNumber()


// task_21----------------------


function randomBetweenNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let randomNum = randomBetweenNumbers(1, 10);
  console.log(randomNum)




// task_22----------------------

 function scoreInUniversty (num) {
    if (num >=95) {
        console.log ("A")
    }

    else if (num >=85){
        console.log ("B")
    }

    else if (num >=70){
        console.log ("C")
    }

    else if (num >=50){
        console.log ("D")
    }

    else {
        console.log ("F")
    }
}

scoreInUniversty (94)


// task_23----------------------


function createCounter() {
    let count = -1;
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
    console.log(counter());
    console.log(counter()); 
    console.log(counter());
    console.log(counter());