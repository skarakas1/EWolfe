//array for metadata categories
let metaCat = ["Title","Creator", "Description", "Date Created", "Material", "Dimensions", "Subject", "Language", "Type", "Format", "Rights", "Identifier"];

//array for indv details
let cwolfe_aw_002 = ["Valentine 2013", "Wolfe, Cynthia A", "Handmade Valentine's Day card with hand drawn flowers, foliage, and a pink and red embroidered heart on a textured paper background.", "2013", "Ink and Thread on Paper", "9\"x6\"", "collage (technique), mixed media, greeting cards, valentines", "English", "Image", "JPEG", "All rights reserved. Images may not be used without permission of the artist.", "cwolfe-aw-002"];

//create an array to hold works' arrays
let works = [cwolfe_aw_002];

//create an object to hold both arrays
let theObject = {};

metaCat.forEach((key, i) => theObject[key] = cwolfe_aw_002[i]);//loop through the arrays to populate the object
console.log(theObject)//log the object

let table = document.querySelector("table");//declare table variable

function popTable(table, objectPlz){//function to populate the table
    for (items in objectPlz){

        let row = table.insertRow()//create row

        let cell1 = row.insertCell(0);//create cells
        let cell2 = row.insertCell(1);

        cell1.innerHTML = items;//pop column 1 cell w/ key
        cell2.innerHTML = objectPlz[items];//populate column 2 cell w /value
    }

}

popTable(table, theObject)//call the function