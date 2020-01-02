import { API_URL } from "./../app.constants";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
//import { JwtHelperService } from "@auth0/angular-jwt";

export const TOKEN = "token";
export const AUTHENTICATED_USER = "authenticatedUser";

@Injectable({
  providedIn: "root"
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  executeJWTAuthenticationService(username, password) {
    return this.http
      .post<any>(`${API_URL}/authenticate`, {
        username,
        password
      })
      .pipe(
        map(data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          console.log("Akhilesh 0001 executeJWTAuthenticationService ");
          console.log("Akhilesh 0002 TOKEN " + sessionStorage.getItem(TOKEN));
          console.log("Akhilesh 0001 executeJWTAuthenticationService ");

          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn() {
    return !(sessionStorage.getItem(AUTHENTICATED_USER) === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
