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
var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(service) {
        this.service = service;
        this.users = [];
        console.log("In Constructor");
    }
    ListUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.listUsers().subscribe(function (data) { return _this.users = data; });
        console.log(this.users);
    };
    ListUserComponent = __decorate([
        core_1.Component({
            selector: 'listuser',
            templateUrl: 'app.listuser.html'
        }),
        __metadata("design:paramtypes", [app_userservice_1.UserService])
    ], ListUserComponent);
    return ListUserComponent;
}());
exports.ListUserComponent = ListUserComponent;
//# sourceMappingURL=app.listusercomponent.js.map