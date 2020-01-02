import { TestBed } from '@angular/core/testing';

import { GetdetailsfromsevService } from './getdetailsfromsev.service';

describe('GetdetailsfromsevService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetdetailsfromsevService = TestBed.get(GetdetailsfromsevService);
    expect(service).toBeTruthy();
  });
});
