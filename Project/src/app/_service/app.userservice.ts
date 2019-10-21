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
        return this.myhttp.put("http://localhost:9088/updateuser",form);
    }

    assignTest(assign:any){
        return this.myhttp.post("http://localhost:9088/assign", assign);
    }

    listUsers(){
        return this.myhttp.get("http://localhost:9088/showusers");
    }

    getQuestions(){
        return this.myhttp.get("http://localhost:9088/givetest?userid=1");
    }

    submitTest(questions:any[]){
        return this.myhttp.put("http://localhost:9088/givetest",questions);
    }

}