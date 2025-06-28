import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Appointments {
  constructor(private http: HttpClient) {}
  url = 'https://685dbcd87b57aebd2af6ff10.mockapi.io/appointments';
  // Method to delete an appointment by ID
  deleteAppointment(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  getAppointments(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
