//from Negrino, T. (2007). Javascript & Ajax, 6th Edition: Peachpit Press.
//similar to body onload but it is pure javascript event handling using window.onload
window.onload = rotate;

var cake = initMenu();
var c = 0;

function rotate() {
	c++;
	if (c == cake.length) {
	    c = 0;
	}
  document.getElementById("adBanner").src = "../pic/" + cake[c].imagefile;
  document.getElementById("adBanner").alt = "../pic/" + cake[c].description;
  document.getElementById("cakename").innerHTML = cake[c].description;
  document.getElementById("tang").innerHTML = cake[c].nutrition[0].percentage;
  document.getElementById("dan").innerHTML = cake[c].nutrition[1].percentage;
  document.getElementById("zhi").innerHTML = cake[c].nutrition[2].percentage;
  document.getElementById("gu").innerHTML = cake[c].nutrition[3].percentage;
  document.getElementById("total").innerHTML = cake[c].nutrition[0].percentage + cake[c].nutrition[1].percentage + cake[c].nutrition[2].percentage + cake[c].nutrition[3].percentage;
  //using recursive, can be done using setTimeout as well
    setTimeout("rotate()", 3 * 1000);
}


function initMenu() {
  return [
    {"description":"Buccellator",
      "nutrition":[
        {"type":"Carbohydrate", "percentage":20},
        {"type":"Protein", "percentage":7},
        {"type":"Fat", "percentage":25},
        {"type":"Cholesterol", "percentage":0},
      ],
      "imagefile":"Buccellator.jpg",
      "price":128
    },
    {"description":"Strawberry",
      "nutrition":[
        {"type":"Carbohydrate", "percentage":15},
        {"type":"Protein", "percentage":10},
        {"type":"Fat", "percentage":30},
        {"type":"Cholesterol", "percentage":20},
      ],
      "imagefile":"Strawberry.jpg",
      "price":233
    },
    {"description":"French Cruller",
      "nutrition":[
        {"type":"Carbohydrate", "percentage":40},
        {"type":"Protein", "percentage":5},
        {"type":"Fat", "percentage":25},
        {"type":"Cholesterol", "percentage":10},
      ],
      "imagefile":"FrenchCruller.jpg",
      "price":25
    },
    {"description":"Pound Layer",
      "nutrition":[
        {"type":"Carbohydrate", "percentage":25},
        {"type":"Protein", "percentage":10},
        {"type":"Fat", "percentage":30},
        {"type":"Cholesterol", "percentage":5},
      ],
      "imagefile":"PoundLayer.jpg",
      "price":215
    },
  ]
  }
