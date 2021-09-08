class Ground {
    constructor(x, y, width, height) {
        var groundOptions = {isStatic:true}
        this.ground = Bodies.rectangle(x, y, width, height ,groundOptions);
        this.width = width;
        this.height = height;
        World.add(world, this.ground)
    }
    display() {
        var pos = this.ground.position
        push()
        fill("brown")
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height)
        pop()
    }


}