import { TestBed } from '@angular/core/testing';

import { ReceiptGuard } from './receipt.guard';

describe('ReceiptGuard', () => {
  let guard: ReceiptGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReceiptGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
