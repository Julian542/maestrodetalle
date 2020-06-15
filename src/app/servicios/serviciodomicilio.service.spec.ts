import { TestBed } from '@angular/core/testing';

import { ServiciodomicilioService } from './serviciodomicilio.service';

describe('ServiciodomicilioService', () => {
  let service: ServiciodomicilioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciodomicilioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
