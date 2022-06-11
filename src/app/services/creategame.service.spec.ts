import { TestBed } from '@angular/core/testing';

import { CreategameService } from './creategame.service';

describe('CreategameService', () => {
  let service: CreategameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreategameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
