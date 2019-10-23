import { Component } from "@angular/core";
import { Question } from "./_model/app.question";
import { QuestionService } from "./_service/app.questionservice";
import { Router } from "@angular/router";

@Component({
    selector:'deletequestion',
    templateUrl:'app.deletequestion.html'
})
export class DeleteQuestion {

    questionId:number;
    constructor(private service:QuestionService, private router:Router){}

    public popoverTitle:string="Delete Confirmation";
    public popoverMessage:string="Do you really want to delete the question with question Id ";

    error_id:string=null;
    validateQuestionId():boolean{
        if(this.questionId != null){
            this.error_id = null;
            return true;
        }
        else{
            this.error_id = "Question Id field cannot be empty!";
            return false;
        }
    }

    deleteQuestion(){
        if(this.validateQuestionId()){
            this.service.deleteQuestion(this.questionId).subscribe((success:string)=>{alert(success);this.router.navigate(['/admin']);}, error=>{alert(error.error);});
        }
    }
}