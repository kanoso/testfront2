import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CONSTANT } from './constant.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  public show(tipoMessage: number, msg: string) {
    let durationInSeconds: number = 5;

     switch (tipoMessage) {
      case CONSTANT.TYPEMESSAGE.success:
        this._snackBar.open(msg, 'Succes', {
          duration: durationInSeconds * 1000,
        });
       break;
      case CONSTANT.TYPEMESSAGE.error:
        this._snackBar.open(msg, 'Error', {
          duration: durationInSeconds * 1000,
        });
       break;

    // switch (tipoMessage) {
    //   case CONSTANT.TYPEMESSAGE.success:
    //     this.toastr.success(msg, 'Success');
    //     break;
    //   case CONSTANT.TYPEMESSAGE.error:
    //     this.toastr.error(msg, 'Error');
    //     break;
    //   case CONSTANT.TYPEMESSAGE.info:
    //     this.toastr.info(msg, 'Information');
    //     break;
    //   case CONSTANT.TYPEMESSAGE.warn:https://m1.material.io/components/bottom-navigation.html
    //     this.toastr.warning(msg, 'Warning');
    //     break;
    //   default:
    //     this.toastr.show(msg);
    //     break;
    // }
    }
  }
}
