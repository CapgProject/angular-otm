import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User{
    
    constructor(public status:string) {}
  
}

export class JwtResponse{
    constructor(public jwttoken:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) {}

    authenticate(username, password) {
        return this.httpClient.post<any>('http://localhost:9088/authenticate',{username,password}).subscribe(
            userData => {
                let tokenStr= 'Bearer '+userData.token;
                sessionStorage.setItem('token', tokenStr);
                sessionStorage.setItem('username',username);
                
                return userData;
            }
  
      );
    }
  
    register(name,password){
        return this.httpClient.post<any>("http://localhost:9088/register",{"username":name,"password":password,"isAdmin":"false","isDeleted":"false"}).subscribe((data)=>alert("Successfully Registered!"));
    }

    checkRole(name:string){
        return this.httpClient.get("http://localhost:9088/searchuser?name="+name);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username')
        return !(user === null)
    }

    logOut() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("userId");
    }
}