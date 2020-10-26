class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.offsetX=offsetX
        this.offsetY=offsetY
        this.rope = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly() {
        this.rope.bodyA=null;
    }
    display(){
        if (this.sling.bodyA) {
            var pointA = this.rope.bodyA.position;
        var pointB = this.pointB
        var AnchorX=pointB.x+this.offsetX
        var AnchorY=pointB.y+this.offsetY
        strokeWeight(4);
        line(pointA.x, pointA.y, AnchorX, AnchorY);
        }
        
    }
    
}