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
  
  //dd

  


} // drop


