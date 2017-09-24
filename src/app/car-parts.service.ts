import { CarPart } from './car-part';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarPartsService {
    constructor(private http: Http) {}
    
    getCarParts() {
        return this.http.get('assets/data/car-parts.json').map(response => <CarPart[]>response.json().data);
    }
}