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
var UpdateAdminComponent = /** @class */ (function () {
    function UpdateAdminComponent(service) {
        this.service = service;
        this.user = { userId: "", userName: "", userPassword: "" };
        this.user_error = { idError: "", passwordError: "" };
        console.log("In Constructor");
    }
    UpdateAdminComponent.prototype.validate = function () {
        console.log(this.user);
        var numbers = new RegExp(/^[0-9]+$/);
        var password = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i);
        var name = new RegExp(/^[A-Z][A-Za-z0-9]{3,20}$/);
        var error = false;
        if (!numbers.test(this.user.userId)) {
            this.user_error.idError = "Enter Only Numbers";
            error = true;
        }
        else {
            this.user_error.idError = "";
        }
        if (!name.test(this.user.userName)) {
            this.user_error.nameError = "First Letter should be capital with 4-20 characters";
            error = true;
        }
        else {
            this.user_error.nameError = "";
        }
        if (!password.test(this.user.userPassword)) {
            this.user_error.passwordError = "Invalid Password Format";
            error = true;
        }
        else {
            this.user_error.passwordError = "";
        }
        if (!error) {
            return true;
        }
        else {
            return false;
        }
    };
    UpdateAdminComponent.prototype.updateAdmin = function () {
        if (this.validate()) {
            this.service.updateUser(this.user).subscribe(function (data) { return console.log(data); });
        }
    };
    UpdateAdminComponent = __decorate([
        core_1.Component({
            selector: 'updateadmin',
            templateUrl: 'app.updateadmin.html'
        }),
        __metadata("design:paramtypes", [app_userservice_1.UserService])
    ], UpdateAdminComponent);
    return UpdateAdminComponent;
}());
exports.UpdateAdminComponent = UpdateAdminComponent;
//# sourceMappingURL=app.updateadmincomponent.js.map