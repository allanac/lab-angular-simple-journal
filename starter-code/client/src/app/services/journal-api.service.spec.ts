import { TestBed, inject } from '@angular/core/testing';

import { JournalApiService } from './journal-api.service';

describe('JournalApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalApiService]
    });
  });

  it('should be created', inject([JournalApiService], (service: JournalApiService) => {
    expect(service).toBeTruthy();
  }));
});
