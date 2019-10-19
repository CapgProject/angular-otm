import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router'
import { UserHomeComponent } from './app.userhomecomponent';
import { UpdateUserComponent } from './app.updateusercomponent';

const myroute:Routes = [
    { path: '', redirectTo: 'user', pathMatch:'full'},
    { path: 'user', component: UserHomeComponent},
    { path: 'updateuser', component: UpdateUserComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(myroute)
    ],
    declarations: [
        AppComponent, UserHomeComponent, UpdateUserComponent
		], 
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }