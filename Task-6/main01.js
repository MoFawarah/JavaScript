

let request = "https://66681676f53957909ff67af8.mockapi.io/users/Animals";




async function GetData () {
    const responseDate = await fetch (request);
    
    const jsonData = await responseDate.json()

    console.log (jsonData)



    let imageContainer = document.getElementById ("image")


    let selectList = document.getElementById("select")

    for (i=0 ; i<jsonData.length ; i++){
       let selectOption = document.createElement ("option")
       selectOption.value = jsonData[i].name
       selectOption.textContent = jsonData[i].name
       selectList.appendChild (selectOption)
    }


    //setting Intial value and intial image

    if (jsonData.length > 0) {
    imageContainer.src = jsonData[0].image;
    selectList.value = jsonData[0].name; }
    
    
    //method 01:
   
    // selectList.addEventListener ("change", function () {
    //     for (i=0; i<jsonData.length; i++) {

    //         if (selectList.value === "Cats" && jsonData[i].name === "Cats") {
    //         imageContainer.src = jsonData[i].image }

    //         else if (selectList.value == "Dogs" && jsonData[i].name === "Dogs") {
    //             imageContainer.src = jsonData[i].image 
            
    //            }
            
                
    //         else if (selectList.value == "Bees" && jsonData[i].name === "Bees") {
    //             imageContainer.src = jsonData[i].image 
            
    //             }

    //         else if (selectList.value == "Butterfly" && jsonData[i].name === "Butterfly") {
    //             imageContainer.src = jsonData[i].image 
            
    //             }
                
    //     }

    // })


    
  

    //Method 02:
    
    selectList.addEventListener ('change', function(){
       
    var selectedValue = selectList.value;
    for (i = 0 ; i<jsonData.length ; i++ ) {

        if (selectedValue == jsonData[i].name) {
            imageContainer.src = jsonData[i].image;
            break;
        }


    }


    })

   
   
}

GetData () 







