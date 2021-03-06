
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var app_productcomponent_1 = require("./app.productcomponent");
var http_1 = require("@angular/common/http");
var ng2_file_upload_1 = require("ng2-file-upload");
var router_1 = require("@angular/router");
var app_userhomecomponent_1 = require("./app.userhomecomponent");
var app_updateusercomponent_1 = require("./app.updateusercomponent");
var app_addquestioncomponent_1 = require("./app.addquestioncomponent");
var common_1 = require("@angular/common");
var app_adminhomecomponent_1 = require("./app.adminhomecomponent");
var app_homeComponent_1 = require("./app.homeComponent");
var app_assigntestcomponent_1 = require("./app.assigntestcomponent");
var app_updateadmincomponent_1 = require("./app.updateadmincomponent");
var app_listusercomponent_1 = require("./app.listusercomponent");
var app_givetestcomponent_1 = require("./app.givetestcomponent");
var ng2_pdf_viewer_1 = require("ng2-pdf-viewer");
var app_deletequestioncomponent_1 = require("./app.deletequestioncomponent");
var app_updatequestion_1 = require("./app.updatequestion");
var app_showquestioncomponent_1 = require("./app.showquestioncomponent");
var app_getresultcomponent_1 = require("./app.getresultcomponent");
var app_resultpdfcomponent_1 = require("./app.resultpdfcomponent");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'user', component: app_userhomecomponent_1.UserHomeComponent },
    { path: 'updateuser', component: app_updateusercomponent_1.UpdateUserComponent },
    { path: 'addquestion', component: app_addquestioncomponent_1.AddQuestion },
    { path: 'admin', component: app_adminhomecomponent_1.AdminHomeComponent },
    { path: 'home', component: app_homeComponent_1.HomeComponent },
    { path: 'assign', component: app_assigntestcomponent_1.AssignTestComponent },
    { path: 'updateadmin', component: app_updateadmincomponent_1.UpdateAdminComponent },
    { path: 'listusers', component: app_listusercomponent_1.ListUserComponent },
    { path: 'givetest', component: app_givetestcomponent_1.GiveTestComponent },
    { path: 'deletequestion', component: app_deletequestioncomponent_1.DeleteQuestion },
    { path: 'showquestion', component: app_showquestioncomponent_1.ShowQuestion },
    { path: 'updatequestion', component: app_updatequestion_1.UpdateQuestion },
    { path: 'getresult', component: app_getresultcomponent_1.GetResultComponent },
    { path: 'resultpdf', component: app_resultpdfcomponent_1.ResultPdfComponent }

];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule, forms_1.ReactiveFormsModule, common_1.CommonModule, router_1.RouterModule.forRoot(routes), ng2_file_upload_1.FileUploadModule, ng2_pdf_viewer_1.PdfViewerModule
            ],
            declarations: [
                app_component_1.AppComponent, app_userhomecomponent_1.UserHomeComponent, app_updateusercomponent_1.UpdateUserComponent, app_addquestioncomponent_1.AddQuestion, app_adminhomecomponent_1.AdminHomeComponent, app_homeComponent_1.HomeComponent, app_assigntestcomponent_1.AssignTestComponent, app_updateadmincomponent_1.UpdateAdminComponent, app_listusercomponent_1.ListUserComponent, app_givetestcomponent_1.GiveTestComponent, app_showquestioncomponent_1.ShowQuestion, app_deletequestioncomponent_1.DeleteQuestion, app_updatequestion_1.UpdateQuestion, app_getresultcomponent_1.GetResultComponent, app_resultpdfcomponent_1.ResultPdfComponent

            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map