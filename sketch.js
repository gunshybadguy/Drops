// create array for drops
var drops = []; 


function setup() {
  createCanvas(600,300);
  frameRate(10);

} // setup


function draw() {
  background(51);

// make rain!
//var drop = new Drop();
//drops.push(drop); 


// show each drop
for (var i =0; i<drops.length; i++){
    drops[i].show();
}


// kill the drop if can't see it
for (var i =0; i<drops.length; i++){
  if (drops[i].x >600){
    if (drops[i].y >300){
    drops.splice(i,1);
    }
  }

}


// fill up with water 
for (var i =0; i<drops.length; i++){

  if (drops[i].y >290){
  fill(50,222,222); 
  noStroke();
  rect(0,295,600,5);
  } // if
} // for 

} // draw 

function mousePressed(){
  console.log("pressed"); 
  var dropp = new Drop();
  drops.push(dropp); 
}

