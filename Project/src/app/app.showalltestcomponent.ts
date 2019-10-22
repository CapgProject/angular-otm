import {Component, OnInit} from '@angular/core';
import {TestService} from './_service/app.testservice'
import {Test} from './_model/app.test';



@Component({
    selector:'showtest',
    templateUrl:'app.showalltest.html'
})

export class ShowAllTestComponent implements OnInit{
    update:any;
    tests:any[]=[];

    constructor(private service:TestService){
        console.log("In Show Test Constructor")
    }

    ngOnInit(){ 
        
     this.service.showAllTests().subscribe((data:Test[])=>this.tests=data);
        
    }
   
    
}