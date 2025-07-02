import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Appointments } from '../../services/appointments';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TranslateModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  router = inject(Router);
  //http = inject(HttpClient);
  appointmentService = inject(Appointments);
  data: any = [];

  delet(item: any) {
    this.appointmentService.deleteAppointment(item.id).subscribe({
      next: (response) => {
        console.log('Appointment deleted successfully', response);
        // Optionally, you can remove the deleted item from the local data array
        this.data = this.data.filter(
          (appointment: { id: any }) => appointment.id !== item.id
        );
      },
      error: (error) => {
        console.error('Error deleting appointment', error);
      },
    });
  }

  //
  ngOnInit(): void {
    this.appointmentService.appointment$.subscribe((data) => {
      console.log(data);
      this.data = data as any[];
    });
    this.appointmentService.loadAppointments();
  }

  //
  logout() {
    console.log('Logout clicked');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  updateAppointmentStatus(appointment: any) {
    this.appointmentService
      .updateAppointmentStatus(appointment.id, 'confirmed')
      .subscribe({
        next: (updated) => {
          appointment.status = updated.status;
          console.log('Appointment confirmed:', updated);
          this.appointmentService.loadAppointments(); // تحدث باقي الواجهات
        },
        error: (err) => {
          console.error('Error confirming appointment:', err);
        },
      });
  }

  cancelAppointment(appointment: any) {
    this.appointmentService
      .updateAppointmentStatus(appointment.id, 'cancelled')
      .subscribe({
        next: (updated) => {
          appointment.status = updated.status;
          console.log('Appointment cancelled:', updated);
          this.appointmentService.loadAppointments(); // تحدث باقي الواجهات
        },
        error: (err) => {
          console.error('Error cancelling appointment:', err);
        },
      });
  }
}
