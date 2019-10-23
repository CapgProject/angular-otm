import {Component, OnInit} from '@angular/core';
import { TestService } from '../_service/app.testservice';
import {Router} from '@angular/router';




@Component({
    selector:'test',
    templateUrl:'../_html/app.addtest.html'
})

export class AddTestComponent implements OnInit {
  
   model:any={testId:null,testName:null,testDuration:null, startTime:null,endTime:null};
  
   ngOnInit(){
    if(sessionStorage.getItem("role")!= "admin"){
        this.router.navigate(['/error403'])
    }
}

    constructor(private service:TestService,private router:Router){} 
    nameError="";
    validateTestName(){
      var name = new RegExp(/^[A-Z][A-Za-z 0-9]{3,20}$/);
      if(!name.test(this.model.testName)){
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
      if(!pattern.test(this.model.testDuration)){
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
      //var startTimePattern=new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[0-2])[/]\d\d\d\d (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]) ([AP][M])$/g);
    //var startTimePattern=new RegExp(/^(0[1-9]|1[0-9]|2[0-9]|3[01])(0[1-9]|1[012])-([0-2][0-9][0-9][0-9])\s([0-1][0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])$/i);
      //if(!startTimePattern.test(this.model.startTime)){
        if(this.model.startTime==null){
          this.startTimeError="Start Time cannot be empty."
       // this.startTimeError="Enter start time in 'dd-MM-yyyy HH:mm' format only!"
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
      var startdate=Date.parse(this.model.startTime);
      var enddate=Date.parse(this.model.endTime);
      var currentdate=new Date();
     
      // var endTimePattern=new RegExp(/^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-([0-2][0-9][0-9][0-9])\s([0-1][0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])$/i);
      // if(!endTimePattern.test(this.model.endTime)){
        if(this.model.endTime==null){
       // this.endTimeError ="Enter start time in 'dd-MM-yyyy HH:mm:ss' format only!"
       //this.endTimeError="Enter start time in 'dd-MM-yyyy HH:mm:ss' format only!"
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
   

    addTest():any{
      if(this.validateTestName() && this.validateTestDuration && this.validateStartTime && this.validateEndTime){
        if( this.model.testName!=null && this.model.testDuration!=null && this.model.startTime!=null && this.model.endTime!=null)

          this.service.addTest(this.model).subscribe((success)=>{alert(success);this.router.navigate(['/admin']);},error=>{alert(error.error);})

      }
    }
    }

    




   
  
