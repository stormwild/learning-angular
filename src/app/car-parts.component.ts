import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
    selector: 'car-parts',
    templateUrl: './car-parts.component.html',
    providers: [CarPart]
})
export class CarPartsComponent {
    carParts: CarPart[];
    
    ngOnInit() {
        this.carParts = CARPARTS;
    }
    
    totalCarParts() {
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0)
    }
}