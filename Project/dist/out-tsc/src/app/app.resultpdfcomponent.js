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
var fileSaver = require("file-saver");
var app_userservice_1 = require("./_service/app.userservice");
var ResultPdfComponent = /** @class */ (function () {
    function ResultPdfComponent(service) {
        this.service = service;
        console.log("In Constructor");
    }
    ResultPdfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.resultPdf().subscribe(function (response) {
            var filename = response.headers.get('filename');
            _this.saveFile(response.body, filename);
        });
    };
    ResultPdfComponent.prototype.saveFile = function (data, filename) {
        var blob = new Blob([data], { type: 'text/csv; charset=utf-8' });
        fileSaver.saveAs(blob, filename);
    };
    ResultPdfComponent = __decorate([
        core_1.Component({
            selector: 'example-app',
            template: "\n  \n  "
        }),
        __metadata("design:paramtypes", [app_userservice_1.UserService])
    ], ResultPdfComponent);
    return ResultPdfComponent;
}());
exports.ResultPdfComponent = ResultPdfComponent;
//# sourceMappingURL=app.resultpdfcomponent.js.map