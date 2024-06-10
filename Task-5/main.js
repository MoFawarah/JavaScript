

let compnies = [

    {
        "name" : "Big Corporation",
        "numberOfEmployees" : 10000,
        "ceo" : "Mary",
        "rating" : 3.6
    },

    
    {
        "name" : "Small Startup",
        "numberOfEmployees" : 5,
        "ceo" : null,
        "rating" : 4.3
    }
]

let jsonString = JSON.stringify(compnies); //using JSON.stringify(compnies) will convert the compnies JavaScript array of objects into a JSON string
console.log(jsonString);

let parsedCompanies  = JSON.parse(jsonString); // JSON.parse(jsonString) converts the JSON string back to a JavaScript array (original Data Type)
console.log(parsedCompanies);

console.log(parsedCompanies[0]);
console.log(parsedCompanies[0].name);

console.log(parsedCompanies[1]);
console.log(parsedCompanies[1].rating);


