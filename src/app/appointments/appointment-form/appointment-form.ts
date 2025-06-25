import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './appointment-form.html',
  styleUrl: './appointment-form.css',
})
export class AppointmentForm {
  submitForm = new FormGroup({
    PatientName: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required]),
    AppointmentDate: new FormControl('', [Validators.required]),
    AppointmentTime: new FormControl('', [Validators.required]),
    Notes: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (this.submitForm.invalid) return;
    console.log('📅 بيانات الحجز:', this.submitForm.value);
    this.submitForm.reset();
  }
}
