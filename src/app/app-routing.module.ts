import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ecm',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //outlet: 'box'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //outlet: 'box'
  },

  // {
  //   path: 'layout',
  //   loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./page/dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
  {
    path: '**',
    redirectTo: 'ecm',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
