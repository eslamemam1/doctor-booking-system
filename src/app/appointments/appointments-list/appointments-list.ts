import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-appointments-list',
  imports: [TranslateModule, CommonModule],
  templateUrl: './appointments-list.html',
  styleUrl: './appointments-list.css',
})
export class AppointmentsList {
  appointments = [
    {
      patientName: 'John Doe',
      phoneNumber: '123-456-7890',
      appointmentDate: '2023-10-01',
      appointmentTime: '10:00 AM',
      notes: 'Follow-up appointment',
    },
  ];
}
