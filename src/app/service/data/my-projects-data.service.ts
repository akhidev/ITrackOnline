import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Myprojects } from "src/app/myprojects/myprojects.component";

@Injectable({
  providedIn: "root"
})
export class MyProjectsDataService {
  retriveMyProjects(username, id) {
    console.log("Akhilesh 005");
    return this.http.get<Myprojects>(
      `http://localhost:8080/users/${username}/myprojects/${id}`
    );
    //throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) {}
  getMyProjectsDetails(username) {
    console.log("Akhilesh 001");
    return this.http.get<Myprojects[]>(
      `http://localhost:8080/users/${username}/myprojects`
    );
    //return this.http.get<Myprojects[]>(
    //   `http://localhost:8080/users/${username}/myprojects`
    // );
  }

  deleteMyProject(username, id) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/myprojects/${id}`
    );
  }

  saveProject(username, id, myproject) {
    return this.http.put(
      `http://localhost:8080/users/${username}/myprojects/${id}`,
      myproject
    );
  }

  saveNewProject(username, myproject) {
    console.log(`Akhilesh 0002 ${myproject}`);
    return this.http.post(
      `http://localhost:8080/users/${username}/myprojects`,
      myproject
    );
  }
}
