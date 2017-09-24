"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var car_part_1 = require("./car-part");
var CarPartsComponent = (function () {
    function CarPartsComponent(carPartsService) {
        this.carPartsService = carPartsService;
    }
    CarPartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carPartsService.getCarParts().subscribe(function (carParts) { return _this.carParts = carParts; });
        this.imageBasePath = '/assets/img/';
    };
    CarPartsComponent.prototype.totalCarParts = function () {
        if (Array.isArray(this.carParts)) {
            return;
        }
    };
    CarPartsComponent.prototype.upQuantity = function (carPart) {
        if (carPart.inStock > carPart.quantity) {
            carPart.quantity++;
        }
    };
    CarPartsComponent.prototype.downQuantity = function (carPart) {
        if (carPart.quantity != 0) {
            carPart.quantity--;
        }
    };
    CarPartsComponent.prototype.validateQuantity = function (carPart) {
        if (carPart.quantity < 0) {
            carPart.quantity = 0;
        }
        if (carPart.quantity > carPart.inStock) {
            carPart.quantity = carPart.inStock;
        }
    };
    return CarPartsComponent;
}());
CarPartsComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        templateUrl: './car-parts.component.html',
        styleUrls: ['./car-parts.component.css'],
        providers: [car_part_1.CarPart]
    })
], CarPartsComponent);
exports.CarPartsComponent = CarPartsComponent;
