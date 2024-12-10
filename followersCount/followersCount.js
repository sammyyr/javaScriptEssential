let count = 0; //initialize count to 0

function increaseCount(){
    count++; //increment the count by 1
    displayCount(); //Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; //display the count in countDisplay
}

function checkCountValue(){
    if (count === 10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if(count === 20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetCount(){
    count = 0; //reset count to 0
    alert("Your follower count is being reset back to 0!");

    displayCount(); //display the reset count
    
}