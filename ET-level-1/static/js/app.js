// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// clear the table 
tbody.html("");

// ----- Initialize page with table for all datetimes available
// populate table body, row by row
tableData.forEach((auxVar) => {
    var row = tbody.append("tr");
    Object.entries(auxVar).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select  button
var button = d3.select("#filter-btn");


// ------ when button clicked --- 
button.on("click", function () {

    // get input element
    var inElement = d3.select("#datetime");
    // get value in input element
    var inValue = inElement.property("value");

    var filtData = tableData.filter(tableData => tableData.datetime === inValue);

    // clear table from previous search results
    tbody.html("");

    // populate FILTERED table body, row by row
    filtData.forEach((auxVar) => {
        var row = tbody.append("tr");
        Object.entries(auxVar).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});


