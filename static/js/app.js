// create data variable from data.js
var tableData = data;

// Select Table Body Element 
var tbody = d3.select("tbody"); 

function buildTable(data) {
    // clear existing data 
    tbody.html(""); 
    // loop through each object and append data into row and cell for each value in the row 
    data.forEach((dataRow) => {
        var trow = tbody.append("tr"); 
        Object.values(dataRow).forEach((val)=> {
            var cell = trow.append("td");
            cell.text(val);
        });
    });
}
// Build Table 
buildTable(tableData);