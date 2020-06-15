import { TestBed } from '@angular/core/testing';

import { ServiciopersonaService } from './serviciopersona.service';

describe('ServiciopersonaService', () => {
  let service: ServiciopersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
