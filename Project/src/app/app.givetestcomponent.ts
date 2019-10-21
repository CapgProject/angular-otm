import { Component, OnInit} from '@angular/core';
import { UserService } from './_service/app.userservice';
import { Question } from './_model/app.question';

@Component({
    selector: 'givetest',
    templateUrl: 'app.givetest.html'
})

export class GiveTestComponent implements OnInit{

    questions:any[] =[];
    constructor(private service:UserService){
        console.log("In Constructor");
    }

    ngOnInit(){
        this.service.getQuestions().subscribe((data:Question[]) =>this.questions = data);
    }


}