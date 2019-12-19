import { Component, OnInit } from "@angular/core";
import { MyProjectsDataService } from "../service/data/my-projects-data.service";
import { Route, Router } from "@angular/router";

import { ChartDataSets, ChartType, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
//import * as CanvasJS from './canvasjs.min';

export class Myprojects {
  constructor(
    public projectId: number,
    public projectName: string,
    public projectDesc: string,
    public startDate: Date,
    public endDate: Date
  ) {}
}

@Component({
  selector: "app-myprojects",
  templateUrl: "./myprojects.component.html",
  styleUrls: ["./myprojects.component.css"]
})
export class MyprojectsComponent implements OnInit {
  myprojects: Myprojects[];
  message: string;
  projects: string[] = [];
  barrChartLabels: Label[] = [];
  // projects: Array<string>;

  i: number;

  constructor(private service: MyProjectsDataService, private router: Router) {}
  GetMyProjects() {
    //  this.service.getMyProjectsDetails().subscribe();
    //console.log("Akhilesh 123");
  }
  ngOnInit() {
    this.refreshMyProjects();
  }

  refreshMyProjects() {
    this.service.getMyProjectsDetails("admin").subscribe(response => {
      this.myprojects = response;
      var _i = 0;
      for (let index2 of this.myprojects) {
        console.log("Project Name :" + index2.projectName);
        _i++;
        console.log("Project Name 200 :" + _i);
        this.projects.push(index2.projectName);
        this.barrChartLabels.push(index2.projectName);
      }

      console.log("Project Name 2 :" + this.projects);
    });

    // this.myprojects.forEach(element => {
    console.log("Project Name :");
    // });
  }

  deleteMyProjects(id) {
    console.log(`from delete :${id}`);
    this.service.deleteMyProject("admin", id).subscribe(response => {
      console.log(response);
      this.message = `Project ${id} deleted successfuly`;
      this.refreshMyProjects();
    });
  }
  retriveMyProjects(id) {
    console.log(`from update :${id}`);
    this.service.retriveMyProjects("admin", id).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(["modprojects", id]);
  }

  addProjects() {
    console.log(`from add`);
    this.router.navigate(["modprojects", -1]);
    this.refreshMyProjects();
  }

  // Graph component

  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = ["Apple", "Banana", "Kiwifruit"];
  barChartType: ChartType = "horizontalBar";
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60], label: "Best Fruits" }
  ];

  //

  //Stacked chart

  //Stacked chart ends
}
