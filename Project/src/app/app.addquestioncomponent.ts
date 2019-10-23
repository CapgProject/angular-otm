import { Component } from "@angular/core";
import { Question } from "./_model/app.question";
import { QuestionService } from "./_service/app.questionservice";
import { FileUploader } from "ng2-file-upload";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";

@Component({
    selector:'addquestion',
    templateUrl:'app.addquestion.html'
})
export class AddQuestion{ 
    uploader:FileUploader;
    buttonVal:boolean=false;
    question:Question={
        questionId:null,
        questionTitle:"",
        questionAnswer:null,
        questionMarks:null,
        questionOptions:[],
        test:null
    };
    testid:number;
    exfile:any;
    testId:number;

    changeButtonValue(value:boolean){
        if(value==true){
            this.buttonVal=false;
        }
        else{
            this.buttonVal=true;
        }
    }

    constructor(private service:QuestionService, private router:Router){}

    addThroughExcel(id:number,file:any){
        alert(id);
        alert(file);
        this.service.addQuestionExcel(id,file).subscribe((data)=>this.router.navigate(['/admin']));
    }

    addThroughForm(){
        if(this.validateTestId() && this.validateTitle() && this.validateOptions() && this.validateAnswer() && this.validateMarks()){
            this.service.addQuestionForm(this.testId, this.question).subscribe((success:string)=>{alert(success);this.router.navigate(['/admin']);},error=>{alert(error.error);})
        }
       
    }

    error_id:string=null;
    validateTestId():boolean{
        if(this.testId != null){
            this.error_id = null;
            return true;
        }
        else{
            this.error_id = "Test Id field cannot be empty!";
            return false;
        }
    }

    error_title:string=null;
    validateTitle():boolean{
        if(this.question.questionTitle.length < 6){
            this.error_title = "Length of question should be atleast 6 characters!";
            return false;
        }
        else{
            this.error_title = null;
            return true;
        }
    }

    error_options = null;
    validateOptions(){
        var values = this.question.questionOptions.toString();
        var result = values.split(",");
        var result_length = result.length;

        if(this.question.questionOptions == null){
            this.error_options = "Question Options field cannot be empty!"
            return false;
        }
        else{
            if(result_length != 4){
                this.error_options = "Only 4 comma separated options allowed!";
                return false;
            }
            else{
                this.error_options = null;
                return true;
            }
        }
    }

    error_answer:string=null;
    validateAnswer(){
        if(this.question.questionAnswer == null){
            this.error_answer = "Question Answer field cannot be empty!";
            return false;
        }
        else{
            if(this.question.questionAnswer == 1 || this.question.questionAnswer == 2 || this.question.questionAnswer == 3 || this.question.questionAnswer == 4){
                this.error_answer = null;
                return true;
            }
            else{
                this.error_answer = "Question Answer can be between 1 and 4 only!";
                return false;
            }
        }
    }

    error_marks:string=null;
    validateMarks(){
        if(this.question.questionMarks != null){
            this.error_marks = null;
            return true;
        }
        else{
            this.error_marks = "Question Marks field cannot be empty!";
            return false;
        }
    }

}