import { TestBed } from '@angular/core/testing';

import { AppartementServiceService } from './appartement-service.service';

describe('AppartementServiceService', () => {
  let service: AppartementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppartementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
