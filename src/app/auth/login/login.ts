import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'], // ✅ صح
})
export class Login {
  http = inject(HttpClient);
  router = inject(Router);
  error = '';

  loginForm = new FormGroup({
    EmailId: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    this.http.post<any>('/api/User/Login', this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.data.token);

        // Example redirect based on email
        if (this.loginForm.value.EmailId === 'eslamemam@gmail.com') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.error('Login failed', error);
      },
    });

    console.log('Form Submitted', this.loginForm.value);
  }
}
