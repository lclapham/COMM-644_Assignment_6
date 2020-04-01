/*eslint-env browser*/


//STEP 1
function alertMe() {
    window.alert("I have been clicked")
}

//STEP 2
let myElement = window.document.getElementById("myButton");

myElement.onclick = function (){
    window.alert("I have been clicked");
}

//STEP 3
let myBtn = window.document.getElementById("myBtn");
myBtn.addEventListener("click", function () {
    window.alert("I have been clicked")
});

//STEP 4

//STEP 5

//STEP 6

//STEP 7

//STEP 8

//STEP 9

//STEP 10
