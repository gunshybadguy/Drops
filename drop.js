function Drop(){
  
  // random starting position
  this.x = mouseX; 
  this.y = mouseY;


  this.show = function(){
    
    // end xy is close to this one
    var mx = random(this.x,this.x);
    var my = random(this.y,this.y+14)
    
    stroke(50,random(100,222),222);
    strokeWeight(10);
    line(this.x, this.y, mx,my);
    
    this.x = mx;
    this.y = my+14;
} // show
  
 
} // drop



function Blop(){

this.x = mouseX;
this.y = rainH;

this.show = function(){

  //draw the circle 
  fill(153);
  ellipse(this.x ,this.y,10,10);
  this.y +=0.5; 
  // console.log(this.y); 

} // show 


} // blops

