import { Component, OnInit } from "@angular/core";
import { Question } from "./_model/app.question";
import { QuestionService } from "./_service/app.questionservice";
import { Router } from "@angular/router";

@Component({
    selector:'deletequestion',
    templateUrl:'app.deletequestion.html'
})
export class DeleteQuestion implements OnInit{

    constructor(private service:QuestionService, private router:Router){}

    ngOnInit(){}

    deleteQuestion(id:number){
        this.service.deleteQuestion(id).subscribe((success:string)=>{alert(success);this.router.navigate(['/admin']);}, error=>{alert(error.error);});
    }
}