
class Paper{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}

    
