import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'
import {ConfirmationPopoverModule} from 'angular-confirmation-popover'
import { AddTestComponent } from './app.addtestcomponent'
import { ShowAllTestComponent} from './app.showalltestcomponent'
import { RemoveTestComponent } from './app.removetestcomponent';
import { UpdateTestComponent } from './app.updatetestcomponent';
 

import {ReactiveFormsModule} from '@angular/forms';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';
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
import { GetResultComponent } from './app.getresultcomponent';
import { ResultPdfComponent } from './app.resultpdfcomponent';


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
    { path: 'givetest', component: GiveTestComponent },
    { path: 'deletequestion', component: DeleteQuestion},
    { path: 'showquestion', component: ShowQuestion},
    { path: 'updatequestion', component: UpdateQuestion},
    { path: 'logout', component: LogoutComponent},
    { path: 'getresult', component: GetResultComponent},
    { path: 'resultpdf', component: ResultPdfComponent},
    { path: 'addtest', component: AddTestComponent},
    { path: 'showalltests', component: ShowAllTestComponent},
    { path: 'removetest', component: RemoveTestComponent},
    { path: 'updatetest', component: UpdateTestComponent},
    { path: 'removetest', component: RemoveTestComponent}

];

@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule, RouterModule.forRoot(routes), FileUploadModule,NgxPaginationModule,
        ConfirmationPopoverModule.forRoot({
        confirmButtonType:'danger'})
    ],
    declarations: [

        AppComponent, UserHomeComponent, UpdateUserComponent, AddQuestion, AdminHomeComponent, HomeComponent, AssignTestComponent,UpdateAdminComponent, ListUserComponent, GiveTestComponent, ShowQuestion, DeleteQuestion, UpdateQuestion,GetResultComponent, ResultPdfComponent,LogoutComponent, AddTestComponent,ShowAllTestComponent,RemoveTestComponent,UpdateTestComponent
		], 

    providers: [{provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true}],

    bootstrap: [AppComponent]
})

export class AppModule { }