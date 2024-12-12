import { TestBed } from '@angular/core/testing';

import { EtudiantServService } from './etudiant-serv.service';

describe('EtudiantServService', () => {
  let service: EtudiantServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
