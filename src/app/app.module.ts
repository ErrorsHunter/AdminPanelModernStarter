import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Sidebar/Sidebar.component';
import { LoginComponent } from './Login/Login.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

@NgModule({
  declarations: [				
    AppComponent,
      SidebarComponent,
      LoginComponent,
      DashboardComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
