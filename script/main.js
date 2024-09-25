// Hamburger Menu toggle click event
const hamburgerMenu = document.querySelector(".hamburger-btn");
const sideBar = document.querySelector(".side-bar"); 
const menuLinks = document.querySelectorAll(".side-menu-links");

// Toggling the hamburger menu
hamburgerMenu.addEventListener("click", function() {
 sideBar.classList.toggle("visible")
});

// Remove the side bar if either one each of side menu links has been clicked
menuLinks.forEach(function(remove){
  remove.addEventListener("click", function(){
    sideBar.classList.remove("visible");
  })
});


// Copyright footer section
const year = new Date().getFullYear();
const copyRight = `©${year} ${"Fernando Nerio Jr"}`;

document.querySelector(".copyright").innerHTML = copyRight;

// Instruction for the Sort Date
/*
  First, grab the sort-btn class from the HTML using document.querySelector(".sort-btn").

  Next, add a click event listener to that button so that when clicked, the table will be sorted by date.

  Start by creating the necessary variables: table, rows, switching, shouldSwitch, i, x, and y.

  Set table to reference the travelogue table in the HTML using document.getElementById("travelogueTable").

  When the sort-btn is clicked, initially set switching to true to begin the sorting process.

  Inside the while loop, set switching to false to control when rows need to be swapped.

  Set rows to represent all the rows in the table using table.rows.

  Then, create a for loop to iterate through the rows and sort them by date:

  The loop starts from the second row (i = 1) and continues until the second-to-last row (i < rows.length - 1).
  Initialize shouldSwitch to false at the start of each iteration.
  Next, set x to the current row's date (rows[i]) and y to the next row's date (rows[i + 1]).

  Since the goal is to sort by date, convert the date strings from the table into Date objects using new Date().

  If the date in the current row (x) is greater than the date in the next row (y), mark shouldSwitch as true to swap the rows.

  Once all rows are in the correct order, the loop will break.

  During the sorting process, as each pair of rows is compared, their positions will be swapped if necessary.
*/

// SORTING BY DATE TABLE
const sortTable = document.querySelector(".sort-btn");
sortTable.addEventListener("click", function() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("highlightsTable");
  switching = true;
  while(switching){
    switching = false;
    rows = table.rows;

    for(i = 1; i < (rows.length - 1); i++){
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];

      if(x.innerHTML > y.innerHTML){
        shouldSwitch = true;
        break;
      }
    }
    if(shouldSwitch){
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
});
