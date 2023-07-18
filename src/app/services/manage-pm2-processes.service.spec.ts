import { TestBed } from '@angular/core/testing';

import { ManagePm2ProcessesService } from './manage-pm2-processes.service';

describe('ManagePm2ProcessesService', () => {
  let service: ManagePm2ProcessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagePm2ProcessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
