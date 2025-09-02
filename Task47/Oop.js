class Bike {
    name
    type
    engineCC
    hasABS
    mileage
    topSpeed

    constructor(name, type, engineCC, hasABS, mileage, topSpeed) {
        this.name = name
        this.type = type
        this.engineCC = engineCC
        this.hasABS = hasABS
        this.mileage = mileage
        this.topSpeed = topSpeed
    }

    getInfo(){
        console.log("Bike name: " + this.name)
        console.log("Type: " + this.type)
        console.log("Engine: " + this.engineCC + "cc")
        console.log(`ABS: ${this.hasABS ? "Available" : "Not Available"}`)
        console.log("Mileage: " + this.mileage + " km/l")
        console.log("TopSpeed: " + this.topSpeed + " km/h")
    }

    start(){
        console.log(this.name + " bike is starting...")
    }

    stop(){
        console.log(this.name + " bike has stopped.")
    }

    wheelie() {
        console.log(this.name + " is doing a wheelie!")
    }
}

let bike1 = new Bike("Hornet 2.0", "Sports", 185, true, 42, 140)
let bike2 = new Bike("Royal Enfield Classic 350", "Cruiser", 350, true, 35, 120)

bike1.getInfo()
bike1.start()
bike1.wheelie()
bike1.stop()

console.log(" ")

bike2.getInfo()
bike2.start()
bike2.stop()