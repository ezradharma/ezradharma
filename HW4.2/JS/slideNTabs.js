/*
File: slideNTabs.js
GUI Assignment: HW4
Ezra Dharma, UMass Lowell Computer Science, edharma@cs.uml.edu
Copyright (c) 2021 by Ezra. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
updated by ED on Aug 9, 2021 at 11:00 PM
Code to implement the sliders, adding auto-creating feature for valid values only.
Sources:
https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
https://htmlcheatsheet.com/jquery/
https://jqueryvalidation.org/documentation/
https://www.w3schools.com/jquery/
*/



(function($){
    
    /*
        Slide config:
            Range of the slides, deafault value.
            Auto update the slides when repos.
    */
    var configSlides = 
    {
        max: 100, min: -100, value: 0,
        slide: function() 
        {
            var xLT = $("#xSlide1").slider("value"), xRT = $("#xSlide2").slider("value"),
                yTop = $("#ySlide1").slider("value"), yBottom = $("#ySlide2").slider("value");

            $("#ltX").val(xLT);
            $("#rtX").val(xRT);
            $("#tY").val(yTop);
            $("#bY").val(yBottom);
            readInput()
            
        }
    };
    $("#xSlide1, #xSlide2, #ySlide1, #ySlide2").slider(configSlides);
    

    /*
        Adding tables to a tab:
            Takes input vals
            Creates headers based on inputs
            Saves tab
            Adds tab
    */



    $("#tableSaves").tabs();
    $("#inputs").submit(function(event) {
        
    xLT = $("#ltX").val();
    xRT = $("#rtX").val();
    yTop = $("#tY").val();
    yBottom = $("#bY").val();

    if (xLT > xRT) {
        var holder = xLT;
        xLT = xRT;
        xRT = holder;
    }
    if (yTop > yBottom) {
        var holder = yTop;
        yTop = yBottom;
        yBottom = holder;
    }
    if  (!isNaN(xLT) && xLT <= 100 && xLT >= -100 && !isNaN(xRT) && xRT <= 100 && xRT >= -100 && !isNaN(xRT) && yTop <= 100 && yBottom >= -100) {
        document.getElementById("status").innerHTML = "Saving table! <br>";
        var tableSpec = "[" + xLT + "," + xRT + "] * [" + yTop + "," + yBottom + "]", givenTable = document.getElementById("resultingTable").outerHTML;
        $("div#tableSaves ul").append("<li><a href=\"#" + tableSpec + "\">" + tableSpec + "</a></li>");
        $("div#tableSaves").append("<div id=\"" + tableSpec + "\">" + givenTable + "</div>");
        $("#tableSaves").tabs("refresh");
    }
    
    event.preventDefault();
    });
})(jQuery);

/*
    Auto-setting sliders when an input from the number input box is added.
    Will not create table if there are invalid values.
*/

$("#ltX").change(function() 
{
    var inputValue = $("#ltX").val();
    $("#xSlide1").slider('value', inputValue);
    if (!isNaN(inputValue) && inputValue <= 100 && inputValue >= -100) {
        readInput()
    }
    
})

$("#rtX").change(function() 
{
    var inputValue = $("#rtX").val();
    $("#xSlide2").slider('value', inputValue);

    if (!isNaN(inputValue) && inputValue <= 100 && inputValue >= -100) {
        readInput()
    }
})

$("#tY").change(function() 
{
    var inputValue = $("#tY").val();
    $("#ySlide1").slider('value', formValue);

    if (!isNaN(formValue) && inputValue <= 100 && inputValue >= -100) {
        readInput()
    }
})

$("#bY").change(function() 
{
    var inputValue = $("#bY").val();
    $("#ySlide1").slider('value', inputValue);
    if (!isNaN(inputValue) && inputValue <= 100 && inputValue >= -100) {
        readInput()
    }
})




