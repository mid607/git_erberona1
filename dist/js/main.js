//get slider items

var slideritems = Array.from(document.querySelectorAll('.slider-container img'));

console.table(slideritems);

//get number of slide
var slidecount = slideritems.length;
//set current slide
var currentslide = 1;

//slide number elment

var slidenumber = document.getElementById('slider-number');

//next&prevbutton
var nextbutton = document.getElementById('next');

var prevbutton = document.getElementById('prev');

nextbutton.onclick = nextslide;
prevbutton.onclick = prevslide;

function nextslide() {

    console.log('next');


}

function prevslide() {
    console.log('previous');

}
console.log("mido");