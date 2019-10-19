import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
    selector:'addquestion',
    templateUrl:'app.addquestion.html'
})
export class AddQuestion implements OnInit{ 
    buttonVal:boolean=false;
    questionForm:FormGroup;

    changeButtonValue(value:boolean){
        if(value==true){
            this.buttonVal=false;
        }
        else{
            this.buttonVal=true;
        }
    }

    constructor(private fb:FormBuilder){}

    ngOnInit(){
        this.questionForm = this.fb.group({
            testid:['',Validators.required]
        })
    }
}