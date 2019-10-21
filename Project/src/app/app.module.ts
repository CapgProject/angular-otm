import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { AddQuestion } from './app.addquestioncomponent';
import {CommonModule} from '@angular/common';
import { ShowQuestion } from './app.showquestioncomponent';
import { DeleteQuestion } from './app.deletequestioncomponent';

const routes:Routes=[
    {path:'addquestion',component:AddQuestion},
    {path:'showquestion',component:ShowQuestion},
    {path:'deletequestion',component:DeleteQuestion}
]

@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent, AddQuestion, ShowQuestion, DeleteQuestion
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }