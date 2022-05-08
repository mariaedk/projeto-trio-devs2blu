import { TestBed } from '@angular/core/testing';

import { MedicamentoPacienteService } from './medicamento-paciente.service';

describe('MedicamentoPacienteService', () => {
  let service: MedicamentoPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicamentoPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
