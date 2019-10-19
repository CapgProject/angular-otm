import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './app.addproductcomponent';
import { HttpClientModule } from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { AddQuestion } from './app.addquestioncomponent';
import {CommonModule} from '@angular/common';

const routes:Routes=[
    {path:'add',component:ProductComponent},
    {path:'addquestion',component:AddQuestion}
]

@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AppComponent,ProductComponent,AddQuestion
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }