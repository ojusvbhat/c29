class link{
constructor(bodyA,bodyB){
var lastLink = bodyA.body.bodies.length-2;
this.length = constraint.create({
 bodyA:bodyA.body.bodies[lastLink],
 pointA:{x:0,y:0},
 bodyB:bodyB,
 pointB:{x:0,y:0},
 length :-10,
 stiffness:0.1,
});
World.add(engine.world,this.length);
}
}