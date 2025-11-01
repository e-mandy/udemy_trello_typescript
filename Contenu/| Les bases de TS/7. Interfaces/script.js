"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// En gros on peut rajouter des propriétés à une interface
class RocketFactory {
    reactors;
    vMax;
    price;
    carburant;
    constructor(reactors, vMax, price, carburant) {
        this.reactors = reactors;
        this.price = price;
        this.carburant = carburant;
        this.vMax = vMax;
    }
    takeOff(action) {
        console.log(action);
    }
}
const Falcon1 = new RocketFactory(12, 900, 2000000000, 9000);
console.log(Falcon1);
//# sourceMappingURL=script.js.map