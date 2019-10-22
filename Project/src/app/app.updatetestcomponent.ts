import {Component, OnInit} from '@angular/core'
import { Test } from './_model/app.test';
import { TestService } from './_service/app.testservice';


@Component({
    selector:'updatetest',
    templateUrl:'app.updatetest.html'
})

export class UpdateTestComponent {
    
    testId:number;
    test:Test
    
    
    constructor(private service:TestService){

    }
    

    // ngOnInit():void{
    //     this.service.showAllTests().subscribe();
    // }
    searchTest(testId:number){
            this.service.searchTest(testId).subscribe((data:Test)=>this.test=data);
            
        
    }

    updateTest(){
       
        this.service.updateTest(this.test).subscribe((data)=>console.log(data));
        
    }
}