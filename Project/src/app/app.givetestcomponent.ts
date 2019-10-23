import { Component, OnInit} from '@angular/core';
import { UserService } from './_service/app.userservice';
import { Question } from './_model/app.question';

@Component({
    selector: 'givetest',
    templateUrl: 'app.givetest.html'
})

export class GiveTestComponent implements OnInit{

    questions:Question[] =[];
    num:number = 0;
    question:Question;
    constructor(private service:UserService){
        console.log("In Constructor");
    }

    ngOnInit(){
        this.service.getQuestions().subscribe((data:Question[]) =>this.questions = data);
    }

    nextQuestion(){
        this.num += 1;
        if(this.num>=this.questions.length){
            alert("Test Finished Successfully");
            this.service.submitTest(this.questions).subscribe(data=>console.log(data));
        }
    }






}