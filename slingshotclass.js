class slingShotClass {

    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(myworld, this.sling);
        //console.log(this.sling);

    }
    fly() {
        this.sling.bodyA = null
    }

    display() {
        if (this.sling.bodyA !== null) {


            strokeWeight(5);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
        }

    }


}



