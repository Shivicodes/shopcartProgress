import { TestBed } from '@angular/core/testing';

import { CustomerDatasetService } from './customer-dataset.service';

describe('CustomerDatasetService', () => {
  let service: CustomerDatasetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDatasetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
