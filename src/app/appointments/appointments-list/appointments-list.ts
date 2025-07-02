import { AppointmentSignals } from './../../services/appointmentsAsServise/appointment-signals';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-appointments-list',
  imports: [TranslateModule, CommonModule],
  templateUrl: './appointments-list.html',
  styleUrl: './appointments-list.css',
})
export class AppointmentsList implements OnInit {
  constructor(public appointmentSignals: AppointmentSignals) {}

  ngOnInit() {
    this.appointmentSignals.getAppointments();
    console.log(this.appointmentSignals);
    console.log('Appointments List Component Initialized');
  }
}
