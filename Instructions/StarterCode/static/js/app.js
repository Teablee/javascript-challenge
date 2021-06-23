// from data.js
var tableData = data;

// YOUR CODE HERE!

// Reference to the table body
var tbody = d3.select("tbody");

// Look at data from data.js
console.log(data);


// use arrow functions to fill in table from data.js from the key values
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the form and button for the search by date
var form = d3.select("#form-control");
var button = d3.select("#filter-btn");

// create event handlers for filtering by date for the form and button
button.on("click", runEnter);
form.on("submit", runEnter);

// Function to run events
function runEnter () {
    d3.event.preventDefault();

    // make input the datetime field 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // Filter the table data if the datetime equals the inputvalue
    if(inputValue) {
        var filterData = tableData.filter((row) => row.datetime === inputValue)
    }

    // clear the table
   tbody.html("");
    
   // repopulate with the filtered data
    filterData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
};



