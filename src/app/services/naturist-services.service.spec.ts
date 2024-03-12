import { TestBed } from '@angular/core/testing';

import { NaturistServicesService } from './naturist-services.service';

describe('NaturistServicesService', () => {
  let service: NaturistServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturistServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
