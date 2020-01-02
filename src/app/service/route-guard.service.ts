import { Injectable } from "@angular/core";
import { AUTHENTICATED_USER, USER } from "../app.constants";

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";
//import { HardcodedAuthenticationService } from "./hardcoded-authentication.service";

@Injectable({
  providedIn: "root"
})
export class RouteGuardService implements CanActivate {
  constructor(
    //private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //  if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);

    if (user != null) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}
