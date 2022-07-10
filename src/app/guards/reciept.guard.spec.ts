import { TestBed } from '@angular/core/testing';

import { RecieptGuard } from './reciept.guard';

describe('RecieptGuard', () => {
  let guard: RecieptGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RecieptGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
