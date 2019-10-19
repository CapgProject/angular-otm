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
var http_1 = require("@angular/common/http");
var ProductService = /** @class */ (function () {
    function ProductService(myhttp) {
        this.myhttp = myhttp;
    }
    ProductService.prototype.getAllData = function () {
        return this.myhttp.get("http://localhost:9088/product/getall");
    };
    ProductService.prototype.addProduct = function (prod) {
        var form = new FormData();
        form.append("prodId", prod.prodId);
        form.append("prodName", prod.prodName);
        form.append("prodCost", prod.prodCost);
        form.append("prodDescription", prod.prodDescription);
        return this.myhttp.post("http://localhost:9088/product/add", form);
    };
    ProductService.prototype.deleteProduct = function (prodid) {
        return this.myhttp.delete("http://localhost:9088/product/delete?prodid=" + prodid);
    };
    ProductService.prototype.searchProduct = function (prodid) {
        return this.myhttp.delete("http://localhost:9088/product/search?prodid=" + prodid);
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=app.productservice.js.map