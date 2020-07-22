class Bob
{
    constructor(x,y){
        var options={
            restitution:0.6,
            density:1.0
        }
    
    this.radius=20;
    this.body=Bodies.circle(this.x,this.y,20,options);
    }




display()
{
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y);
}

}