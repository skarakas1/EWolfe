//array for metadata categories
let metaCat = ["Title","Creator", "Description", "Date Created", "Material", "Dimensions", "Subject", "Language", "Type", "Format", "Rights", "Identifier"];

//-------------------------------------arrays for indv details

let cwolfe_aw_001 = ["\"Award\" Valentine 2013", "Wolfe, Cynthia A.", "Handmade paper Valentine in the shape of an award ribbon. Composed of paper, a metal ring, hemp thread , wallpaper samples, book pages and a vellum envelope" , "2013" , "Paper, metal, thread" ,  "6\" x 3\"", "collage (technique); mixed media; greeting cards; valentines; cut-paper work" , "English" , "Image" , "JPEG" ,  "All rights reserved. Images may not be used without permission of the artist." , "cwolfe-aw-001"];

let cwolfe_aw_002 = ["Valentine 2021", "Wolfe, Cynthia A", "Handmade Valentine's Day card with hand drawn flowers, foliage, and a pink and red embroidered heart on a textured paper background.", "2021", "Ink, thread, paper", "9\" x 6\"", "collage (technique); mixed media; greeting cards; valentines", "English", "Image", "JPEG", "All rights reserved. Images may not be used without permission of the artist.", "cwolfe-aw-002"];

let cwolfe_aw_003 = ["Valentine 2014" , "Wolfe, Cynthia A." , "Handmade paper Valentine with hand cut paper hearts and foliage with an image of a Victorian era woman on a pink glitter background. The card opens horizontally to reveal a Valentine's Day message." , "2014" , "Paper" , "5.75\" x 4.25\”" , "collage (technique); mixed media; greeting cards; valentines; cut-paper work" , "English" , "Image" , "JPEG" , "All rights reserved. Images may not be used without permission of the artist." , "cwolfe-aw-003"];

let cwolfe_aw_004 = ["Valentine's Day Booklet", "Wolfe, Cynthia A.", "Handmade 14 page origami booklet decorated with hand cut hearts and abstract organic shapes. Images come from atlases, art magazines, and dictionaries. The booklet can be viewed horizontally or vertically.","circa 2015","Paper","3\" x 4.5\"", "collage (technique); mixed media; greeting cards; valentines, booklets; folded books; cut-paper work", "English", "Image", "JPEG", "All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-004"];

let cwolfe_aw_005 = ["Valentine 2009", "Wolfe, Cynthia A.", "Hand lettered and collaged Valentine's Day card overlayed on a page of French poetry. The main collage component is wrapped in clear cellophane and the card opens vertically to reveal a Valentine's Day message.", "2009", "Paper, ink, faux gemstones, plastic" , "5\" x 7\"", "collage (technique); mixed media; greeting cards; valentines", "English", "Image", "JPEG", "All rights reserved. Images may not be used without permission of the artist.", "cwolfe-aw-005"];

let cwolfe_aw_006 = ["Pop Up Valentine","Wolfe, Cynthia A.","Pop-up style valentine on a wallpaper sample background, decorated in painted paper cutouts.","circa 2018","Wallpaper, paint, paper, tape","10\" x 5.5\”","collage (technique); mixed media; greeting cards; valentines; pop-up books","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-006"];

let cwolfe_aw_007 = ["Valentine 2020","Wolfe, Cynthia A.","Handmade collage valentine on an iridescent paper background decorated with robins and heart cut-outs. Opens vertically to reveal a valentine message.","2020","Paper, wallpaper, paper doily","5.5\" x 5\"","collage (technique); mixed media;  greeting cards; ","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-007"];

let cwolfe_aw_008 = ["Abstract Floral Card","Wolfe, Cynthia A.","Digitially drawn and altered abstract florals, printed and adhered to a sturdy, brown paper background with cut scalloped edges.","circa 2017","Paper, digital image","7.75\" x 5.5\"","collage (technique); mixed media;  greeting cards; digital images ","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-008"];

let cwolfe_aw_009 = ["Collaged Postcard 2011","Wolfe, Cynthia A.", "Handmade postcard on thick watercolor paper. Decorated with cutouts from art and fashion books and magazines.","2011","Paper, magazine cutouts","6.75\" x 5\"","collage (technique); mixed media; greeting cards; postcards","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-009"];

let cwolfe_aw_010 = ["Digital Collage 2012","Wolfe, Cynthia A.","Digitally created and altered collage, printed on photo paper and cut with a decorative edge.","2012","Paper","4.5\" x 6.25\"","collage (technique); mixed media;  greeting cards; digital images ","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-010"];

