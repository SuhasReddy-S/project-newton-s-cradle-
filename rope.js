class Rope {
    constructor(bodyA,pointB) {

        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : bodyA,
            pointB : pointB,
           pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options)
        World.add(world,this.rope);
      }   
    
    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}