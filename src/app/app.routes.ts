import { Routes } from '@angular/router';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { BackUpComponent } from './components/pages/back-up/back-up.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'backUp',
    component:BackUpComponent
  },
];
