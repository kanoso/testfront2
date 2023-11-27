import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';
import { IDashboard } from 'src/app/page/dashboard/shared/dashboard.model';
import { DashboardService } from 'src/app/page/dashboard/shared/dashboard.service';
import { CONSTANT } from 'src/app/shared/service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content-nav.component.css',
  './content-header.component.css', './content-home.component.css', './content-media.component.css']
})
export class ContentComponent implements OnInit {
  status: boolean = false;
  dark: boolean = false;
  nodeText: string = "";
  dashboard: IDashboard;
  dashboards: IDashboard[];
  @ViewChild(DashboardComponent) dashboardComponent: DashboardComponent;

  constructor(
    private _dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.nodeText = "Light Mo.";
    //this.loadDashboard();
  }

  toogleClose(){
    this.status = !this.status;
  }

  removeClose(){
    this.status = false;
  }

  toogleDark(){
    if(this.dark)
      this.nodeText = "Light Mo.";
    else
      this.nodeText = "Dark Mo.";

    this.dark = !this.dark;
  }

  loadDashboard(): void {
    let params = JSON.stringify({"apikey": "NRAK-8KQYDCQR737E5EE3JPLQJQVPIC7", "guid": "MzI3OTY1MHxWSVp8REFTSEJPQVJEfGRhOjE0NTE1OTI"});

    this._dashboardService.getDashboard(params)
      .then((res) => {
        debugger;
        this.dashboards = res;
        console.log(res);
        this.dashboard = this.dashboards[0];

        //let pdfBlob = new Blob([new Uint8Array(pdfArray, 0)], { type: "application/pdf" })
        //let pdfUrlTest = URL.createObjectURL(pdfBlob);

        this.dashboardComponent.loadDashboard(this.dashboard.urlPdf);
      })
      .catch((ex) => {
        console.log(ex);
        debugger;
        this._dashboardService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Dashboards'
        );
      });
  }

  /*
  loadReport(url: string): void {
    this._dashboardService.getReport(url)
      .then((res) => {
        debugger;
        console.log(res);
      })
      .catch((ex) => {
        console.log(ex);
        debugger;
        this._dashboardService.showMessageError(
          CONSTANT.MESSAGE.errorListar + ' Dashboards'
        );
      });
  }
  */
}
