import { TestBed } from '@angular/core/testing';

import { ServFormularioPacientesService } from './serv-formulario-pacientes.service';

describe('ServFormularioPacientesService', () => {
  let service: ServFormularioPacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServFormularioPacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
