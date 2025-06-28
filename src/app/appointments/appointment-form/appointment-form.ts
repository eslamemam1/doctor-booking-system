import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-appointment-form',
  imports: [ReactiveFormsModule, CommonModule, TranslateModule],
  templateUrl: './appointment-form.html',
  styleUrl: './appointment-form.css',
})
export class AppointmentForm {
  http = inject(HttpClient);
  submitForm = new FormGroup({
    patientName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    appointmentDate: new FormControl('', [Validators.required]),
    appointmentTime: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (this.submitForm.invalid) return;
    console.log('📅 بيانات الحجز:', this.submitForm.value);
    this.http
      .post(
        'https://685dbcd87b57aebd2af6ff10.mockapi.io/appointments',
        this.submitForm.value
      )
      // tt
      .subscribe({
        next: (response) => {
          console.log('✅ تم إرسال البيانات بنجاح:', response);
        },
        error: (error) => {
          console.error('❌ حدث خطأ أثناء إرسال البيانات:', error);
        },
      });
    this.submitForm.reset();
  }
}
