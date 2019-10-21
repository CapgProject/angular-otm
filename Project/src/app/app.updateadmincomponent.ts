import { Component} from '@angular/core';
import { UserService } from './_service/app.userservice';

@Component({
    selector: 'updateadmin',
    templateUrl: 'app.updateadmin.html'
})

export class UpdateAdminComponent {
    constructor(private service:UserService){
        console.log("In Constructor");
    }
    user:any = {userId: "", userName: "", userPassword: ""};
    user_error:any = {idError:"", passwordError:""};
    validate():boolean{
        console.log(this.user);
        var numbers = new RegExp(/^[0-9]+$/);
        var password = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i)
        var name = new RegExp(/^[A-Z][A-Za-z0-9]{3,20}$/);
        let error:boolean = false
        if(!numbers.test(this.user.userId)){
            this.user_error.idError = "Enter Only Numbers";
            error = true;
        }
        else{
            this.user_error.idError = "";
        }
        if(!name.test(this.user.userName)){
            this.user_error.nameError = "First Letter should be capital with 4-20 characters"
            error  = true;
        }
        else{
            this.user_error.nameError = "";
        }
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
        if(this.validate()){
            this.service.updateUser(this.user).subscribe(data=>console.log(data));
        }
    }
}