import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MyprojectsComponent } from "./myprojects/myprojects.component";
import { ErrorComponent } from "./error/error.component";
import { RouteGuardService } from "./service/route-guard.service";
import { AddProjectsComponent } from "./add-projects/add-projects.component";
import { ListUsersComponent } from "./list-users/list-users.component";
//import { AddProjectsComponent } from "./add-projects/add-projects.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "welcome/:name",
    component: WelcomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "myprojects",
    component: MyprojectsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "modprojects/:id",
    component: AddProjectsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "listusers",
    component: ListUsersComponent,
    canActivate: [RouteGuardService]
  },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
