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
    "inStock": 5
  }, {
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks made from kryptonite",
    "inStock": 4
  }, {
    "id": 2,
    "name": "Padded Seats",
    "description": "Super soft seats for a smooth ride",
    "inStock": 0
  }];
}
