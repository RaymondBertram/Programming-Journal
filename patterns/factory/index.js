// Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.


class Logistics {
    constructor (companyName) {
        this.companyName = companyName;
    }    

    planDelivery() {
        // Implementation for planning delivery
    }

    createTransport() {
        // Implementation for creating transport
        console.log(`Creating transport for ${this.companyName}`);
    }

    devliver() {

    }
}

class RoadLogistics extends Logistics {
    createTransport() {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport() {
        return new Ship();
    }
}

class Truck {
    constructor() {
        console.log('Truck is created');
    }
}

const roadLogistics = new RoadLogistics('Road Logistics');
