import { TestBed } from '@angular/core/testing';

import { AppointmentSignals } from './appointment-signals';

describe('AppointmentSignals', () => {
  let service: AppointmentSignals;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentSignals);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
