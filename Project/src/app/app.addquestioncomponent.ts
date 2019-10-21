import { Component, OnInit } from "@angular/core";
import { Question } from "./_model/app.question";
import { QuestionService } from "./_service/app.questionservice";
import { FileUploader } from "ng2-file-upload";

@Component({
    selector:'addquestion',
    templateUrl:'app.addquestion.html'
})
export class AddQuestion /*implements OnInit*/{ 
    // uploader:FileUploader;
    // buttonVal:boolean=false;
    // question:Question={
    //     questionId:null,
    //     questionTitle:"",
    //     questionAnswer:null,
    //     questionMarks:null,
    //     questionOptions:[]
    // };
    // testid:number;
    // exfile:any;
    // testId:number;

    // ngOnInit{
    //     const headers = [{name:'Acc'}]
    // }

    // changeButtonValue(value:boolean){
    //     if(value==true){
    //         this.buttonVal=false;
    //     }
    //     else{
    //         this.buttonVal=true;
    //     }
    // }

    // constructor(private service:QuestionService){}

    // addThroughExcel(id:number,file:any){
    //     alert(id);
    //     alert(file);
    //     this.service.addQuestionExcel(id,file).subscribe((data)=>console.log(data));
    // }

    // addThroughForm(){
    //     alert(this.question.questionMarks);
    //     this.service.addQuestionForm(this.testId, this.question).subscribe((data)=>console.log(data));
    // }
}