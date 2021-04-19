class Polygon{
    constructor(x,y){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':0.8,
            'density':0.8
        }
        this.polygon = Bodies.rectangle(x,y,width,height,options);
        this.width=40;
        this.heigth=40;
        World.add(world,this.polygon);
        this.image=loadImage("polygon.png");
    }

    display(){
        var pos = this.polygon.position;
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,50,50,30,30);
    }
}