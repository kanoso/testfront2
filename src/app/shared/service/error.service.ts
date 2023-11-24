
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { CONSTANT } from './constant.service';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
  constructor(
      private _notificationService: NotificationService
  ){}

  /**
   * Show message and return val status
   * @param {*} data
   * @returns {boolean}
   * @memberof ErrorService
   */
  public getResultMessage(response: any): boolean {
    let rpt: boolean = true;
    switch (response.Status) {
      case 1:
        if(response.Message)
          this.showMessage(CONSTANT.TYPEMESSAGE.success, response.Message);
        break;
      case 2:
        if(response.Message)
          this.showMessage(CONSTANT.TYPEMESSAGE.warn, response.Message);
        break;
      default:
        rpt = false;
        response.Data = [];
        if(response.Message)
          this.showMessage(CONSTANT.TYPEMESSAGE.error, response.Message);
        else
          this._notificationService.show(CONSTANT.TYPEMESSAGE.error, CONSTANT.MESSAGE.error);
        break;
    }
    return rpt;
  }

  public showMessage(tipoMessage: number, messages: string[]){
    messages.forEach(msg => {
      this._notificationService.show(tipoMessage, msg);
    });
  }

  public showMessageError(messages: string){
    this._notificationService.show(CONSTANT.TYPEMESSAGE.error, messages);
  }

  public showMessageInfo(messages: string){
    this._notificationService.show(CONSTANT.TYPEMESSAGE.info, messages);
  }
}
