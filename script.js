/* 
Program Name: Recipe Display Applcation
Author:
Date:
Filename: script.js
*/
/* global $ */ 
//displays the next element after the current target 
function display(event) {

    $(event.currentTarget).next().fadeIn("slow");
    
}// end of display

//attach event listener to h3 elements to invoke display fuction when clicked 

$("h3").click(display);
