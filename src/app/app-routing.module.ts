import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { SidebarComponent } from './Sidebar/Sidebar.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "", component: SidebarComponent, children:
      [
        { path: "", component: DashboardComponent }
      ]
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
