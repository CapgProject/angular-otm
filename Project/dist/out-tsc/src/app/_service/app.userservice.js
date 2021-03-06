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
var UserService = /** @class */ (function () {
    function UserService(myhttp) {
        this.myhttp = myhttp;
    }
    UserService.prototype.updateUser = function (user) {
        var form = new FormData();
        form.append("userId", user.userId);
        form.append("userName", user.userName);
        form.append("userPassword", user.userPassword);
        return this.myhttp.put("http://localhost:9088/updateuser", form);
    };
    UserService.prototype.assignTest = function (assign) {
        return this.myhttp.post("http://localhost:9088/assign", assign);
    };
    UserService.prototype.listUsers = function () {
        return this.myhttp.get("http://localhost:9088/showusers");
    };
    UserService.prototype.getQuestions = function () {
        return this.myhttp.get("http://localhost:9088/givetest?userid=2");
    };
    UserService.prototype.submitTest = function (questions) {
        return this.myhttp.put("http://localhost:9088/givetest", questions);
    };
    UserService.prototype.getResult = function () {
        return this.myhttp.get("http://localhost:9088/getresult?userid=2");
    };
    UserService.prototype.resultPdf = function () {
        var headers = new http_1.HttpHeaders();
        headers = headers.append('Accept', 'application/pdf; charset=utf-8');
        return this.myhttp.get('http://localhost:9088/resultpdf?userid=2', {
            headers: headers,
            observe: 'response',
            responseType: 'text'
        });
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=app.userservice.js.map