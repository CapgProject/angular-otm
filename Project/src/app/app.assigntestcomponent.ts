import { Component} from '@angular/core';
import { UserService } from './_service/app.userservice';
import { e } from '@angular/core/src/render3';
import { empty } from 'rxjs';
import { AssignTestData } from './_model/app.assigntestdata';

@Component({
    selector: 'assign',
    templateUrl: 'app.assign.html'
})

export class AssignTestComponent {
    constructor(private service:UserService){
        console.log("In Constructor");
    }
    assign:AssignTestData = {userId: null, testId: null};
    response:any;
    assignTest(){
        if(this.assign.userId != null && this.assign.testId!= null){
            this.service.assignTest(this.assign).subscribe(data=> {this.response = data; console.log(data);});
            alert(this.response);
            if(this.response == null){
                alert("Either the Test or the User does not exist");
            }
            else{
                alert("Test Assigned Successfully!");
            }
        }
    }
}