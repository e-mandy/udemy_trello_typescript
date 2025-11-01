interface Rocket {
    reactors: number,
    vMax: number,
    takeOff: (action: string) => void
}

interface Rocket {
    price: number,
    carburant: number
}

// En gros on peut rajouter des propriétés à une interface


class RocketFactory implements Rocket {
    reactors: number;
    vMax: number;
    price: number;
    carburant: number

    constructor(reactors: number, vMax: number, price: number, carburant: number){
        this.reactors = reactors;
        this.price = price;
        this.carburant = carburant;
        this.vMax = vMax
    }

    takeOff(action: string){
        console.log(action)
    }
}

const Falcon1 = new RocketFactory(12, 900, 2000000000, 9000)

console.log(Falcon1)

