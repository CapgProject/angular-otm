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
var app_userservice_1 = require("./_service/app.userservice");
var fileSaver = require("file-saver");
var GetResultComponent = /** @class */ (function () {
    function GetResultComponent(service) {
        this.service = service;
        console.log("In Constructor");
    }
    GetResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getResult().subscribe(function (data) { return _this.header = data; });
    };
    GetResultComponent.prototype.resultPdf = function () {
        var _this = this;
        this.service.resultPdf().subscribe(function (response) {
            var filename = response.headers.get('filename');
            _this.saveFile(response.body);
        });
    };
    GetResultComponent.prototype.saveFile = function (data) {
        var filename = 'Result.pdf';
        var blob = new Blob([data], { type: 'application/pdf' });
        console.log(blob);
        fileSaver.saveAs(blob, filename);
    };
    GetResultComponent = __decorate([
        core_1.Component({
            selector: 'listuser',
            templateUrl: 'app.getresult.html'
        }),
        __metadata("design:paramtypes", [app_userservice_1.UserService])
    ], GetResultComponent);
    return GetResultComponent;
}());
exports.GetResultComponent = GetResultComponent;
//# sourceMappingURL=app.getresultcomponent.js.map