import {Component, OnInit} from '@angular/core'
import { Test } from './_model/app.test';
import { TestService } from './_service/app.testservice';
import {Router} from '@angular/router'


@Component({
    selector:'updatetest',
    templateUrl:'app.updatetest.html'
})

export class UpdateTestComponent {
    
    testId:number;
    test:Test

    constructor(private service:TestService,private router:Router){

    }
    nameError="";
    validateTestName(){
      var name = new RegExp(/^[A-Z][A-Za-z 0-9]{3,20}$/);
      if(!name.test(this.test.testName)){
        this.nameError = "First Letter should be capital with 3-20 characters"
        return false;
    }
    else{
        this.nameError = "";
        return true;
    }
    }
    durationError="";
    validateTestDuration():boolean{
      var pattern = new RegExp(/^([0-9][0-9]):([0-5][0-9]):([0-5][0-9])$/i);
      if(!pattern.test(this.test.testDuration)){
        this.durationError="Enter duration in 'HH:mm:ss' format only!"
        return  false;
      }
      else{
        this.durationError="";
        return true;
      }

    }
    startTimeError="";
    validateStartTime():boolean{
     
        if(this.test.startTime==null){
        this.startTimeError="Start Time cannot be empty."
        this.endTimeError=""
        return false;
        
      }
      else{
        this.startTimeError="";
        return true;
      }

    }
    endTimeError="";
    validateEndTime():boolean{
      var startdate=Date.parse(this.test.startTime);
      var enddate=Date.parse(this.test.endTime);
     
        if(this.test.endTime==null){
       this.endTimeError="End Time cannot be empty"
        return false;
      }
      else if(startdate>enddate){
        this.endTimeError="End time cannot be before Start Time!"
        return false;

      }
      
      else{
        this.endTimeError="";
        return true;
      }

    } 
   

    

    ngOnInit():void{
        
        this.service.showAllTests().subscribe();
    }
    searchTest(testId:number){
            this.service.searchTest(testId).subscribe((data:Test)=>this.test=data);
          // this.service.searchTest(testId).subscribe((data:Test)=>{this.test=data}, error=>{alert(error.error)})
            
        
    }

    updateTest(){
       if(this.validateTestName() && this.validateTestDuration() && this.validateStartTime() && this.validateEndTime()){
        this.service.updateTest(this.test).subscribe((data)=>{alert(data);this.router.navigate(['/admin']);},error=>alert(error.error));
        //this.service.updateTest(this.test).subscribe((success:string)=>{alert(success);this.router.navigate(['/admin']);},error=>{alert(error.error);})
       }
    }
}