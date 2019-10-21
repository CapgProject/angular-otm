import { Component } from "@angular/core";
import { Question } from "./_model/app.question";
import { QuestionService } from "./_service/app.questionservice";

@Component({
    selector:'updatequestion',
    templateUrl:'app.updatequestion.html'
})
export class UpdateQuestion {

    questionid:number;
    question:Question;
    testid:number;

    constructor(private service:QuestionService){}

    searchQuestion(){
        this.service.searchQuestion(this.questionid).subscribe((data:Question)=>this.question=data);
    }

    updateQuestion(){
        this.service.updateQuestion(this.question).subscribe((data)=>console.log(data));
    }
}