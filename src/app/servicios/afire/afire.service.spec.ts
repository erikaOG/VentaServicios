import { TestBed, inject } from '@angular/core/testing';

import { AfireService } from './afire.service';

describe('AfireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfireService]
    });
  });

  it('should be created', inject([AfireService], (service: AfireService) => {
    expect(service).toBeTruthy();
  }));
});
