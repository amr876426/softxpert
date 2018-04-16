import { TestBed, inject } from '@angular/core/testing';

import { Homeservice } from '../services/home.service';

describe('HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Homeservice]
    });
  });

  it('should be created', inject([Homeservice], (service: Homeservice) => {
    expect(service).toBeTruthy();
  }));
});
