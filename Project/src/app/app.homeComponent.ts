import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_service/app.authenticationservice';
import { User } from './_model/app.user';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { AdminHomeComponent } from './app.adminhomecomponent';

@Component({
    selector: 'home',
    templateUrl: 'app.home.html'
})

export class HomeComponent {

    user:User = null;
    username:string;
    password:string;
    name:string;
    registerpassword:string;
    invalidLogin = false
    admin:AdminHomeComponent;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

    Register(){
        if(this.loginservice.register(this.name,this.registerpassword)){
            this.router.navigate(['/home#']);
        }
    }

    checkLogin() {
        if (this.loginservice.authenticate(this.username, this.password)) {
            this.loginservice.checkRole(this.username).subscribe((data:User)=>{this.user=data;this.checkRoles();});
        }

        else{
            this.invalidLogin = true;
        }
    }
    
    checkRoles(){
        if(this.user.isAdmin){
            sessionStorage.setItem('role',"admin");
            sessionStorage.setItem("userId",this.user.userId);
            this.invalidLogin = false;
            this.router.navigate(['/admin']).then(() => {
                window.location.reload();
              });
           
        }
        else{
            this.router.navigate(['/user']).then(() => {
                window.location.reload();
              });
            sessionStorage.setItem('role',"user");
            this.invalidLogin = false;
        }
    }
}