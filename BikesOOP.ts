class Bike {
    price : number;
    max_speed : string;
    miles : number;

    constructor (price: number, max_speed: string){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
        console.log("You have instanciated a new Bike");
    }

    displayInfo(){
        console.log("Price: " + this.price + ", Max Speed: " + this.max_speed + ", Total Miles: " + this.miles)
    }

    ride(){
        console.log("Riding");
        this.miles += 10;
        return this;
    }

    reverse(){
        console.log("Reversing");
        if (this.miles <= 5) {
            this.miles = 0;
            return this;
        }
        else{
            this.miles -= 5;
            return this;
        }
    }
}

var bike1 = new Bike(200, "20mph");
var bike2 = new Bike(400, "30mph");
var bike3 = new Bike(600, "40mph");


console.log("Instance Bike 1");
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse();
bike1.displayInfo();

console.log("Instance Bike 2");
bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse();
bike2.displayInfo();

console.log("Instance Bike 3");
bike3.reverse()
bike3.reverse()
bike3.reverse();
bike3.displayInfo();