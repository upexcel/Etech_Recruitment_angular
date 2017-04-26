import { TestBed, inject } from '@angular/core/testing';

import { ImapemailsService } from './imapemails.service';

describe('ImapemailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImapemailsService]
    });
  });

  it('should ...', inject([ImapemailsService], (service: ImapemailsService) => {
    expect(service).toBeTruthy();
  }));
});
