// vars

var drops = []; 



function setup() {
  createCanvas(600,300);
 




} // setup







function draw() {
  background(51);


  // make a drop and add to array 
for (var i =0; i<5; i++){
  var drop = new Drop();
  drops.push(drop); 
}
 
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

} // draw 


