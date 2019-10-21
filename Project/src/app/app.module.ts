import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';
import {Routes, RouterModule} from '@angular/router'
import { UserHomeComponent } from './app.userhomecomponent';
import { UpdateUserComponent } from './app.updateusercomponent';
import { AddQuestion } from './app.addquestioncomponent';
import {CommonModule} from '@angular/common';
import { ShowQuestion } from './app.showquestioncomponent';
import { DeleteQuestion } from './app.deletequestioncomponent';
import { UpdateQuestion } from './app.updatequestion';

const routes:Routes=[
    {path:'addquestion',component:AddQuestion},
    {path:'showquestion',component:ShowQuestion},
    { path: '', redirectTo: 'user', pathMatch:'full'},
    { path: 'user', component: UserHomeComponent},
    { path: 'updateuser', component: UpdateUserComponent},
    {path:'deletequestion',component:DeleteQuestion},
    {path:'updatequestion', component:UpdateQuestion}
];

@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule.forRoot(routes), FileUploadModule
    ],
    declarations: [
        AppComponent, AddQuestion, ShowQuestion, DeleteQuestion, UserHomeComponent, UpdateUserComponent, UpdateQuestion
		],

    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }