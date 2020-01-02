import { Component, OnInit } from "@angular/core";
import { AUTHENTICATED_USER } from "../app.constants";

//import { HardcodedAuthenticationService } from "../service/hardcoded-authentication.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor() //private hardcodedAuthenticationService: HardcodedAuthenticationService
  {}

  ngOnInit() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    //setItem(AUTHENTICATED_USER, username);
    //this.hardcodedAuthenticationService.logout();
  }
}
