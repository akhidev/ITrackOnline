import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Myprojects } from "src/app/myprojects/myprojects.component";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class MyProjectsDataService {
  constructor(private http: HttpClient) {}

  retriveMyProjects(username, id) {
    // console.log("Akhilesh 005");
    return this.http.get<Myprojects>(
      `http://localhost:8080/users/${username}/myprojects/${id}`
    );
    //throw new Error("Method not implemented.");
  }
  getMyProjectsDetails(username) {
    //console.log("Akhilesh 001");

    return this.http.get<Myprojects[]>(
      `http://localhost:8080/users/${username}/myprojects`
    );
  }

  deleteMyProject(username, id) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/myprojects/${id}`
    );
  }

  saveProject(username, id, myproject) {
    //console.log("Akhilesh MyProjectsDataService save");
    return this.http.put(
      `http://localhost:8080/users/${username}/myprojects/${id}`,
      myproject
    );
  }

  saveNewProject(username, myproject) {
    console.log("Akhilesh saveNewProject :" + myproject);

    // console.log(`Akhilesh 0002 MyProjectsDataService${myproject}`);
    return this.http.post(
      `http://localhost:8080/users/${username}/myprojects`,
      myproject
    );
  }

  uploadProject(username, nmyproject) {
    console.log("Akhilesh uploadProject :" + nmyproject);
    return this.http.post(
      `http://localhost:8080/users/${username}/uploadproject`,
      nmyproject
    );
  }
}
