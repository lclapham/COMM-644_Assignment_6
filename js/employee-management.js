/*eslint-env browser*/

// Golbal Variables
let inventory = [];
let userUpdate = [];
let empData1 = ['Henery Dorsett', 'Data Entry', '1234']
let empData2 = ['Molly Millions', 'Security Guard', '911']
let empData3 = ['Willis Corto', 'Colonel', '1235']
let empData4 = ['Linda Lee', 'Recepectionist', '010101']
let empData5 = ['Peter Riviera', 'Loan Officer', '411']

let Source;


// Default Table Enteries
function loadDefaultInventory() {
    inventory.push(empData1, empData2, empData3, empData4, empData5);
}

// Creates programmtic approach to rows 
function createRows(idNum, source) {
    // Create the row element
    let tr = document.createElement('tr');

    //set tr id with iterated number/use as a reference to delete row
    tr.id = "row" + idNum;

    // Insert row in 'myTable' on document
    myTable.appendChild(tr);
    createTableData(tr.id, idNum, source);

}

function loadStaticData() {
    // iterate throug the inventory array calling the createrows() to populate document table
    for (let i = 0; i < inventory.length; i++) {
        createRows([i], 1);
    }
}
// let newLocal = inventory[0][0];
function createTableData(tr, idNum, source) {

    // Setup Table Data
    let name = document.createElement('td');
    let title = document.createElement('td');
    let extension = document.createElement('td');
    let delBtn = document.createElement('td');

    // Get the specific table row
    tr = document.getElementById(tr);

    // Add the html from the inventory array
    if (source == 1) {
        name.innerHTML = inventory[idNum][0];
        title.innerHTML = inventory[idNum][1];
        extension.innerHTML = inventory[idNum][2];
    } else {
        name.innerHTML = userUpdate[0];
        title.innerHTML = userUpdate[1];
        extension.innerHTML = userUpdate[2];
    }

    delBtn.innerHTML = "<button id=" + idNum + ">Delete</button>";

    // Append the 'myTable'-->Row with populated TDs
    tr.appendChild(name);
    tr.appendChild(title);
    tr.appendChild(extension);
    tr.appendChild(delBtn);

    // Call the row counter
    CountRows();
}

// Get Elements by ID
let $ = (id) => {
    return window.document.getElementById(id);
}

// Table button events
$('myTable').addEventListener("click", function (e) {
    let row = "row" + e.target.id;
    let rowToDel = document.getElementById(row);
    rowToDel.remove();
    CountRows();

});

$('inputForm').addEventListener("input", function () {
    // Listen for the user to enter something then hide errors
    if ($('uName').value !== '') {
        document.getElementById('sp1').style.visibility = 'hidden';
    }
    if ($('uTitle').value !== '') {
        document.getElementById('sp2').style.visibility = 'hidden';
    }
    if ($('uExt').value !== '') {
        document.getElementById('sp3').style.visibility = 'hidden';
    }

})

$('addBtn').addEventListener("click", function (e) {
    // Validate Input
    if ($('uName').value == '') {
        document.getElementById('sp1').style.visibility = 'visible';
    }
    if ($('uTitle').value == '') {
        document.getElementById('sp2').style.visibility = 'visible';
    }
    if ($('uExt').value == '') {
        document.getElementById('sp3').style.visibility = 'visible';
    }
    if ($('uName').value !== '' && $('uTitle').value !== '' && $('uExt').value !== '') {
        // Get number of rows
        let table = document.getElementById("myTable");
        let rows = table.getElementsByTagName("tr");

        //Establish index number 
        idNum = rows.length - 1;

        //Set the values for the form fields and update the arrays
        userName = ($('uName').value);
        title = ($('uTitle').value)
        extension = ($('uExt').value)
        userUpdate.push(userName, title, extension)
        inventory.push(userUpdate);
        createRows(idNum, 2);

        //Call for cleanup
        cleanUpForm();

    }




});

function cleanUpForm() {
    //Hide the Error if there is data in the field
    if ($('uName').value !== '') {
        document.getElementById('sp1').style.visibility = 'hidden';
    }
    if ($('uTitle').value !== '') {
        document.getElementById('sp2').style.visibility = 'hidden';
    }
    if ($('uExt').value !== '') {
        document.getElementById('sp3').style.visibility = 'hidden';

    }

    // Clear the input value
    $('uName').value = "";
    $('uTitle').value = "";
    $('uExt').value = "";
}

function CountRows() {
    var rowCount = 0;
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr")
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].getElementsByTagName("td").length > 0) {
            rowCount++;
        }
    }
    countingRows = document.getElementById('rowCount')

    countingRows.innerHTML = "Showing " + rowCount + " Employees";

}

window.addEventListener('load', () => {
    loadDefaultInventory();
    loadStaticData();

});

