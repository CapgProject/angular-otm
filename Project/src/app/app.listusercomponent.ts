import { Component, OnInit} from '@angular/core';
import { UserService } from './_service/app.userservice';
import { User } from './_model/app.user';

@Component({
    selector: 'listuser',
    templateUrl: 'app.listuser.html'
})

export class ListUserComponent implements OnInit{

    users:any[] =[];
    constructor(private service:UserService){
        console.log("In Constructor");
    }

    ngOnInit(){
        this.service.listUsers().subscribe((data:User[]) =>this.users = data);
        console.log(this.users);
    }

}