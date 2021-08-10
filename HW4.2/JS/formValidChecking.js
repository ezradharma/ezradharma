/*
File: formWalidChecking.js
GUI Assignment: HW4
Ezra Dharma, UMass Lowell Computer Science, edharma@cs.uml.edu
Copyright (c) 2021 by Ezra. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
updated by ED on Aug 9, 2021 at 11:00 PM
jQ allows the checking of valid values, which is a filled field with a number between -100 and 100, also gives helpful error messages.
Removed sumbitHandler as that is handled else where.
Sources:
https://www.sitepoint.com/basic-jquery-form-validation-tutorial/
https://htmlcheatsheet.com/jquery/
https://jqueryvalidation.org/documentation/
*/


$(document).ready(function () {
    $("#inputs").validate({
        rules: {
            ltX: {
                
                range: [-100, 100]
            },
            rtX: {
                
                range: [-100, 100]
            },
            tY: {
                
                range: [-100, 100]
            },
            bY: {
                
                range: [-100, 100]
            }
            
        }
    });
})