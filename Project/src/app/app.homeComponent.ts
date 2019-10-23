import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_service/app.authenticationservice';

@Component({
    selector: 'home',
    templateUrl: 'app.home.html'
})

export class HomeComponent {

    username:string;
    password:string;
    invalidLogin = false

  constructor(private router: Router, private loginservice: AuthenticationService) { }

    checkLogin() {
        alert(this.username);
        if (this.loginservice.authenticate(this.username, this.password)) {
            this.router.navigate(['/admin']);
            this.invalidLogin = false;
        } 
        else{
            this.invalidLogin = true;
        }
    }
}