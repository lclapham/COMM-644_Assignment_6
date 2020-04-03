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

// In html header

//STEP 6

document.getElementById("redirect").addEventListener("click", function (e) {
    (e).preventDefault();
    alert("You clicked on a link");
});

//STEP 7
document.getElementById("step7").addEventListener("click", function () {
    this.disabled = "true";
    let userInput = document.getElementById("tBox");
    alert(userInput.value);

});

//STEP 8
document.getElementById('step8').addEventListener("click", function () {
    window.open('newpage.html', 'New Page', "width=300px,height=300px;")

});

//STEP 9

let $ = (id) => {
    return window.document.getElementById(id);
}
$("start9").addEventListener("click", function () {
    let interval = setInterval(function () {
        console.log('Learning JavScript is fun!')
        console.log(' ');
    }, 2000);
    $("stop9").addEventListener("click", function () {
        window.clearInterval(interval);
    });

});


//STEP 10
