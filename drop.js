function Drop(){
  
  // random starting position
  this.x = random(600);
  this.y = random(300);


  this.show = function(){
    
    // end xy is close to this one
    var mx = random(this.x,this.x);
    var my = random(this.y,this.y+14)
    
    stroke(50,random(100,222),222);
    strokeWeight(2);
    line(this.x, this.y, mx,my);
    
    this.x = mx;
    this.y = my+14;
} // show
  
  //dd

  


} // drop


// made a change
