import { Component, OnInit } from "@angular/core";
import * as XLSX from "xlsx";
import { USER } from "../app.constants";
import { MyProjectsDataService } from "../service/data/my-projects-data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Myprojects } from "../myprojects/myprojects.component";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.css"]
})
export class ListUsersComponent implements OnInit {
  constructor(
    private service: MyProjectsDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  name = "This is XLSX TO JSON CONVERTER";
  willDownload = false;

  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = event => {
      const data = reader.result;
      workBook = XLSX.read(data, {
        type: "binary",
        cellDates: true,
        dateNF: "dd/mm/yyyy hh:mm:ss"
      });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});

      console.log("Akhilesh username001: " + jsonData);

      const dataString = JSON.stringify(jsonData);
      document.getElementById("output").innerHTML = dataString
        .slice(0, 300)
        .concat("...");
      this.setDownload(dataString);
      //this.service.uploadProject(USER, dataString);
      console.log("Akhilesh dataString: " + dataString);
      console.log("Akhilesh jsonData: " + jsonData);

      this.service
        .uploadProject(USER, JSON.parse(dataString))
        .subscribe(data => console.log(data));
      //this.router.navigate(["myprojects"]);
    };
    reader.readAsBinaryString(file);
    // this.service.uploadProject(USER, file).subscribe(data => console.log(data));
    //this.router.navigate(["myprojects"]);
    //this.service.uploadProject(USER, file);
    //.subscribe(data => console.log(data));

    oReq.onload = function(e) {
      var arraybuffer = oReq.response;

      /* convert data to binary string */
      var data = new Uint8Array(arraybuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
        //  console.log("Data"+data[i]);
      }
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      //console.log("Data"+bstr);
      var first_sheet_name = workbook.SheetNames[0];
      /* Get worksheet */
      var worksheet = workbook.Sheets[first_sheet_name];
      var json = XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[0]],
        { header: 1, raw: true }
      );
      var jsonOut = JSON.stringify(json);
      console.log("test" + jsonOut);
    };
  }

  setDownload(data) {
    this.willDownload = true;
    setTimeout(() => {
      const el = document.querySelector("#download");
      el.setAttribute(
        "href",
        `data:text/json;charset=utf-8,${encodeURIComponent(data)}`
      );
      el.setAttribute("download", "xlsxtojson.json");
    }, 1000);
  }
}
