class Bob{
    constructor(x,y,w,h){
    
    this.body = Bodies.rectangle(x,y, w, h)
    this.width = w
    this.height = h
    World.add(world, this.body)
    this.image = loadImage("polygon.png")
    }
    display(){
        console.log("hi")
        var position = this.body.position;
        console.log(this.image)
      
        imageMode(CENTER)
        image(this.image,position.x, position.y,this.width, this.height)
    
    }
    
    }