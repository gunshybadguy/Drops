// create array for drops
var drops = []; 
var blops = [];
var rainX = 0;
var rainH = 300;
var blopr;


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

    // call the circle when drop hits water. 
    var blopp = new Blop(); 
    blops.push(blopp);


    } // if
} // for

// increase the water
fill(50,222,222); 
noStroke();
rect(0,rainH,600,rainX);


for (var i =0; i<blops.length; i++){
    blops[i].show();
    }


} // draw 

function mousePressed(){
  console.log("pressed"); 
  var dropp = new Drop();
  drops.push(dropp); 


} // mousepressed


