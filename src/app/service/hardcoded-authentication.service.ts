import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username, password) {
    console.log(this.isUserLoggedIn());

    if (username === "admin" && password === "demo") {
      sessionStorage.setItem("authenticatedUser", username);
      console.log("Inside " + this.isUserLoggedIn());

      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}
