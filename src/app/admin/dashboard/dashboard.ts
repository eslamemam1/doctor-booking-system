import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  router = inject(Router);
  http = inject(HttpClient);
  data: any = [];

  delet(item: any) {
    const id = item.id;
    this.http
      .delete<any>(
        `https://685dbcd87b57aebd2af6ff10.mockapi.io/appointments/${id}`
      )
      .subscribe((response) => {
        console.log('✅ تم الحذف بنجاح:', response);
        // إزالة العنصر من المصفوفة المحلية بعد الحذف من السيرفر
        this.data = this.data.filter((i: any) => i.id !== id);
      });
  }

  ngOnInit(): void {
    this.http
      .get('https://685dbcd87b57aebd2af6ff10.mockapi.io/appointments')
      .subscribe((data) => {
        console.log(data);
        this.data = data as any[];
      });
  }
  logout() {
    console.log('Logout clicked');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
