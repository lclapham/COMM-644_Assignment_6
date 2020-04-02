/*eslint-env browser*/


//STEP 1
function alertMe() {
    window.alert("I have been clicked")
}

//STEP 2
let myElement = window.document.getElementById("step2");

myElement.onclick = function () {
    window.alert("I have been clicked");
}

//STEP 3
let myBtn = window.document.getElementById("step3");
myBtn.addEventListener("click", function () {
    window.alert("I have been clicked")
});

//STEP 4
function message() {
    window.alert("I have been clicked")
}

let step4 = window.document.getElementById("step4");
step4.addEventListener("click", message);

//STEP 5

//STEP 6

//STEP 7

//STEP 8

//STEP 9

//STEP 10
