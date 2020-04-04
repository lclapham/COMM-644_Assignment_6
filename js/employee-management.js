/*eslint-env browser*/

// Golbal Variables
let inventory = [];
let empData1 = ['Henery Dorsett', 'Data Entry', '1234']
let empData2 = ['Molly Millions', 'Security Guard', '911']
let empData3 = ['Willis Corto', 'Colonel', '1235']
let empData4 = ['Linda Lee', 'Recepectionist', '010101']
let empData5 = ['Peter Riviera', 'Loan Officer', '411']

let programRun = true;

let numberOfRows;

// Default Table Enteries
function loadDefaultInventory() {
    inventory.push(empData1, empData2, empData3, empData4, empData5);

}

// Creates programmtic approach to rows 
function createRows(idNum) {
    // Create the row element
    let tr = document.createElement('tr');

    //set tr id with iterated number/use as a reference to delete row
    tr.id = "row" + idNum;

    // Insert row in 'myTable' on document
    myTable.appendChild(tr);
    console.log(tr.id);
    createTableData(tr.id, inventory, idNum);

}

function loadStaticData() {
    // iterate throug the inventory array calling the createrows() to populate document table
    for (let i = 0; i < inventory.length; i++) {
        createRows([i]);
    }
}
// let newLocal = inventory[0][0];
function createTableData(tr, inventory, idNum) {
    // Setup Table Data
    let name = document.createElement('td');
    let title = document.createElement('td');
    let extension = document.createElement('td');
    let delBtn = document.createElement('td');

    // Get the specific table row
    tr = document.getElementById(tr);

    // Add the html from the inventory array
    name.innerHTML = inventory[idNum][0];
    title.innerHTML = inventory[idNum][1];
    extension.innerHTML = inventory[idNum][2];
    delBtn.innerHTML = "<button id="+idNum+">Delete</button>";

    // Append the 'myTable'-->Row with populated TDs
    tr.appendChild(name);
    tr.appendChild(title);
    tr.appendChild(extension);
    tr.appendChild(delBtn);
}


// Get Elements by ID
let $ = (id) => {
    return window.document.getElementById(id);
}
$('myTable').addEventListener("click", function (e) {
    let row = "row"+e.target.id;
    let rowToDel = document.getElementById(row);
    rowToDel.remove();

});

// function getId(element) {
//     console.log(element.parentNode.rows)
//     // alert("row" + element.parentNode.parentNode.rowIndex + 
//     // " - column" + element.parentNode.cellIndex);
// }

// document.getElementById('myTable').getElementsByTagName('tr')[0].getElementsByTagName('th')[0].innerText;


// document.getElementById('myTable').getElementsByTagName('tr')[0].getElementsByTagName('th')[0].innerText = empData1[0];

// document.getElementById('myTable').getElementsByTagName('tr')[1].getElementsByTagName('td')[0].innerHTML;








function CountRows() {
    var totalRowCount = 0;
    var rowCount = 0;
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr")
    for (var i = 0; i < rows.length; i++) {
        totalRowCount++;
        if (rows[i].getElementsByTagName("td").length > 0) {
            rowCount++;
        }
    }
    var message = "Total Row Count: " + totalRowCount;
    message += "\nRow Count: " + rowCount;
    alert(message);
}




window.addEventListener('load', () => {
    loadDefaultInventory();
    loadStaticData();

});



















var tableRef = document.getElementById('myTable').getElementsByTagName('tr')[0];

// Insert a row in the table at the last row
var newRow = tableRef.insertRow;


// // Insert a cell in the row at index 0
// var newCell  = newRow.insertCell(0);

// // Append a text node to the cell
// var newText  = document.createTextNode('New row');
// newCell.appendChild(newText);