import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router'
import { UserHomeComponent } from './app.userhomecomponent';

const myroute:Routes = [
    { path: '', redirectTo: 'user', pathMatch:'full'},
    { path: 'user', component: UserHomeComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(myroute)
    ],
    declarations: [
        AppComponent, UserHomeComponent
		], 
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }