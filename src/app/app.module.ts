import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './page/dashboard/dashboard.module';
import { DashboardService } from './page/dashboard/shared/dashboard.service';
import { DataService } from './shared/service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule, DashboardModule
  ],
  providers: [DashboardService, DataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
