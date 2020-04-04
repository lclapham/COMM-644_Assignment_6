/*eslint-env browser*/

let tableData = [];
let empData1 = ['Henery Dorsett','Data Entry', '1234']
let empData2 = ['Molly Millions','Security Guard', '911']
let empData3 = ['Willis Corto','Colonel', '1235']
let empData4 = ['Linda Lee','Recepectionist', '010101']
let empData5 = ['Peter Riviera','Loan Officer', '411']

// Default Table Entries
tableData.push(empData1,empData2,empData3,empData4,empData5);

// Get Elements by ID
let $ = (id) => {
    return window.document.getElementById(id);
}
$('myTable').addEventListener("click", function(e){
    // alert("The row index is "+ e.rowIndex);
    // let rowIndex = e.target.id;
    // let test2 = document.getElementById('myRows');
    // alert("Add clicked "+ rowIndex )
    // test2.removeChild(test2.childNodes[rowIndex]);  
    // alert(this);
    getId(this);

});

function  getId(element) {
    console.log(element.parentNode.rows)
    // alert("row" + element.parentNode.parentNode.rowIndex + 
    // " - column" + element.parentNode.cellIndex);
}

document.getElementById('myTable').getElementsByTagName('tr')[0].getElementsByTagName('th')[0].innerText;


document.getElementById('myTable').getElementsByTagName('tr')[0].getElementsByTagName('th')[0].innerText = empData1[0];

document.getElementById('myTable').getElementsByTagName('tr')[1].getElementsByTagName('td')[0].innerHTML;








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




















var tableRef = document.getElementById('myTable').getElementsByTagName('tr')[0];

// Insert a row in the table at the last row
var newRow   = tableRef.insertRow;


// // Insert a cell in the row at index 0
// var newCell  = newRow.insertCell(0);

// // Append a text node to the cell
// var newText  = document.createTextNode('New row');
// newCell.appendChild(newText);