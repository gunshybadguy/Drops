function Drop(){
  
   this.x = random(600);
   this.y = random(300);


  
  this.show = function(){
    
    // xy = last start position
    // mx = new end postion

    var mx = random(this.x+2,this.x+1);
    var my = random(this.y+4,this.y+3)
    
    stroke(50,222,222);
    line(this.x, this.y, mx,my);
    this.x = mx;
    this.y = my;
  } // show
  
  //dd

  


} // drop
  
