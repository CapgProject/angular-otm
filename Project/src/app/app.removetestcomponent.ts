import {Component, OnInit} from '@angular/core'
import { TestService } from './_service/app.testservice'
import { Test } from './_model/app.test';

@Component({
    selector:'removetest',
    templateUrl:'app.removetest.html'
})

export class RemoveTestComponent implements OnInit{
   testList:Test[]=[];
   public popoverTitle:string="Delete Confirmation";
   public popoverMessage:string="Do you really want to delete the test with testId ";
   public confirmClicked:boolean=false;
   public cancelClicked:boolean=false;
    constructor(private service:TestService){
    }
    ngOnInit():void{
        this.service.showAllTests().subscribe((data:Test[])=>this.testList=data);
    }
    deleteTest(testId:any):any{

        
        this.service.deleteTest(testId).subscribe();
        
    }
    

}

