import { CarPart } from './car-part'; 

export const CARPARTS: CarPart[] = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These are the very best tires",
        "inStock": 5,
        "price": 4.99,
        "image": 'daytona_thunderdome.jpg',
        "featured": true,
        "quantity": 0
    }, {
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks made from kryptonite",
        "inStock": 4,
        "price": 9.99,
        "image": 'new_york_city_skyline.jpg',
        "featured": false,
        "quantity": 0
    }, {
        "id": 2,
        "name": "Padded Seats",
        "description": "Super soft seats for a smooth ride",
        "inStock": 0,
        "price": 24.99,
        "image": 'san_francisco_ruins.jpg',
        "featured": true,
        "quantity": 0
    }];