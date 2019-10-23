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
var QuestionService = /** @class */ (function () {
    function QuestionService(myhttp) {
        this.myhttp = myhttp;
    }
    QuestionService.prototype.addQuestionExcel = function (id, file) {
        var form = new FormData();
        form.append("testid", id);
        form.append("exfile", file);
        return this.myhttp.post("http://localhost:9088/addquestionsubmit", { "exfile": form });
    };
    QuestionService.prototype.addQuestionForm = function (id, question) {
        var form = new FormData();
        form.append("questionTitle", question.questionTitle);
        form.append("questionOptions", question.questionOptions);
        form.append("questionAnswer", question.questionAnswer);
        form.append("questionMarks", question.questionMarks);
        return this.myhttp.post("http://localhost:9088/addsinglequestion?testid=" + id, form);
    };
    QuestionService.prototype.deleteQuestion = function (id) {
        return this.myhttp.delete("http://localhost:9088/removequestionsubmit?questionid=" + id);
    };
    QuestionService.prototype.showAllQuestions = function (id) {
        return this.myhttp.get("http://localhost:9088/listquestionsubmit?testId=" + id);
    };
    QuestionService.prototype.searchQuestion = function (id) {
        return this.myhttp.get("http://localhost:9088/searchquestion?id=" + id);
    };
    QuestionService.prototype.updateQuestion = function (question) {
        var form = new FormData();
        form.append("questionTitle", question.questionTitle);
        form.append("questionOptions", question.questionOptions);
        form.append("questionMarks", question.questionMarks);
        form.append("questionAnswer", question.questionAnswer);
        return this.myhttp.put("http://localhost:9088/updatequestionsubmit", form);
    };
    QuestionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=app.questionservice.js.map