import { TestBed } from '@angular/core/testing';

import { GuitarApiServiceService } from './guitar-api-service';

describe('GuitarApiServiceService', () => {
  let service: GuitarApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
