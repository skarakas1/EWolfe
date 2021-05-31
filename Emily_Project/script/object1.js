//array for metadata categories
let metaCat = ["Title","Creator", "Description", "Date Created", "Material", "Dimensions", "Subject", "Language", "Type", "Format", "Rights", "Identifier"];

//-------------------------------------arrays for indv details

let cwolfe_aw_001 = ["\"Award\" Valentine 2013", "Wolfe, Cynthia A.", "Handmade paper Valentine in the shape of an award ribbon. Composed of paper, a metal ring, hemp thread , wallpaper samples, book pages and a vellum envelope" , "2013" , "Paper, Metal and Thread" ,  "6\"x3\"", "collage (technique); mixed media; greeting cards; valentines; cut-paper work" , "English" , "Image" , "JPEG" ,  "All rights reserved." , "Images may not be used without permission of the artist." , "cwolfe-aw-001"]

let cwolfe_aw_002 = ["Valentine 2021", "Wolfe, Cynthia A", "Handmade Valentine's Day card with hand drawn flowers, foliage, and a pink and red embroidered heart on a textured paper background.", "2021", "Ink and Thread on Paper", "9\"x6\"", "collage (technique); mixed media; greeting cards; valentines", "English", "Image", "JPEG", "All rights reserved. Images may not be used without permission of the artist.", "cwolfe-aw-002"];

let cwolfe_aw_003 = ["Valentine 2014" , "Wolfe, Cynthia A." , "Handmade paper Valentine with hand cut paper hearts and foliage with an image of a Victorian era woman on a pink glitter background. The card opens horizontally to reveal a Valentine's Day message." , "2014" , "Paper" , "5.75\" index 4.25\”" , "collage (technique); mixed media; greeting cards; valentines; cut-paper work" , "English" , "Image" , "JPEG" , "All rights reserved. Images may not be used without permission of the artist." , "cwolfe-aw-003"]

let cwolfe_aw_004 = ["Valentine's Day Booklet", "Wolfe, Cynthia A.", "Handmade 14 page origami booklet decorated with hand cut hearts and abstract organic shapes. Images come from atlases, art magazines, and dictionaries. The booklet can be viewed horizontally or vertically.","circa 2015","Paper","3\"x4.5\"", "collage (technique); mixed media; greeting cards; valentines, booklets; folded books; cut-paper work", "English", "Image", "JPEG", "All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-004"]

let cwolfe_aw_005 = ["Valentine 2009", "Wolfe, Cynthia A.", "Hand lettered and collaged Valentine's Day card overlayed on a page of French poetry. The main collage component is wrapped in clear cellophane and the card opens vertically to reveal a Valentine's Day message.", "2009", "Paper, Ink, Faux Gemstones, and Plastic" , "5\" index 7\"", "collage (technique); mixed media; greeting cards; valentines", "English", "Image", "JPEG", "All rights reserved. Images may not be used without permission of the artist.", "cwolfe-aw-005"]

let cwolfe_aw_006 = ["Pop Up Valentine","Wolfe, Cynthia A.","Pop-up style valentine on a wallpaper sample background, decorated in painted paper cutouts.","circa 2018","Wallpaper, paint, paper, tape","10\" index 5.5\”","collage (technique); mixed media; greeting cards; valentines; pop-up books","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-006"]

let cwolfe_aw_007 = ["Valentine 2020","Wolfe, Cynthia A.","Handmade collage valentine on an iridescent paper background decorated with robins and heart cut-outs. Opens vertically to reveal a valentine message.","2020","Paper, wallpaper, paper doily","5.5\" index 5\"","collage (technique); mixed media;  greeting cards; ","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-007"]



//----------------------------create-(dynamic)-object

//create an array to hold works' arrays
let works = [cwolfe_aw_001,cwolfe_aw_002,cwolfe_aw_003,cwolfe_aw_004,cwolfe_aw_005,cwolfe_aw_006,cwolfe_aw_007];

//create variable for works array indexing
let index = 0;

//object to get arrays from works
let worksIndex = works[index];
console.log(worksIndex);

//create an object to hold both arrays
let theObject = {};

//create table variable
let table = document.querySelector("table");

//create variables for left and right buttons
rButton = document.getElementById("rbutton");
lButton = document.getElementById("lbutton");

popObject(metaCat, worksIndex, table);


//------------------populate the table----------------------

//function to create object out of metaCat and worksIndex
function popObject(meta, data){
    meta.forEach((key, i) => data[key] = [i]);//loop through the arrays to populate the object
    console.log(data)//log the array

    //MAKE THE TABLE
    popTable(table, data);//call the function
}

function changeObject(meta, data, table){
    meta.forEach((key, i) => data[key] = [i]);//loop through the arrays to populate the object
    console.log(data)//log the array

    //MAKE THE TABLE
    changeTable(table, data);//call the function
}

function popTable(table, objectPlz){//function to populate the table
    for (items in objectPlz){

        let row = table.insertRow()//create row

        let cell1 = row.insertCell(0);//create cells
        let cell2 = row.insertCell(1);

        cell1.innerHTML = items;//pop column 1 cell w/ key
        cell2.innerHTML = objectPlz[items];//populate column 2 cell w /value
    }
}

function changeTable(table, objectPlz){
    for (items in objectPlz){
        let row = table.rows[items.index].
        console.log("items = " + row);
        let cell1 = row.cells[0];
        let cell2 = row.cells[1];

        cell1.innerHTML = items;//pop column 1 cell w/ key
        cell2.innerHTML = objectPlz[items];//populate column 2 cell w /value
    }
}

//------------------arrow buttons----------------------


//functions to iterate thru arrays
function plus(meta, worksIndex, works, index, table){
    //PLEASE CHANGE ME ONCE ALL ITEMS ARE IN
    if (index < works.length){
        index++;
    }
    else{
        index = 0;
    }
    console.log("plus");
    worksIndex = works[index];
    changeObject(meta, worksIndex, table);
    return index;
}

function minus(meta, worksIndex, works, index, table){
    if (index > 0){
        index--;
    }
    else{
        index = 6;
    }
    console.log("minus");
    worksIndex = works[index];
    changeObject(meta, worksIndex, table);
    return index;
}

rButton.addEventListener("click", function(){
    plus(metaCat, worksIndex, works, index, table)
});
lButton.addEventListener("click", function(){
    minus(metaCat, worksIndex, works, index, table)
}); 