import { TestBed } from '@angular/core/testing';

import { VerifiedTokenGuard } from './verified-token.guard';

describe('VerifiedTokenGuard', () => {
  let guard: VerifiedTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifiedTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
