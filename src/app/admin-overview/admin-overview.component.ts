import { Component, OnInit } from '@angular/core';
import {AppService} from "../service/app-service";

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {

  csvUrl = AppService.CSV_URL;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  exportAll(){
    this.appService.listApplications().then((data)=>{
      console.log(data)
    }).catch((err) => {
      console.log("Save - caught error:" + err);

      throw err;

    })
  }
}
