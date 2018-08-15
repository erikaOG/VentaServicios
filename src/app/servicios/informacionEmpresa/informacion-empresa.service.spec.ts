import { TestBed, inject } from '@angular/core/testing';

import { InformacionEmpresaService } from './informacion-empresa.service';

describe('InformacionEmpresaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacionEmpresaService]
    });
  });

  it('should be created', inject([InformacionEmpresaService], (service: InformacionEmpresaService) => {
    expect(service).toBeTruthy();
  }));
});
