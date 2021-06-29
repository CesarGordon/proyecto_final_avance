import { TestBed } from '@angular/core/testing';

import { ServicioCambioEstadoService } from './servicio-cambio-estado.service';

describe('ServicioCambioEstadoService', () => {
  let service: ServicioCambioEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCambioEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

