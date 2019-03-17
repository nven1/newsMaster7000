import { TestBed } from '@angular/core/testing';

import { WebconfService } from './webconf.service';

describe('WebconfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebconfService = TestBed.get(WebconfService);
    expect(service).toBeTruthy();
  });
});
