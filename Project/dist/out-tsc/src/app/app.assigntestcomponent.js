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
var AssignTestComponent = /** @class */ (function () {
    function AssignTestComponent(service) {
        this.service = service;
        this.assign = { userId: null, testId: null };
        console.log("In Constructor");
    }
    AssignTestComponent.prototype.assignTest = function () {
        var _this = this;
        if (this.assign.userId != null && this.assign.testId != null) {
            this.service.assignTest(this.assign).subscribe(function (data) { _this.response = data; console.log(data); });
            alert(this.response);
            if (this.response == null) {
                alert("Either the Test or the User does not exist");
            }
            else {
                alert("Test Assigned Successfully!");
            }
        }
    };
    AssignTestComponent = __decorate([
        core_1.Component({
            selector: 'assign',
            templateUrl: 'app.assign.html'
        }),
        __metadata("design:paramtypes", [app_userservice_1.UserService])
    ], AssignTestComponent);
    return AssignTestComponent;
}());
exports.AssignTestComponent = AssignTestComponent;
//# sourceMappingURL=app.assigntestcomponent.js.map