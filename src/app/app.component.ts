import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
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
    let sum = 0;
    for(let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
  }
}
