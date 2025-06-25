import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './admin/dashboard/dashboard';
import { HomePage } from './home-page/home-page';
import { AppointmentForm } from './appointments/appointment-form/appointment-form';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: '', component: HomePage },
  { path: 'appointment', component: AppointmentForm },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
