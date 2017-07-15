import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import {RouterModule,Routes} from "@angular/router";
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { AdminExportComponent } from './admin-export/admin-export.component';

const appRoutes: Routes = [
  { path: 'overview', component: AdminOverviewComponent },
  { path: 'export', component: AdminExportComponent },

  { path: '',   redirectTo: '/overview', pathMatch: 'full' }
  // ,
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminMainComponent,
    AdminOverviewComponent,
    AdminExportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
