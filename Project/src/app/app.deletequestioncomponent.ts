import { Component, OnInit } from "@angular/core";
import { Question } from "./_model/app.question";
import { QuestionService } from "./_service/app.questionservice";

@Component({
    selector:'deletequestion',
    templateUrl:'app.deletequestion.html'
})
export class DeleteQuestion implements OnInit{

    constructor(private service:QuestionService){}

    ngOnInit(){}

    deleteQuestion(id:number){
        this.service.deleteQuestion(id).subscribe((data)=>console.log(data));
    }
}