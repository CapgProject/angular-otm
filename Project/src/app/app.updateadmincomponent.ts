import { Component} from '@angular/core';
import { UserService } from './_service/app.userservice';
import { Router } from '@angular/router';


@Component({
    selector: 'updateadmin',
    templateUrl: 'app.updateadmin.html'
})

export class UpdateAdminComponent {
    constructor(private router:Router,private service:UserService){
        console.log("In Constructor");
    }
    user:any = {userId: "", userName: "", userPassword: ""};
    user_error:any = {idError:"", passwordError:""};
    validatename():boolean{
        var name = new RegExp(/^[A-Z][A-Za-z0-9]{3,20}$/);
        let error:boolean = false;
        if(!name.test(this.user.userName)){
            this.user_error.nameError = "First Letter should be capital with 4-20 characters"
            error  = true;
        }
        else{
            this.user_error.nameError = null;
        }
        if(error){
            return false;
        }
        else{
            return true;
        }
    }
    validatepassword():boolean{
        var password = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i)
        let error:boolean = false;
        if(!password.test(this.user.userPassword)){
            this.user_error.passwordError = "Invalid Password Format";
            error = true;
        }
        else{
            this.user_error.passwordError = "";
        }
        if(!error){
            return true;
        }
        else{
            return false;
        }
    }

    updateAdmin(){
        if(this.validatename() && this.validatepassword()){
            this.service.updateUser(this.user).subscribe(data=>{alert(data);this.router.navigate(['/admin'])},(error)=>alert(error.error));
        }
    }
}