class Dustbin
{
    constructor(x,y,width,height)
    {
        var options ={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:2
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}