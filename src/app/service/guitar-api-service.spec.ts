import { TestBed } from '@angular/core/testing';

import { GuitarApiService } from './guitar-api-service';

describe('GuitarApiServiceService', () => {
  let service: GuitarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
