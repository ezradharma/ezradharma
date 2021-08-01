/*
File: scriptHW3.js
GUI Assignment: HW3
Ezra Dharma, UMass Lowell Computer Science, edharma@cs.uml.edu
Copyright (c) 2021 by Ezra. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
updated by ED on July 31, 2021 at 11:00 PM
The js code used to create the needed tables.
*/




function readInput() {
    //Get our table's values
    var xLT = parseInt(document.getElementById("ltX").value),
    xRT = parseInt(document.getElementById("rtX").value),
    yTop = parseInt(document.getElementById("tY").value),
    yBottom = parseInt(document.getElementById("bY").value);
    document.getElementById("status").innerHTML = "";
    
    /*
        Invalid cases:
            Values being 0
            Values being greater than 100
            Values being less than -100
    */
    if (xLT == "0" || xRT == "0" || yTop == "0" || yBottom == "0") {
      document.getElementById("status").innerHTML = "Check your values for 0s, 0 is not a valid value.<br>";
      return;
    }

    if (xLT > "100" || xRT > "100" || yTop > "100" || yBottom > "100") {
      document.getElementById("status").innerHTML += "UP Check your values for numbers greater than 100.<br>";
      return;
  }

  if (xLT < "-100" || xRT < "-100" || yTop < "-100" || yBottom < "-100") {
      document.getElementById("status").innerHTML += "Check your values for numbers less than -100.<br>";
      return;
  }
    
    /*
        Swap cases:
            LT was greater than RT
            Top was greater than Bottom
    */

    if (xLT > xRT) {
      var holder = xLT;
      xLT = xRT;
      xRT = holder;
      document.getElementById("status").innerHTML = "Swapping used for the two X values.<br>";
    }

    if (yTop > yBottom) {
      var holder = yTop;
      yTop = yBottom;
      yBottom = holder;
      document.getElementById("status").innerHTML += "Swapping used for the two Y values.<br>";
    }

    document.getElementById("status").innerHTML += "Table gen. in progress...<br>";
    buildTable(xLT, xRT, yTop, yBottom);

  }
  
  function showEx() {
    document.getElementById("status").innerHTML = "Example used! <br> Table gen. in progress...<br>";
    buildTable(-10, 10, -10, 10);
  }

  function clearAll() {
    document.getElementById("status").innerHTML = "Reset used! <br>";
    var table = "";
    document.getElementById("resultingTable").innerHTML = table;
    document.getElementById("inputs").reset();
    document.getElementById("status").innerHTML += "Reset complete. <br>";
    
  }

  /*
    Table creating func.
    Builds table using for loops to go through every X/Y value
    Outputs the table with status.
  */

  function buildTable(xLT, xRT, yTop, yBottom) {
    var x, y, table = "";
  
    for (y = yTop - 1; y <= yBottom; y++) {
        table += "<tr>";
        if (y == yTop - 1) {
            table += "<td> * </td>"; 
            for (x = xLT; x <= xRT; x++) {
                 table += "<td>" + x + "</td>";
            }
        } 
        else {
            table += "<td>" + y + "</td>";
            for (x = xLT; x <= xRT; x++) {
                table += "<td>" + x * y + "</td>";
            }
        }
        table += "</tr>";
    }
  
    
    document.getElementById("status").innerHTML += "Table completed! <br>";
    document.getElementById("resultingTable").innerHTML = table;
  }
  
  
  
  
  