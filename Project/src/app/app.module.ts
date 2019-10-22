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
 



const myroute:Routes = [
    {path:'addtest',component: AddTestComponent},
    {path:'showalltests',component:ShowAllTestComponent},
    {path:'removetest',component:RemoveTestComponent},
    {path:'updatetest',component:UpdateTestComponent},
    {path:'removetest',component:RemoveTestComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(myroute),
        NgxPaginationModule,
        ConfirmationPopoverModule.forRoot({
        confirmButtonType:'danger'})
    ],
    declarations: [
        AppComponent, AddTestComponent,ShowAllTestComponent,RemoveTestComponent,UpdateTestComponent
		], 
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }