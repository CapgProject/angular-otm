import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './app.addproductcomponent';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router'
import { UserHomeComponent } from './app.userhomecomponent';
import { UpdateUserComponent } from './app.updateusercomponent';
import { AddQuestion } from './app.addquestioncomponent';
import {CommonModule} from '@angular/common';

const myroute:Routes = [
    { path: '', redirectTo: 'user', pathMatch:'full'},
    { path: 'user', component: UserHomeComponent},
    { path: 'updateuser', component: UpdateUserComponent},
    { path: 'addquestion', component: AddQuestion}
];

@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule.forRoot(routes)
        
    ],
    declarations: [

        AppComponent, UserHomeComponent, UpdateUserComponent, AddQuestion
		], 

    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }