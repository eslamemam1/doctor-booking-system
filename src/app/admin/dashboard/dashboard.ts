import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  router = inject(Router);
  logout() {
    console.log('Logout clicked');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
