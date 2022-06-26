class Ground {
constructor(x,y,w,h){
this.w= w;
this.h= h;
let Ground_options = {
    isStatic:true
}
this.body = Bodies.rectangle(x,y,this.w,this.h,Ground_options);
World.add(world,this.body);
}

display(){
rect(this.body.position.x,this.body.position.y,this.w,this.h);
rectMode(CENTER);
fill(160);
}

}