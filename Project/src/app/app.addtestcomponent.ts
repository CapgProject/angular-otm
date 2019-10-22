import {Component} from '@angular/core';
import { TestService } from './_service/app.testservice';
import {Router} from '@angular/router';



@Component({
    selector:'test',
    templateUrl:'app.addtest.html'
})

export class AddTestComponent {
  // router:Router
   model:any={testId:null,testName:null,testDuration:null, startTime:null,endTime:null};
   

    constructor(private service:TestService){
            
    } 
    test_error:any={nameError:"",durationError:"",startTimeError:""};
    validate():boolean{
      var name = new RegExp(/^[A-Z][A-Za-z 0-9]$/);
      var pattern = new RegExp(/^([0-9][0-9]):([0-5][0-9]):([0-5][0-9])$/i);
      var startTimePattern=new RegExp(/^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-([0-2][0-9][0-9][0-9])\s([0-1][0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])$/i);
      let error:boolean = false;
      if(!name.test(this.model.testName)){
        this.test_error.nameError = "First Letter should be capital with 3-20 characters"
        error  = true;
    }
    else{
        this.test_error.nameError = "";
    }
    if(!pattern.test(this.model.testDuration)){
      this.test_error.durationError="Enter duration in 'HH:mm:ss' format only!"
      error = true;
    }
    else{
      this.test_error.durationError="";
    }
    if(!startTimePattern.test(this.model.startTimeError)){
      this.test_error.startTimeError=""
    }

    


    if(!error){
      return true;
  }
  else{
      return false;
  }
}
    
   

    addTest():any{
      if(this.validate()){
   if( this.model.testName!=null && this.model.testDuration!=null && this.model.startTime!=null && this.model.endTime!=null)
        
      //  this.service.addTest(this.model).subscribe(data=>console.log(data));
     // this.service.addTest(this.model).subscribe((success:string)=>{alert(success);this.router.navigate(['/admin']);},error=>{alert(error.error);})
    this.service.addTest(this.model).subscribe(data=>console.log(data));
    }
    }

    




   
  }