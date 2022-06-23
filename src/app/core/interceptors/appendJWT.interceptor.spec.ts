import { TestBed } from '@angular/core/testing';

import { AppendJWT } from './appendJWT.interceptor';

describe('AppendJWT', () => {
  let service: AppendJWT;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppendJWT);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
