# 🩺 Doctor Appointment Booking System

This is an Angular project that allows **patients to book appointments** with doctors, and enables **doctors to view and manage those appointments** through a secure dashboard.

## 🚀 Features

- Patient appointment booking form
- Doctor dashboard to view patient data
- JWT-based authentication
- Protected routes for authorized access
- Proxy setup to handle API calls

## 🔐 Authentication and API

This project uses the following API for login and authentication:

🔗 [https://freeapi.miniprojectideas.com](https://freeapi.miniprojectideas.com)

- **JWT Authentication**: Users log in using credentials and receive a JWT token.
- **Token Storage**: The JWT token is stored in local storage.
- **Route Guards**: Routes are protected and accessible only with a valid token.

## 🔧 Development Setup

To run this project locally with proxy support (to avoid CORS issues):

```bash
ng serve --proxy-config proxy.conf.json
```
