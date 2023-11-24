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
  srcPdf: string = 'assets/example.pdf';
  showSpinner: boolean = true;
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
    if(this.srcPdf != 'assets/example.pdf')
      this.showSpinner = false;
  }

  public loadDashboard(url:string){
    this.showSpinner = true;
    this.srcPdf = url;
  }
}
