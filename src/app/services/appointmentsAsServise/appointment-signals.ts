import { Appointments } from './../appointments';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentSignals {
  constructor(private appointments: Appointments) {
    // ✅ تابع التغييرات في BehaviorSubject وحدث الـ signal
    this.appointments.appointment$.subscribe((appointments) => {
      this.Appointments.set(appointments);
    });
  }
  Appointments = signal<any[]>([]); // Signal to hold the list of appointments
  private http = inject(HttpClient);
  private apiUrl = 'https://685dbcd87b57aebd2af6ff10.mockapi.io/appointments'; // Replace with your API URL
  getAppointments(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((appointments) => {
      this.Appointments.set(appointments); // Update the signal with fetched appointments
    });
  }
}
