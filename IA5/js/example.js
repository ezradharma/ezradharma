/*
File: example.js
GUI Assignment: inClass 5
Ezra Dharma, UMass Lowell Computer Science, edharma@cs.uml.edu
Copyright (c) 2021 by Ezra. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
updated by ED on Aug 4, 2021 at 7:45 PM
js to edit groceries list, all features were completed.
*/

var uList = document.getElementById("page").getElementsByTagName("ul") [0];

// ADD NEW ITEM TO END OF LIST

var newItem1 = document.createElement("li"), newtxt1 = document.createTextNode("cream");
newItem1.appendChild(newtxt1);
uList.appendChild(newItem1);

// ADD NEW ITEM START OF LIST

var newItem2 = document.createElement("li"), newtxt2 = document.createTextNode("kale");
newItem2.appendChild(newtxt2);
uList.prepend(newItem2);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

var allItems = document.querySelectorAll('li');
allItems.forEach((allItems) => (allItems.className += "cool"));


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var header = document.getElementById("page").getElementsByTagName('h2') [0];

header.innerHTML += '<span style="color:white">' + allItems.length + '</span>'; //<span> colors text