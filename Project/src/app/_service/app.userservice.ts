import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private myhttp:HttpClient){} 

    updateUser(user: any){
        let form = new FormData();
        form.append("userId", user.userId);
        form.append("userName",user.userName);
        form.append("userPassword",user.userPassword);
        return this.myhttp.put("http://localhost:9088/updateusersubmit",form);

    }
}