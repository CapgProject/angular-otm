import { Component, OnInit } from "@angular/core";
import { Question } from "./_model/app.question";
import { UserService } from "./_service/app.userservice";

@Component({
    selector:'deletequestion',
    templateUrl:'app.deletequestion.html'
})
export class DeleteQuestion implements OnInit{

    constructor(private service:UserService){}

    ngOnInit(){}

    deleteQuestion(id:number){
        this.service.deleteQuestion(id).subscribe((data)=>console.log(data));
    }
}