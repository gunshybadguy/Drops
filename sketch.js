// create array for drops
var drops = []; 
var rainX = 0;
var rainH = 300;



function setup() {
  createCanvas(600,300);
  frameRate(50);

} // setup


function draw() {
  background(51);



// show each drop
for (var i =0; i<drops.length; i++){
    drops[i].show();
}


// kill the drop if can't see it
for (var i =0; i<drops.length; i++){
  
    if (drops[i].y >rainH){
    drops.splice(i,1);
    console.log('dead drop');

    // increase the water height per drop
    rainH = rainH-5;
    rainX = rainX+5;


    } // if
} // for

// increase the water
fill(50,222,222); 
noStroke();
rect(0,rainH,600,rainX);



} // draw 

function mousePressed(){
  console.log("pressed"); 
  var dropp = new Drop();
  drops.push(dropp); 

} // mousepressed


