document.addEventListener('DOMContentLoaded', function(event) {
   // e.preventDefault();
    
// I would like the class to change depending on the selection made by the user.

document.querySelector('.yes').addEventListener('click', function(e){
    e.preventDefault();
    //if it is Yes I would like to remove the negative class if it is present
    document.querySelector('.target').classList.remove('negative');
    //add a positive class 
    document.querySelector('.target').classList.add('positive');
    //log choice YES
    logChoice('Positive')
});

document.querySelector('.no').addEventListener('click', function(e){
    e.preventDefault();
    //if it is Yes I would like to remove the negative class if it is present
    document.querySelector('.target').classList.remove('positive');
    //add a positive class 
    document.querySelector('.target').classList.add('negative');
    //log choice NO
    logChoice("Negative")
});
    //add a entry to the log
    function logChoice (logValue){
       //create a new list element
       let newValue = document.createElement("li");
       console.log(newValue);
       //set text of list element to my logValue
        newValue.innerText = logValue;
        console.log(newValue);
       //add the element to the list -append
       document.querySelector('.log').appendChild(newValue);
       

    }


console.log('im here');

});