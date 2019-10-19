"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_productservice_1 = require("./_service/app.productservice");
var ShowComponent = /** @class */ (function () {
    function ShowComponent(service) {
        this.service = service;
        this.products = [];
        console.log("In Constructor .......");
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllData().subscribe(function (data) { return _this.products = data; });
    };
    ShowComponent.prototype.deleteProduct = function (prod) {
        this.service.deleteProduct(prod.prodId).subscribe(function (data) { return console.log(data); });
    };
    ShowComponent = __decorate([
        core_1.Component({
            selector: 'show',
            templateUrl: 'app.show.html'
        }),
        __metadata("design:paramtypes", [app_productservice_1.ProductService])
    ], ShowComponent);
    return ShowComponent;
}());
exports.ShowComponent = ShowComponent;
//# sourceMappingURL=app.showcomponent.js.map