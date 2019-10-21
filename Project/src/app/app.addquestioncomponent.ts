import { Component, OnInit } from "@angular/core";
import { Question } from "./_model/app.question";
import { UserService } from "./_service/app.userservice";

@Component({
    selector:'addquestion',
    templateUrl:'app.addquestion.html'
})
export class AddQuestion implements OnInit{ 
    buttonVal:boolean=false;
    question:Question;
    testid:number;
    exfile:File;
    testId:number;
    // testid:number;
    // file:File;
    // data:any[]=[
    //     {testid:''},
    //     {file:''}
    // ]

    changeButtonValue(value:boolean){
        if(value==true){
            this.buttonVal=false;
        }
        else{
            this.buttonVal=true;
        }
    }

    constructor(private service:UserService){}

    ngOnInit(){}
    //model:data;
    addThroughExcel(id:number,file:File){
        alert(id);
        alert(file);
        this.service.addQuestionExcel(id,file).subscribe((data)=>console.log(data));
    }

    addThroughForm(){
        alert(this.question);
        this.service.addQuestionForm(this.testId, this.question).subscribe((data)=>console.log(data));
    }
}