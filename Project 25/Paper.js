class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = width;
      this.height = height;
      this.radius = radius
      this.ballimg = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("cyan");
      image(this.ballimg, pos.x, pos.y, this.radius, this.radius);
    }
  };
