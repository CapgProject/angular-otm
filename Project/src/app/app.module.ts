import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';
import {Routes, RouterModule} from '@angular/router'
import { UserHomeComponent } from './app.userhomecomponent';
import { UpdateUserComponent } from './app.updateusercomponent';
import { AddQuestion } from './app.addquestioncomponent';
import {CommonModule} from '@angular/common';
import { AdminHomeComponent } from './app.adminhomecomponent';
import { HomeComponent } from './app.homeComponent';
import { AssignTestComponent } from './app.assigntestcomponent';
import { UpdateAdminComponent } from './app.updateadmincomponent';
import { ListUserComponent } from './app.listusercomponent';
import { GiveTestComponent } from './app.givetestcomponent';

import { DeleteQuestion } from './app.deletequestioncomponent';
import { UpdateQuestion } from './app.updatequestion';
import { ShowQuestion } from './app.showquestioncomponent';
import { LogoutComponent } from './app.logoutcomponent';
import { BasicAuthHtppInterceptorService } from './_service/app.basicauthinterceptorservice';

const routes:Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: 'user', component: UserHomeComponent},
    { path: 'updateuser', component: UpdateUserComponent},
    { path: 'addquestion', component: AddQuestion},
    { path: 'admin', component: AdminHomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'assign', component: AssignTestComponent},
    { path: 'updateadmin', component: UpdateAdminComponent},
    { path: 'listusers', component: ListUserComponent},
    { path: 'givetest', component:GiveTestComponent },
    { path: 'deletequestion', component:DeleteQuestion},
    { path: 'showquestion', component: ShowQuestion},
    { path: 'updatequestion', component:UpdateQuestion},
    { path: 'logout', component:LogoutComponent}
];


@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule.forRoot(routes), FileUploadModule
    ],
    declarations: [
        AppComponent, UserHomeComponent, UpdateUserComponent, AddQuestion, AdminHomeComponent, HomeComponent, AssignTestComponent,UpdateAdminComponent, ListUserComponent, GiveTestComponent, ShowQuestion, DeleteQuestion, UpdateQuestion, LogoutComponent
		], 


    providers: [],

    bootstrap: [AppComponent]
})

export class AppModule { }