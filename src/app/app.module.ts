import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { MyprojectsComponent } from "./myprojects/myprojects.component";
import { ErrorComponent } from "./error/error.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ChartsModule } from "ng2-charts";
import { AddProjectsComponent } from "./add-projects/add-projects.component";
import { AddUsersComponent } from "./add-users/add-users.component";
import { ListUsersComponent } from "./list-users/list-users.component";
import { HttpIntersepterBasicAuthService } from "./service/http/http-intersepter-basic-auth.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    FooterComponent,
    MyprojectsComponent,
    ErrorComponent,
    AddProjectsComponent,
    AddUsersComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntersepterBasicAuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
