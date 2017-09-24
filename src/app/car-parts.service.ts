import { CARPARTS } from './mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class CarPartsService {
    getCarParts() {
        return CARPARTS;
    }
}