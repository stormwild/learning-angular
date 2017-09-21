import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
    selector: 'car-parts',
    templateUrl: './car-parts.component.html',
    styleUrls: ['./car-parts.component.css'],
    providers: [CarPart]
})
export class CarPartsComponent {
    imageBasePath: string;
    
    carParts: CarPart[];
    
    ngOnInit() {
        this.carParts = CARPARTS;
        this.imageBasePath = '/assets/img/';
    }
    
    totalCarParts() {
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0)
    }
}