import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Check if the user is authenticated
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('Access denied: No token found');
    return false;
  }
  return true;
};
