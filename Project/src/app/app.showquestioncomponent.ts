import { Component } from "@angular/core";
import { QuestionService } from "./_service/app.questionservice";
import { Question } from "./_model/app.question";

@Component({
    selector:'showquestion',
    templateUrl:'app.showquestion.html'
})
export class ShowQuestion{
    questions:Question[];
    constructor(private service:QuestionService){}

    showAllQuestions(id:number){
        this.service.showAllQuestions(id).subscribe((data:Question[])=>{this.questions=data}, error=>{alert(error.error)});
    }
}