import { Routes } from '@angular/router';

import { DashboardComponent } from './Components/pages/dashboard/dashboard.component';
import { BackUpComponent } from './Components/pages/back-up/back-up.component';

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
