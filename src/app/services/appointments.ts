import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Appointments {
  constructor(private http: HttpClient) {}
  url = 'https://685dbcd87b57aebd2af6ff10.mockapi.io/appointments';
  private appointmentSubject = new BehaviorSubject<any[]>([]);
  appointment$ = this.appointmentSubject.asObservable();
  loadAppointments() {
    this.http.get<any[]>(this.url).subscribe((appointments) => {
      this.appointmentSubject.next(appointments);
    });
  }
  // Method to delete an appointment by ID
  deleteAppointment(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  updateAppointmentStatus(id: string, status: string): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, { status });
  }

  //getAppointments(): Observable<any> {
  //  return this.http.get<any>(this.url);
  //}
}
