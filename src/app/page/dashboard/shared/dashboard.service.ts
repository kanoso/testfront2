
import { Injectable } from '@angular/core';
import { DataService, ErrorService } from 'src/app/shared/service';

@Injectable({providedIn: 'root'})
export class DashboardService {
  methodGetAllURL: string = '/api/message';

  constructor(
    private _dataService: DataService,
    private _errorService: ErrorService,
  ) { }


  getDashboard(params: any): Promise<any> {
      return new Promise((resolve, reject) => {
      this._dataService.execPostJson(this.methodGetAllURL, params)
       .subscribe((res: any) => {
         resolve(res);
       }, reject);
     });
   }

   /**
   * Show Message Error
   * @param message
   */
  showMessageError(message: string) {
    debugger;
    this._errorService.showMessageError(message);
  }
}
