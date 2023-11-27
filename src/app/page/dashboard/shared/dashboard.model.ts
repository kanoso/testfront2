export interface IDashboard {
  dashboardParentGuid: string;
  guid: string;
  name: string;
  urlPdf: string;
  pdfBlod: any;
}

export class Dashboard implements IDashboard {
  dashboardParentGuid: string;
  guid: string;
  name: string;
  urlPdf: string;
  pdfBlod: any;

  onstructor(
    dashboard?
  ){
    this.dashboardParentGuid = dashboard.dashboardParentGuid;
    this.guid = dashboard.guid;
    this.name = dashboard.name;
    this.urlPdf = dashboard.urlPdf;
    this.pdfBlod = dashboard.pdfBlod;
  }
}