let cwolfe_aw_011 = ["Mailart 2018","Wolfe, Cynthia A.","Altered postcard originally dating from 1930. Collaged with an image of a jungle cat, floral designs and an airplane pattern.","2018","Paper, paint", "3.25\" x 5.5\"","collage (technique); mixed media; greeting cards; postcards","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-011"];

let cwolfe_aw_012 = ["Mixed Media Collage","Wolfe, Cynthia A.","Mixed media collage on a waterpaper. Composed of hand painted elements, found objects, and magazine cutouts.","circa 2015","Watercolor paper, paper, magazine, watercolor paint, metal screen, stone","4\" x 11\"","collage (technique); mixed media; found objects","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-012"];

let cwolfe_aw_013 = ["At the Table","Wolfe, Cynthia A.","Abstract mixed media collage.","2020","Paper, graphite, gold leaf, paint","7.25\" x 5.25\"","collage (technique); mixed media; abstract (general art genre)","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-013"];

let cwolfe_aw_014 = ["Abstract Collage Postcard","Wolfe, Cynthia A.","Hand painted earthtone shapes, cut out and collaged onto a postcard dating from 1918.","2020","Paper, ink, graphite, paint","3.25\" x 5.5\"","collage (technique); mixed media; postcards; abstract (general art genre)","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-014"];

let cwolfe_aw_015 = ["Birthday Sculpture","Wolfe, Cynthia A.","3D figural wood sculpture for a 25th birthday celebration. The sculpture is meant to be hung and is reversible, revealing a unique image on both sides. The sculpture is composed of a wood base decorated with marbled paper, magazine cut outs and found metal objects. Eight bone beads (one is missing) make up the \"limbs\" of the figure.","2013","Wood, metal, bone, paper","11.5\" x 3.5\" x 1\"","collage (technique); mixed media; birthday cards; found object sculpture","English","Image","JPEG","All rights reserved. Images may not be used without permission of the artist.","cwolfe-aw-015"];

//create an array to hold works' arrays
let works = [cwolfe_aw_001,cwolfe_aw_002,cwolfe_aw_003,cwolfe_aw_004,cwolfe_aw_005,cwolfe_aw_006,cwolfe_aw_007,cwolfe_aw_008,cwolfe_aw_009,cwolfe_aw_010,cwolfe_aw_011,cwolfe_aw_012,cwolfe_aw_013,cwolfe_aw_014,cwolfe_aw_015];

//table variable
let table = document.querySelector("table");

//button variables
rButton = document.getElementById("rbutton");
lButton = document.getElementById("lbutton");

//declare index
index = 0;

//create & populate table
function popTable(table, metaArray, itemArray){
    for (i in metaArray){
        console.log('metaArray')
        console.log(metaArray)
        console.log(table)
        let row = table.insertRow();
        
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.setAttribute("class","bold")
        cell2.setAttribute("class","data-entry")
        cell1.innerHTML = metaArray[i];
        cell2.innerHTML = itemArray[i];
    }
}

popTable(table, metaCat, cwolfe_aw_001);


//plusButton function
function plusButton(index){
    try{
        if (index < (works.length + 1)){
            index ++;
            newArray = works[index];
            document.getElementById("img").src = "cwolfe_images/cwolfe-aw-" + (index + 1) + ".jpg";
            theTable = document.getElementsByClassName('data-entry');
            i=0;
            while (i < newArray.length){
                theTable[i].innerHTML = newArray[i];
                i++
            }
        }
    }
    catch{
        newArray = works[0];
        document.getElementById("img").src = "cwolfe_images/cwolfe-aw-1.jpg";
        theTable = document.getElementsByClassName('data-entry');
        i=0;
        while (i < newArray.length){
            theTable[i].innerHTML = newArray[i];
            i++
        }
        index = 1;
    }
    return index;
}
function minusButton(index){
    try{
        if (index > 0){
            index = index - 1;
            newArray = works[index];
            document.getElementById("img").src = "cwolfe_images/cwolfe-aw-" + (index + 1) + ".jpg";
            theTable = document.getElementsByClassName('data-entry');
            i = 0;
            while (i < newArray.length){
                theTable[i].innerHTML = newArray[i];
                i++
            }
        }
    }
    catch{
        newArray = works[works.length];
        document.getElementById("img").src = "cwolfe_images/cwolfe-aw-15.jpg";
        theTable = document.getElementsByClassName('data-entry');
        i=0;
        while (i < newArray.length){
            theTable[i].innerHTML = newArray[i];
            i++;
        }
        index = 14;
    }
    return index;
}


rButton.addEventListener("click", function(){
    index = plusButton(index)
});
lButton.addEventListener("click", () =>{
    index = minusButton(index)
});