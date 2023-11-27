import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from './shared/dashboard.service';
import { IDashboard } from './shared/dashboard.model';
import { CONSTANT } from 'src/app/shared/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  srcPdf: string = 'https://gorgon.nr-assets.net/image/b65f33b6-4357-42bc-ab41-b0f9d658b3c5?format=PDF&width=1700';  //'assets/example.pdf';
  showSpinner: boolean = false;
  titleDashboard: string = 'Dashboard...';
  dashboards: IDashboard[];

  /**
   * Creates an instance of DashboardComponent.
   * @memberof DashboardComponent
   */
  constructor(
    private _dashboardService: DashboardService
  ) {}

  /**
   * On Init
   * @memberof DashboardComponent
   */
  ngOnInit(): void {

  }

  onPagesLoaded(event){
    if(this.srcPdf != 'https://gorgon.nr-assets.net/image/b65f33b6-4357-42bc-ab41-b0f9d658b3c5?format=PDF&width=1700') //'assets/example.pdf')
      this.showSpinner = false;
  }

  public loadDashboard(url: any){
    debugger;
    /*
    const blob = new Blob( [ url ], {
      type: "application/json;charset=utf-8"
    });
    */

    //this.showSpinner = true;
    //this.srcPdf = URL.createObjectURL(blob);
    //this.srcPdf = url;
  }
}
