
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    NgxExtendedPdfViewerModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
