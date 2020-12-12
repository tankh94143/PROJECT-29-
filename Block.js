class Block{
constructor(x,y,w,h){

this.body =  Bodies.rectangle(x,y, w, h)
this.width = w
this.height = h
World.add(world, this.body)
}
display(){
    var position = this.body.position;
    push()
    translate(position.x, position.y)
    angleMode(RADIANS)
    rotate(this.body.angle)
    rectMode(CENTER)
    rect(0,0,this.width, this.height)
    pop()
}

}



