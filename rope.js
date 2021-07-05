class Rope
  {
      constructor (body1, body2, pointA, pointB){
          this.pointA=pointA
          this.pointB=pointB
      
      var options = {
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.pointA, y:this.pointB}
      }

      this.rope = Matter.Constraint.create(options);
      World.add(world,this.rope);
    }

     display(){
      var point1 = this.rope.bodyA.position;
      var point2 = this.rope.bodyB.position;

      strokeWeight(2);

      line(point1.x, point1.y, point2.x, point2.y);
    }
  }
