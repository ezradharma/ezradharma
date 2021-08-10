/*
File: scriptHW4.js
GUI Assignment: HW4
Ezra Dharma, UMass Lowell Computer Science, edharma@cs.uml.edu
Copyright (c) 2021 by Ezra. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
updated by ED on Aug 9, 2021 at 11:00 PM
No Validation done here, moved to jQ validation.
Added killing buttons, to remove all or one tab.
https://htmlcheatsheet.com/jquery/
https://stackoverflow.com/questions/2592891/how-to-delete-the-first-child-of-an-element-but-referenced-by-this-in-jquery


Removing one tab bugged, could not figure out the behavior of remove.
*/




function readInput() {
    //Get our table's values
    var xLT = parseInt(document.getElementById("ltX").value),
    xRT = parseInt(document.getElementById("rtX").value),
    yTop = parseInt(document.getElementById("tY").value),
    yBottom = parseInt(document.getElementById("bY").value);
    document.getElementById("status").innerHTML = "";
    
    
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

  /* 
    ClearAll to remove all tabs
    killTab to kill one tab
    -does not function more than once, behavior to remove a child of the ul doesn't seem right...
  */

  function clearAll() {
    document.getElementById("status").innerHTML = "Reset used! <br>";
    var table = "";
    document.getElementById("resultingTable").innerHTML = table;
    document.getElementById("inputs").reset();
    document.getElementById("status").innerHTML += "Reset complete. <br>";
    $("div#tableSaves ul").empty();
    $("#tableSaves").tabs("refresh");
  }
  function killTab() {
    document.getElementById("status").innerHTML = "Killing one tab! <br>";
    $("div#tableSaves ul").find(':first-child').find(':first-child').remove();
    $("#tableSaves").tabs("refresh");

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
  
  
  
  
  