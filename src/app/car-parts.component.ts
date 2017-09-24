import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CarPartsService } from './car-parts.service';

@Component({
    selector: 'car-parts',
    templateUrl: './car-parts.component.html',
    styleUrls: ['./car-parts.component.css'],
    providers: [CarPart]
})
export class CarPartsComponent {
    imageBasePath: string;
    
    carParts: CarPart[];
    
    constructor(private carPartsService: CarPartsService) {}
    
    ngOnInit() {
        this.carParts = this.carPartsService.getCarParts();
        this.imageBasePath = '/assets/img/';
    }
    
    totalCarParts() {
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0)
    }
    
    upQuantity(carPart) {
        if(carPart.inStock > carPart.quantity) { 
            carPart.quantity++; 
        }
    }
    
    downQuantity(carPart) {
        if(carPart.quantity != 0) {
            carPart.quantity--;
        }
    }
    
    validateQuantity(carPart) {
        if(carPart.quantity < 0) {
            carPart.quantity = 0;
        }
        
        if(carPart.quantity > carPart.inStock) {
            carPart.quantity = carPart.inStock;
        }
    }
}