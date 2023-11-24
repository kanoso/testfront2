import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyComponent, SearchComponent, UserComponent } from './components';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './components/logo/logo.component';

import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { RouterModule } from '@angular/router';
import { DashboardModule } from '../page/dashboard/dashboard.module';

@NgModule({
  declarations: [
    SearchComponent,
    UserComponent,
    NotifyComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule, MatIconModule, MatSelectModule, MatFormFieldModule, MatSnackBarModule,
    RouterModule, DashboardModule
  ],
  exports: [
    SearchComponent,
    UserComponent,
    NotifyComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
