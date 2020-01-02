import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

export const TOKEN = "token";

@Injectable({
  providedIn: "root"
})

//HttpIntersepterBasicAuth
export class HttpIntersepterBasicAuthService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    //let username = "admin";
    //let password = "demo";
    let basicAuthHeaderString = sessionStorage.getItem(TOKEN);
    // let basicAuthHeaderString =
    //   "Basic " + window.btoa(username + ":" + password);
    // console.log("Akhilesh intercept:" + basicAuthHeaderString);

    // let headers = new HttpHeaders({
    //   Authorization: sessionStorage.getItem(TOKEN)
    //   //    sessionStorage.getItem(TOKEN)
    // });
    // basicAuthHeaderString =
    //   "Basic " + window.btoa(username + ":" + password);

    //basicAuthHeaderString = sessionStorage.getItem(TOKEN);
    console.log("Akhilesh intercept:" + basicAuthHeaderString);
    if (basicAuthHeaderString != null) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }

    return next.handle(request);
  }
}
