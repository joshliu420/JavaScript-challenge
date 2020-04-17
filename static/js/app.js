// from data.js
var tableData = data;

// YOUR CODE HERE!
var ttable = d3.select("tbody");

tableData.forEach((report) => {
    var row = ttable.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});


// var selectdropdown = d3.select("#selDataset");
// selectdropdown.on("click", function(listvalue) {
//   var value = listvalue.value;

//   if(value === "City") {
//     textlabel.text("Enter a City");
//   };

// });

function search() {

  //Remove the current table
  // $("tbody tr").remove();

  //Read the value in the input 
  var selectvalue = d3.select("#datetime");
  var inputvalue = selectvalue.node().value;

  //Find the match from data.js
  var filteredData = tableData.filter(input => input.datetime === inputvalue);
  console.log(filteredData);

   
  //Rewrite the table row for filtered data only
  var ttable = d3.select("tbody");
  filteredData.forEach((report) => {
    var row = ttable.append("tr");
    Object.entries(report).forEach(([key,value]) => {
    var cell = row.append("td");
    cell.text(value);
    });

  });

    
};

var selectbutton = d3.select("#filter-btn");

selectbutton.on("click", search);