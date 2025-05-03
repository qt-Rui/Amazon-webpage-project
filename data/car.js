class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

        console.log(`${this.#brand}, ${this.#model}, ${this.speed}: The trunk is open? ${trunkStatus}`);
    }

    openTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }

    go() {
        if (this.speed > 200) {
            this.speed = 200;
        }

        if (!this.isTrunkOpen) {
            this.speed += 5;
        }
    }

    brake() {
        this.speed -= 5;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }
    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = 0;
        this.isTrunkOpen = false;
    }
}

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla',
});

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3',
});

console.log(car1);
console.log(car2);

car1.openTrunk();
car1.displayInfo();
car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();
car2.displayInfo();
car2.openTrunk();
car2.go();
car2.openTrunk();
car2.brake();
car2.brake();
car2.displayInfo();
car2.closeTrunk();
car2.displayInfo();


class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        this.speed += this.acceleration;

        if (this.speed > 300) {
            this.speed = 300;
        }
    }

    openTrunk() {
        console.log('No trunk');
    }

    closeTrunk() {
        console.log('No trunk');
    }
}


const raceCar = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
});

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();