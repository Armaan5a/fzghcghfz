class ground {
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        
        this.g=Bodies.rectangle(x,y,width,height,option);
        World.add(myworld,this.g);
        
        this.width=width;
        this.height=height;
}

display()
    {
        var pos=this.g.position;
       
       fill("red")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);    
       
    }

}