import { Component } from '@angular/core';

@Component({
    selector: 'car-parts',
    templateUrl: './car-parts.component.html',
})
export class CarPartsComponent {
    carParts = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These are the very best tires",
        "inStock": 5,
        "price": 4.99
    }, {
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks made from kryptonite",
        "inStock": 4,
        "price": 9.99
    }, {
        "id": 2,
        "name": "Padded Seats",
        "description": "Super soft seats for a smooth ride",
        "inStock": 0,
        "price": 24.99
    }];

    totalCarParts() {
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0)
    }
}