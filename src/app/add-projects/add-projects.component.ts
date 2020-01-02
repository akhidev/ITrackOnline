import { Component, OnInit } from "@angular/core";
import { USER } from "../app.constants";
import { MyProjectsDataService } from "../service/data/my-projects-data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Myprojects } from "../myprojects/myprojects.component";

@Component({
  selector: "app-add-projects",
  templateUrl: "./add-projects.component.html",
  styleUrls: ["./add-projects.component.css"]
})
export class AddProjectsComponent implements OnInit {
  id: number;
  myProject: Myprojects;
  constructor(
    private service: MyProjectsDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    //console.log("Update id " + this.id);
    this.myProject = new Myprojects(this.id, "", "", "", null, null);
    if (this.id != -1) {
      this.service
        .retriveMyProjects(USER, this.id)
        .subscribe(data => (this.myProject = data));
      console.log("Update myProject " + this.myProject);
    }
  }

  saveProject() {
    if (this.id != -1) {
      // console.log("Update Save Project ");

      this.service
        .saveProject(USER, this.id, this.myProject)
        .subscribe(data => console.log(data));
      this.router.navigate(["myprojects"]);
    } else {
      console.log("New Save Project " + this.myProject);
      this.service
        .saveNewProject(USER, this.myProject)
        .subscribe(data => console.log(data));
      this.router.navigate(["myprojects"]);
    }
  }
}
