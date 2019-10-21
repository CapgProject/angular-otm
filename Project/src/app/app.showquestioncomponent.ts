import { Component, OnInit } from "@angular/core";
import { QuestionService } from "./_service/app.questionservice";
import { Question } from "./_model/app.question";

@Component({
    selector:'showquestion',
    templateUrl:'app.showquestion.html'
})
export class ShowQuestion implements OnInit{
    questions:Question[];
    constructor(private service:QuestionService){}
 
    ngOnInit(){}

    showAllQuestions(id:number){
        this.service.showAllQuestions(id).subscribe((data:Question[])=>this.questions=data);
        //console.log(this.questions.questionId); 
    }
}